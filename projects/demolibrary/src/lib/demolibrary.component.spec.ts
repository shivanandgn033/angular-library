import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemolibraryComponent } from './demolibrary.component';

describe('DemolibraryComponent', () => {
  let component: DemolibraryComponent;
  let fixture: ComponentFixture<DemolibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemolibraryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemolibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
