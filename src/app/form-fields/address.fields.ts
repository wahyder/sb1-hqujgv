import { FormlyFieldConfig } from '@ngx-formly/core';

export const addressFields: FormlyFieldConfig[] = [
  {
    key: 'address',
    fieldGroup: [
      {
        key: 'street',
        type: 'input',
        props: {
          label: 'Street Address',
          required: true,
          placeholder: 'Enter your street address',
        },
      },
      {
        key: 'city',
        type: 'input',
        props: {
          label: 'City',
          required: true,
          placeholder: 'Enter your city',
        },
      },
      {
        key: 'zipCode',
        type: 'input',
        props: {
          label: 'ZIP Code',
          required: true,
          placeholder: 'Enter your ZIP code',
        },
      },
    ],
  },
];