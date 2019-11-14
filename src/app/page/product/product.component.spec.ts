import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssocComponent } from './product.component';

describe('AssocComponent', () => {
  let component: AssocComponent;
  let fixture: ComponentFixture<AssocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
