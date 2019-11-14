import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandSuccessComponent } from './command-success.component';

describe('CommandSuccessComponent', () => {
  let component: CommandSuccessComponent;
  let fixture: ComponentFixture<CommandSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
