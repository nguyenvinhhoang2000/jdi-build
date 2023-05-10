"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = void 0;
exports.Content = {
    slug: 'content',
    labels: {
        singular: 'Content',
        plural: 'Content Blocks',
    },
    fields: [
        {
            name: 'backgroundColor',
            label: 'Background Color',
            type: 'select',
            defaultValue: 'none',
            options: [
                {
                    label: 'None',
                    value: 'none',
                },
                {
                    label: 'Red',
                    value: 'red',
                },
                {
                    label: 'Blue',
                    value: 'blue',
                },
                {
                    label: 'Orange',
                    value: 'orange',
                },
            ],
        },
        {
            name: 'columns',
            type: 'array',
            minRows: 1,
            fields: [
                {
                    type: 'row',
                    fields: [
                        {
                            name: 'width',
                            label: 'Column Width',
                            type: 'select',
                            defaultValue: 'full',
                            required: true,
                            options: [
                                {
                                    label: 'One Third',
                                    value: 'oneThird',
                                },
                                {
                                    label: 'Half',
                                    value: 'half',
                                },
                                {
                                    label: 'Two Thirds',
                                    value: 'twoThirds',
                                },
                                {
                                    label: 'Full Width',
                                    value: 'full',
                                },
                            ],
                            admin: {
                                width: '50%',
                            },
                        },
                        {
                            name: 'alignment',
                            label: 'Alignment',
                            type: 'select',
                            defaultValue: 'left',
                            required: true,
                            options: [
                                {
                                    label: 'Left',
                                    value: 'left',
                                },
                                {
                                    label: 'center',
                                    value: 'center',
                                },
                                {
                                    label: 'Right',
                                    value: 'right',
                                },
                            ],
                            admin: {
                                width: '50%',
                            },
                        },
                    ],
                },
                {
                    name: 'content',
                    type: 'richText',
                    required: true,
                },
            ],
        },
        {
            name: 'accentLine',
            label: 'Enable Accent Line',
            type: 'checkbox',
            defaultValue: false,
        },
        {
            name: 'accentLineAlignment',
            label: 'Accent Line Alignment',
            type: 'radio',
            defaultValue: 'left',
            options: [
                {
                    label: 'Left',
                    value: 'left',
                },
                {
                    label: 'Right',
                    value: 'right',
                },
            ],
            admin: {
                condition: function (_, siblingData) { return siblingData.accentLine; },
                layout: 'horizontal',
            },
        },
        {
            type: 'row',
            fields: [
                {
                    name: 'paddingTop',
                    label: 'Padding Top',
                    type: 'select',
                    defaultValue: 'medium',
                    options: [
                        {
                            label: 'Small',
                            value: 'small',
                        },
                        {
                            label: 'Medium',
                            value: 'medium',
                        },
                        {
                            label: 'Large',
                            value: 'large',
                        },
                    ],
                    admin: {
                        width: '50%',
                    },
                },
                {
                    name: 'paddingBottom',
                    label: 'Padding Bottom',
                    type: 'select',
                    defaultValue: 'medium',
                    options: [
                        {
                            label: 'Small',
                            value: 'small',
                        },
                        {
                            label: 'Medium',
                            value: 'medium',
                        },
                        {
                            label: 'Large',
                            value: 'large',
                        },
                    ],
                    admin: {
                        width: '50%',
                    },
                },
            ],
        },
    ],
};
exports.default = exports.Content;
