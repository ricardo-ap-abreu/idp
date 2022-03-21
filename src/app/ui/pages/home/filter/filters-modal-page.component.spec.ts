import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {FiltersModalPage} from './filters-modal-page.component';

describe('FiltersModal', () => {
  let component: FiltersModalPage;
  let fixture: ComponentFixture<FiltersModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FiltersModalPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FiltersModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
