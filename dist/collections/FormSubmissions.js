"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FormSubmission = {
    slug: 'form-submissions',
    fields: [
        {
            type: 'text',
            name: 'name',
            label: 'Enter your name',
            admin: {
                readOnly: true,
            },
        },
        {
            type: 'text',
            name: 'email',
            label: 'Enter your email',
            admin: {
                readOnly: true,
            },
        },
        {
            type: 'text',
            name: 'phoneNumber',
            label: 'Enter your phone number',
            admin: {
                readOnly: true,
            },
        },
        {
            type: 'text',
            name: 'subject',
            label: 'Subject',
            admin: {
                readOnly: true,
            },
        },
        {
            type: 'textarea',
            name: 'message',
            label: 'Your Message',
            admin: {
                readOnly: true,
            },
        },
        {
            type: 'textarea',
            name: 'source',
            label: 'Source',
            admin: {
                position: 'sidebar',
                readOnly: true,
            },
        },
    ],
};
exports.default = FormSubmission;
