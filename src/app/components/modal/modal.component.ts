import { Component, inject, OnInit } from '@angular/core';
import { ModalService } from './modal.service';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, ReactiveFormsModule } from '@angular/forms';

interface UsuarioForm {
  user: string;
  pass: string;
  Rpassword: string;
  role: string;
}

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  private readonly modalService = inject(ModalService);

  userForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group<any>({
      user: ['', Validators.required],
      pass: ['', Validators.required],
      Rpassword: ['', Validators.required],
      role: ['', Validators.required],
    }, {
      validators: this.passwordMatchValidator
    });
  }

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const pass = control.get('pass')?.value;
    const Rpassword = control.get('Rpassword')?.value;
    return pass === Rpassword ? null : { mismatch: true };
  }

  crearUsuario(): void {
    if (this.userForm.valid) {
      // Handle form submission logic here
      console.log(this.userForm.value);
    }
  }

  closeModal(): void {
    this.modalService.closeModal();
  }

   // Getters for form controls to use in the template
   get user() { return this.userForm.get('user'); }
   get pass() { return this.userForm.get('pass'); }
   get Rpassword() { return this.userForm.get('Rpassword'); }
   get role() { return this.userForm.get('role'); }
}
