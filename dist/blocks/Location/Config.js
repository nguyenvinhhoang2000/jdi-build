"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Location = void 0;
exports.Location = {
    slug: 'location',
    labels: {
        singular: 'Location',
        plural: 'Location Blocks',
    },
    fields: [
        {
            name: 'facebook',
            type: 'text',
            label: 'Link to Facebook',
        },
        {
            name: 'linkedin',
            type: 'text',
            label: 'Link to LinkedIn',
        },
        {
            name: 'twitter',
            type: 'text',
            label: 'Link to Twitter',
        },
        {
            name: 'telegram',
            type: 'text',
            label: 'Link to Telegram',
        },
        {
            name: 'location',
            type: 'array',
            label: 'Location',
            minRows: 1,
            fields: [
                {
                    name: 'address',
                    type: 'text',
                    label: 'Address',
                    required: true,
                },
            ],
        },
        {
            name: 'phone',
            type: 'array',
            label: 'Phone',
            minRows: 1,
            fields: [
                {
                    name: 'phoneNumber',
                    type: 'text',
                    label: 'Phone Number',
                    required: true,
                },
            ],
        },
        {
            name: 'email',
            type: 'array',
            label: 'Email',
            minRows: 1,
            fields: [
                {
                    name: 'email',
                    type: 'text',
                    label: 'Email',
                    required: true,
                },
            ],
        },
        {
            name: 'map',
            type: 'text',
            label: 'Map',
            required: true,
        },
    ],
};
exports.default = exports.Location;
