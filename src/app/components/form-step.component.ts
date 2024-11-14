import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

@Component({
  selector: 'app-form-step',
  standalone: true,
  imports: [CommonModule, FormlyModule, FormlyBootstrapModule],
  template: `
    <div class="form-step">
      <h3>{{ title }}</h3>
      <formly-form
        [form]="form"
        [model]="model"
        [fields]="fields">
      </formly-form>
    </div>
  `
})
export class FormStepComponent {
  @Input() title!: string;
  @Input() form!: FormGroup;
  @Input() model: any;
  @Input() fields!: FormlyFieldConfig[];
}