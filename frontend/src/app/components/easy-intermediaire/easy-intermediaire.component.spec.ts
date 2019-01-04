import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyIntermediaireComponent } from './easy-intermediaire.component';

describe('EasyIntermediaireComponent', () => {
  let component: EasyIntermediaireComponent;
  let fixture: ComponentFixture<EasyIntermediaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasyIntermediaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EasyIntermediaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
