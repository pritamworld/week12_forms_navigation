import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsConfirmationComponent } from './contact-us-confirmation-component';

describe('ContactUsConfirmationComponent', () => {
  let component: ContactUsConfirmationComponent;
  let fixture: ComponentFixture<ContactUsConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactUsConfirmationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactUsConfirmationComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
