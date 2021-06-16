import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemsProductosComponent } from './list-items-productos.component';

describe('ListItemsProductosComponent', () => {
  let component: ListItemsProductosComponent;
  let fixture: ComponentFixture<ListItemsProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListItemsProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemsProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
