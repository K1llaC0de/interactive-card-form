import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ 
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    ToastModule,
    MessagesModule
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  cardForm: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder) {
    this.cardForm = this.fb.group({
      cardName: ['', Validators.required],
      cardNumber: ['', [Validators.required, Validators.pattern(/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/)]],
      month: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])$/)]], 
      year: ['', [Validators.required, Validators.pattern(/^\d{2}$/)]],
      cvc: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]] 
    });
  }

  onSubmit() {
    //this.cardForm.markAllAsTouched();
    if (this.cardForm.valid) {
      this.submitted = true;
      console.log('Form submitted:', this.cardForm.value);
    }
  }

  resetForm() {
    this.submitted = false;
    this.cardForm.reset(); // Resetea el formulario y vuelve a la vista del formulario
  }

}
