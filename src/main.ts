import { Component, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormModel } from './app/models/form.model';
import { personalInfoFields } from './app/form-fields/personal-info.fields';
import { addressFields } from './app/form-fields/address.fields';
import { preferencesFields } from './app/form-fields/preferences.fields';
import { FormStepComponent } from './app/components/form-step.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyBootstrapModule,
    FormStepComponent
  ],
  template: `
    <div class="container mt-5">
      <h2 class="text-center mb-4">Multi-step Registration Form</h2>
      
      <div class="step-indicator">
        <div 
          *ngFor="let step of steps; let i = index" 
          [class.active]="currentStep === i"
          class="step-dot">
        </div>
      </div>

      <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <div [ngSwitch]="currentStep">
          <app-form-step
            *ngSwitchCase="0"
            title="Personal Information"
            [form]="form"
            [fields]="personalInfoFields"
            [model]="model">
          </app-form-step>

          <app-form-step
            *ngSwitchCase="1"
            title="Address Information"
            [form]="form"
            [fields]="addressFields"
            [model]="model">
          </app-form-step>

          <app-form-step
            *ngSwitchCase="2"
            title="Preferences"
            [form]="form"
            [fields]="preferencesFields"
            [model]="model">
          </app-form-step>
        </div>

        <div class="step-navigation">
          <button 
            *ngIf="currentStep > 0"
            type="button"
            class="btn btn-secondary"
            (click)="prevStep()">
            Previous
          </button>
          <button 
            *ngIf="currentStep < steps.length - 1"
            type="button"
            class="btn btn-primary"
            (click)="nextStep()">
            Next
          </button>
          <button 
            *ngIf="currentStep === steps.length - 1"
            type="submit"
            class="btn btn-success"
            [disabled]="!form.valid">
            Submit
          </button>
        </div>
      </form>

      <div *ngIf="currentStep === 2" class="mt-3">
        <pre>{{ model | json }}</pre>
      </div>
    </div>
  `
})
export class App {
  form = new FormGroup({});
  model: FormModel = {
    preferences: {
      newsletter: false,
      terms: false
    }
  };
  currentStep = 0;
  steps = ['Personal Info', 'Address', 'Preferences'];

  personalInfoFields = personalInfoFields;
  addressFields = addressFields;
  preferencesFields = preferencesFields;

  nextStep() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.model);
      alert('Form submitted successfully!');
    }
  }
}

bootstrapApplication(App, {
  providers: [
    importProvidersFrom(
      BrowserAnimationsModule,
      FormlyModule.forRoot({
        extras: { lazyRender: true },
        validationMessages: [
          { name: 'required', message: 'This field is required' },
        ],
      }),
      FormlyBootstrapModule
    ),
  ],
});