import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]]
    });
  
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Call login API here
      this.router.navigate(['/add-party']);
      this.checkFormControls();
    }
  }
  checkFormControls(): void {
    for (const controlName in this.loginForm.controls) {
      if (this.loginForm.controls.hasOwnProperty(controlName)) {
        const control = this.loginForm.controls[controlName];
        if (control.errors && control.errors?.['required']) { // Optional chaining here
          console.error(`${controlName} is required`);
        }
      }
    }
  }

}
