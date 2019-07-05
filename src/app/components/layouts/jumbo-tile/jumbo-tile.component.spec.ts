import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumboTileComponent } from './jumbo-tile.component';

describe('JumboTileComponent', () => {
  let component: JumboTileComponent;
  let fixture: ComponentFixture<JumboTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumboTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumboTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
