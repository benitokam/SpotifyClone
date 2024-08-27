import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiseFormeBodyComponent } from './mise-forme-body.component';

describe('MiseFormeBodyComponent', () => {
  let component: MiseFormeBodyComponent;
  let fixture: ComponentFixture<MiseFormeBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MiseFormeBodyComponent]
    });
    fixture = TestBed.createComponent(MiseFormeBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
