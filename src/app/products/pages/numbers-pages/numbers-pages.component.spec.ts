import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbersPagesComponent } from './numbers-pages.component';

describe('NumbersPagesComponent', () => {
  let component: NumbersPagesComponent;
  let fixture: ComponentFixture<NumbersPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NumbersPagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NumbersPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
