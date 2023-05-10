"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pricing = void 0;
exports.Pricing = {
    slug: 'pricing',
    labels: {
        singular: 'Pricing',
        plural: 'Pricing Blocks',
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            label: 'Title',
            required: true,
        },
        {
            name: 'image',
            label: 'Image',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'card',
            label: 'Card',
            type: 'array',
            required: true,
            minRows: 1,
            maxRows: 3,
            fields: [
                {
                    name: 'cardImage',
                    label: 'Card Image',
                    type: 'upload',
                    relationTo: 'media',
                    required: true,
                },
                {
                    name: 'name',
                    label: 'Name',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'priceList',
                    label: 'Price List',
                    type: 'array',
                    fields: [
                        {
                            name: 'label',
                            label: 'Label',
                            type: 'text',
                            required: true,
                        },
                        {
                            name: 'price',
                            label: 'Price',
                            type: 'text',
                        },
                    ],
                },
                {
                    name: 'monthly',
                    label: 'Monthly',
                    type: 'array',
                    fields: [
                        {
                            name: 'label',
                            label: 'Label',
                            type: 'text',
                            required: true,
                        },
                        {
                            name: 'price',
                            label: 'Price',
                            type: 'text',
                        },
                    ],
                },
            ],
        },
        {
            name: 'desc',
            type: 'text',
            label: 'Desc',
        },
    ],
};
exports.default = exports.Pricing;
