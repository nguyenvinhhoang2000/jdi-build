"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Services = {
    slug: 'services',
    admin: {
        useAsTitle: 'title',
    },
    access: {
        read: function () { return true; }, // Everyone can read Pages
    },
    fields: [
        {
            type: 'text',
            name: 'title',
            label: 'Title',
            required: true,
        },
        {
            type: 'text',
            name: 'desc',
            label: 'Description',
            required: true,
        },
        {
            name: 'image',
            label: 'Image',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
    ],
};
exports.default = Services;
