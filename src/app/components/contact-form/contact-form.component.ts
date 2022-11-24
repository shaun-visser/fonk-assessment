import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { requireCheckboxesToBeCheckedValidator } from './require-checkboxes-to-be-checked.validator';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  contactForm!: FormGroup;

  sparkInnovation = false;
  accelationProcess = false;
  websiteDevelopment = false;
  appDevelopment = false;
  productExists = false;

  budgetList = [
    { name: 'R50 000 - R100 000', value: 'R50 000 - R100 000', checked: false },
    {
      name: 'R100 000 - R125 000',
      value: 'R100 000 - R125 000',
      checked: false,
    },
    {
      name: 'R125 000 - R500 000',
      value: 'R125 000 - R500 000',
      checked: false,
    },
    { name: 'R500 000 - R1M+', value: 'R500 000 - R1M+', checked: false },
  ];

  constructor() {
    this.contactForm = new FormGroup({
      name: new FormControl('', { validators: [Validators.required] }),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9]\d{9}$/),
      ]),
      message: new FormControl('', {}),
      services: new FormGroup(
        {
          sparkInnovation: new FormControl(false),
          accelationProcess: new FormControl(false),
          websiteDevelopment: new FormControl(false),
          appDevelopment: new FormControl(false),
        },
        requireCheckboxesToBeCheckedValidator()
      ),
      budget: new FormControl('', [Validators.required]),
      productExists: new FormControl(''),
    });
  }

  ngOnInit(): void {}

  submitForm() {
    console.log('form was submitted');
    if (this.contactForm.valid) {
      console.log('Profile form data :: ', this.contactForm.value);
    }
  }
}
