import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabDestrezasComponent } from './tab-destrezas.component';

describe('TabDestrezasComponent', () => {
  let component: TabDestrezasComponent;
  let fixture: ComponentFixture<TabDestrezasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabDestrezasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabDestrezasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
