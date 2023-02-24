import {environment}  from './../environments/environment';



export const config={

    api:{

        url:environment.api.url,
        persona:{
            resource:"/persona"
        },
        vacuna:{
            resource:"/vacuna"
        }
        ,
        rol:{
            resource:"/rol"
        },
        asignacionrol:{
            resource:"/asignacionrol"
        }
        ,
        login:{
            resource:"/oauth/token"
        }

        ,
        registrovacuna:{
            resource:"/registrovacuna"
        }

        
        

        
        
    }
}