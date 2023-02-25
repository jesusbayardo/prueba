import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabEstudiantesNEEComponent } from './tab-estudiantes-nee.component';

describe('TabEstudiantesNEEComponent', () => {
  let component: TabEstudiantesNEEComponent;
  let fixture: ComponentFixture<TabEstudiantesNEEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabEstudiantesNEEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabEstudiantesNEEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
