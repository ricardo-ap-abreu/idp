import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfiniteListComponent } from './infinite-list.component';

describe('InfiniteListComponent', () => {
  let component: InfiniteListComponent;
  let fixture: ComponentFixture<InfiniteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfiniteListComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfiniteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
