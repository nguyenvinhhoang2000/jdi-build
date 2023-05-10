"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberCard = void 0;
var constants_1 = require("../../constants");
exports.MemberCard = {
    slug: 'member-card',
    labels: {
        singular: 'Member Card',
        plural: 'Member Card Blocks',
    },
    fields: [
        {
            name: 'type',
            type: 'radio',
            label: 'Title',
            defaultValue: constants_1.TITLE_TYPE.NORMAL,
            options: [
                {
                    value: constants_1.TITLE_TYPE.NORMAL,
                    label: 'Normal',
                },
                {
                    value: constants_1.TITLE_TYPE.GRADIENT,
                    label: 'Gradient',
                },
            ],
        },
        {
            name: 'link',
            type: 'array',
            label: 'Link',
            minRows: 1,
            maxRows: 1,
            fields: [
                {
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
                },
            ],
            admin: {
                width: '50%',
                condition: function (_, siblingData) { return (siblingData === null || siblingData === void 0 ? void 0 : siblingData.type) === constants_1.TITLE_TYPE.GRADIENT; },
            },
        },
        {
            name: 'alignment',
            type: 'radio',
            label: 'Alignment',
            defaultValue: 'LEFT',
            options: [
                {
                    value: 'LEFT',
                    label: 'Left',
                },
                {
                    value: 'CENTER',
                    label: 'Center',
                },
            ],
        },
        {
            name: 'background',
            type: 'radio',
            label: 'Background Cricle',
            defaultValue: 'LG',
            options: [
                {
                    value: 'LG',
                    label: 'Large',
                },
                {
                    value: 'SM',
                    label: 'Small',
                },
            ],
        },
        {
            name: 'member',
            type: 'array',
            required: true,
            minRows: 1,
            fields: [
                {
                    name: 'name',
                    label: 'Name',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'title',
                    label: 'Title',
                    type: 'text',
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
        },
    ],
};
exports.default = exports.MemberCard;
