"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicesList = void 0;
exports.ServicesList = {
    slug: 'services-list',
    labels: {
        singular: 'Services List',
        plural: 'Services List Blocks',
    },
    fields: [
        {
            name: 'services',
            type: 'relationship',
            relationTo: 'services',
            hasMany: true,
            required: true,
        },
        {
            name: 'background',
            type: 'radio',
            label: 'Background',
            options: [
                {
                    label: 'Rhombus',
                    value: 'RHOMBUS',
                },
                {
                    label: 'Cricle',
                    value: 'CRICLE',
                },
            ],
            defaultValue: 'RHOMBUS',
        },
    ],
};
exports.default = exports.ServicesList;
