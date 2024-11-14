import { FormlyFieldConfig } from '@ngx-formly/core';

export const personalInfoFields: FormlyFieldConfig[] = [
  {
    key: 'personalInfo',
    fieldGroup: [
      {
        key: 'firstName',
        type: 'input',
        props: {
          label: 'First Name',
          required: true,
          placeholder: 'Enter your first name',
        },
      },
      {
        key: 'lastName',
        type: 'input',
        props: {
          label: 'Last Name',
          required: true,
          placeholder: 'Enter your last name',
        },
      },
      {
        key: 'email',
        type: 'input',
        props: {
          type: 'email',
          label: 'Email',
          required: true,
          placeholder: 'Enter your email',
        },
      },
    ],
  },
];