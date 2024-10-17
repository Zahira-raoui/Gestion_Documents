import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierDocumentComponent } from './modifier-document.component';

describe('ModifierDocumentComponent', () => {
  let component: ModifierDocumentComponent;
  let fixture: ComponentFixture<ModifierDocumentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierDocumentComponent]
    });
    fixture = TestBed.createComponent(ModifierDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
