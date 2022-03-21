import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlertModalInputComponent } from './alert-modal-input.component';

describe('AlertModalInputComponent', () => {
  let component: AlertModalInputComponent;
  let fixture: ComponentFixture<AlertModalInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertModalInputComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlertModalInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
