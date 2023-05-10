"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AI = void 0;
exports.AI = {
    slug: 'ai',
    labels: {
        singular: 'Artificial Intelligence',
        plural: 'Artificial Intelligence Blocks',
    },
    fields: [
        {
            name: 'card',
            label: 'Card',
            type: 'array',
            minRows: 4,
            maxRows: 4,
            fields: [
                {
                    type: 'text',
                    name: 'name',
                    label: 'Name',
                    required: true,
                },
                {
                    type: 'text',
                    name: 'desc',
                    label: 'Desc',
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
            required: true,
        },
        {
            name: 'title',
            type: 'text',
            label: 'Title Content',
            required: true,
        },
        {
            name: 'list',
            type: 'array',
            label: 'List',
            required: true,
            fields: [
                {
                    type: 'text',
                    name: 'title',
                    label: 'Title',
                    required: true,
                },
            ],
        },
        {
            name: 'buttons',
            type: 'array',
            label: 'Buttons',
            maxRows: 1,
            labels: {
                singular: 'Button',
                plural: 'Buttons',
            },
            fields: [
                {
                    type: 'row',
                    fields: [
                        {
                            name: 'label',
                            label: 'Button Label',
                            type: 'text',
                            required: true,
                        },
                    ],
                },
                {
                    name: 'page',
                    label: 'Page to link to',
                    type: 'relationship',
                    relationTo: 'pages',
                    required: true,
                },
            ],
        },
    ],
};
exports.default = exports.AI;
