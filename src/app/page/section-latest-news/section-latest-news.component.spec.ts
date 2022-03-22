import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionLatestNewsComponent } from './section-latest-news.component';

describe('SectionLatestNewsComponent', () => {
  let component: SectionLatestNewsComponent;
  let fixture: ComponentFixture<SectionLatestNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionLatestNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionLatestNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
