import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCovidComponent } from './table-covid.component';

describe('TableCovidComponent', () => {
  let component: TableCovidComponent;
  let fixture: ComponentFixture<TableCovidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableCovidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCovidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
