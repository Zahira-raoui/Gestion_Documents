import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManipulerDocumentsComponent } from './manipuler-documents.component';

describe('ManipulerDocumentsComponent', () => {
  let component: ManipulerDocumentsComponent;
  let fixture: ComponentFixture<ManipulerDocumentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManipulerDocumentsComponent]
    });
    fixture = TestBed.createComponent(ManipulerDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
