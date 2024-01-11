import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RecommendCardComponent } from './recommend-card.component';

describe('RecommendCardComponent', () => {
  let component: RecommendCardComponent;
  let fixture: ComponentFixture<RecommendCardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
