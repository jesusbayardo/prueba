import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPagesComponent } from '../pages/main-pages/main-pages.component';
import { Error404Component } from './main-pages/error404/error404.component';
import { AuthGuard } from '../guards/auth.guard';
import { RoleGuard } from '../guards/role.guard';



const routes: Routes = [
  { path: '', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },

  {
    path: 'menu', component: MainPagesComponent, canActivate: [],
    children: [

      {path: 'estudiantes-necesidades', loadChildren: () => import('./main-pages/estudiantes-necesidades/estudiantes-necesidades.module').then(m => m.EstudiantesNecesidadesModule)      },

      {path: 'estudiantes', loadChildren: () => import('./main-pages/estudiantes-necesidades/estudiantes-necesidades.module').then(m => m.EstudiantesNecesidadesModule)      },

   
       { path: '**', component: Error404Component }

    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
