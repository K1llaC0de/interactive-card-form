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

  constructor(private formBuilder: FormBuilder) {
    this.cardForm = new FormGroup({});
  }

  ngOnInit(): void {
    this.cardForm = this.formBuilder.group({
      cardName: ['', Validators.required]
    });
  }

  onSubmit() {
    this.cardForm.markAllAsTouched();
    if (this.cardForm.valid) {
      this.submitted = true;
      console.log('Form submitted:', this.cardForm.value);
    }
  }

}
