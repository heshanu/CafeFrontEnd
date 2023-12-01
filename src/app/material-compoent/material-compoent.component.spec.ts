import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialCompoentComponent } from './material-compoent.component';

describe('MaterialCompoentComponent', () => {
  let component: MaterialCompoentComponent;
  let fixture: ComponentFixture<MaterialCompoentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialCompoentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaterialCompoentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
