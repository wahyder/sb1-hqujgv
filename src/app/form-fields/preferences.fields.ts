import { FormlyFieldConfig } from '@ngx-formly/core';

export const preferencesFields: FormlyFieldConfig[] = [
  {
    fieldGroup: [
      {
        key: 'preferences.newsletter',
        type: 'checkbox',
        props: {
          label: 'Subscribe to newsletter',
        },
      },
      {
        key: 'preferences.emailFormat',
        type: 'select',
        props: {
          label: 'Email Format',
          options: [
            { label: 'HTML', value: 'html' },
            { label: 'Plain Text', value: 'text' },
          ],
        },
        expressions: {
          hide: '!model.preferences?.newsletter',
        },
        validation: {
          messages: {
            required: 'Email format is required when subscribed to newsletter',
          },
        },
      },
      {
        key: 'preferences.frequency',
        type: 'select',
        props: {
          label: 'Newsletter Frequency',
          options: [
            { label: 'Daily', value: 'daily' },
            { label: 'Weekly', value: 'weekly' },
            { label: 'Monthly', value: 'monthly' },
          ],
        },
        expressions: {
          hide: '!model.preferences?.newsletter',
        },
        validation: {
          messages: {
            required: 'Frequency is required when subscribed to newsletter',
          },
        },
      },
      {
        key: 'preferences.topics',
        type: 'multicheckbox',
        props: {
          label: 'Topics of Interest',
          options: [
            { label: 'Technology', value: 'tech' },
            { label: 'Business', value: 'business' },
            { label: 'Sports', value: 'sports' },
            { label: 'Entertainment', value: 'entertainment' },
          ],
        },
        expressions: {
          hide: '!model.preferences?.newsletter',
        },
      },
      {
        key: 'preferences.terms',
        type: 'checkbox',
        props: {
          label: 'I agree to the terms and conditions',
          required: true,
        },
        validation: {
          messages: {
            required: 'You must accept the terms and conditions',
          },
        },
      },
    ],
  },
];