import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageComponent } from './login-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { elementAt } from 'rxjs/operators';
import { ElementRef } from '@angular/core';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [ LoginPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Unit test:
  // Should ensure that the form is invalid
  // when the entered data is incorrect 
  it('should return the form as invalid', () => {
    const mockCrendentials = {
      email: '0x0x0x0x0',
      password: '11111111111111111111111111'
    }

    const emailForm: any = component.formLogin.get('email')
    const passwordForm: any = component.formLogin.get('password')

    emailForm.setValue(mockCrendentials.email)
    passwordForm.setValue(mockCrendentials.password)

    expect(component.formLogin.invalid).toEqual(true)
  });

  // Unit test:
// Should ensure that the form is valid
// when the entered data is correct
  it('should return the form as valid', () => {
    const mockCrendentials = {
      email: 'diana@gmail.com',
      password: 'hola123'
    }

    const emailForm: any = component.formLogin.get('email')
    const passwordForm: any = component.formLogin.get('password')

    emailForm.setValue(mockCrendentials.email)
    passwordForm.setValue(mockCrendentials.password)

    expect(component.formLogin.invalid).toEqual(false)
  });

  // Unit test:
// Should ensure that the login button
// contains the phrase "Sign in"
  it('should have the phrase "sign in', () => {
    const elementRef = fixture.debugElement.query(By.css('.btn'));
    const getInnerText = elementRef.nativeElement.innerText;

    expect(getInnerText).toContain('Sign in');
  });
});
