import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizacionProveedorComponent } from './actualizacion-proveedor.component';

describe('ActualizacionProveedorComponent', () => {
  let component: ActualizacionProveedorComponent;
  let fixture: ComponentFixture<ActualizacionProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActualizacionProveedorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActualizacionProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
