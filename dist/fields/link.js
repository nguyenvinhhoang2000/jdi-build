"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var link = {
    name: 'link',
    type: 'group',
    fields: [
        {
            name: 'type',
            type: 'radio',
            defaultValue: 'page',
            options: [
                {
                    label: 'Page',
                    value: 'page',
                },
                {
                    label: 'Custom URL',
                    value: 'custom',
                },
            ],
            admin: {
                layout: 'horizontal',
            },
        },
        {
            type: 'row',
            fields: [
                {
                    name: 'label',
                    label: 'Label',
                    type: 'text',
                    required: true,
                    admin: {
                        width: '50%',
                    },
                },
                {
                    name: 'page',
                    label: 'Page to link to',
                    type: 'relationship',
                    relationTo: 'pages',
                    required: true,
                    admin: {
                        width: '50%',
                        condition: function (_, siblingData) { return (siblingData === null || siblingData === void 0 ? void 0 : siblingData.type) === 'page'; },
                    },
                },
                {
                    name: 'url',
                    label: 'Custom URL',
                    type: 'text',
                    required: true,
                    admin: {
                        width: '50%',
                        condition: function (_, siblingData) { return (siblingData === null || siblingData === void 0 ? void 0 : siblingData.type) === 'custom'; },
                    },
                },
            ],
        },
    ],
};
exports.default = link;
