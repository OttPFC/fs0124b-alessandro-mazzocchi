import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {

  registrationForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // Inizializzazione del FormGroup con FormBuilder
    this.registrationForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  // Metodo per ottenere l'errore di validazione
  getErrorMessage(controlName: string): string {
    const control = this.registrationForm.get(controlName);

    if (!control) {
      return '';
    }

    return control.hasError('required') ? 'You must enter a value' :
           control.hasError('email') ? 'Not a valid email' :
           control.hasError('minlength') ? 'Password must be at least 6 characters long' :
           control.hasError('passwordMismatch') ? 'Passwords do not match' :
           '';
  }

  // Metodo per validare la conferma della password
  validatePassword() {
    const passwordControl = this.registrationForm.get('password');
    const confirmPasswordControl = this.registrationForm.get('confirmPassword');

    if (!passwordControl || !confirmPasswordControl) {
      return;
    }

    const password = passwordControl.value;
    const confirmPassword = confirmPasswordControl.value;

    if (password !== confirmPassword) {
      confirmPasswordControl.setErrors({ passwordMismatch: true });
    } else {
      confirmPasswordControl.setErrors(null);
    }
  }

  // Metodo per inviare il form
  onSubmit() {
    this.validatePassword();
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
    }
  }

}
