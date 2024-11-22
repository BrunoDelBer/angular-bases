import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdCharacterComponent } from './ad-character.component';

describe('AdCharacterComponent', () => {
  let component: AdCharacterComponent;
  let fixture: ComponentFixture<AdCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdCharacterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
