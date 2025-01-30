import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TudoListComponent } from './tudo-list.component';

describe('TudoListComponent', () => {
  let component: TudoListComponent;
  let fixture: ComponentFixture<TudoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TudoListComponent]
    });
    fixture = TestBed.createComponent(TudoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
