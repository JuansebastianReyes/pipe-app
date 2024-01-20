import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UncommonPagesComponent } from './uncommon-pages.component';

describe('UncommonPagesComponent', () => {
  let component: UncommonPagesComponent;
  let fixture: ComponentFixture<UncommonPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UncommonPagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UncommonPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
