"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.About = void 0;
exports.About = {
    slug: 'about',
    labels: {
        singular: 'About Block',
        plural: 'About Blocks',
    },
    fields: [
        {
            name: 'image',
            label: 'Image',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'title',
            label: 'Title',
            type: 'text',
            required: true,
        },
        {
            name: 'card',
            type: 'array',
            label: 'Card',
            minRows: 1,
            maxRows: 3,
            fields: [
                {
                    type: 'text',
                    name: 'title',
                    label: 'Title Card',
                    required: true,
                },
                {
                    type: 'text',
                    name: 'desc',
                    label: 'Desc Card',
                    required: true,
                },
            ],
            required: true,
        },
        {
            name: 'content',
            type: 'richText',
            required: true,
        },
    ],
};
exports.default = exports.About;
