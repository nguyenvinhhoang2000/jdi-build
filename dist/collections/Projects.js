"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../constants");
var Project = {
    slug: 'projects',
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
            label: 'Desciption',
        },
        {
            type: 'select',
            name: 'category',
            label: 'Category',
            defaultValue: constants_1.PROJECT_CATEGORY_TYPE.SOCIAL_FI,
            options: [
                {
                    label: 'SOCIALFI',
                    value: constants_1.PROJECT_CATEGORY_TYPE.SOCIAL_FI,
                },
                {
                    label: 'DEFI',
                    value: constants_1.PROJECT_CATEGORY_TYPE.DEFI,
                },
                {
                    label: 'BLOCKCHAIN FOR REAL',
                    value: constants_1.PROJECT_CATEGORY_TYPE.BLOCKCHAIN_FOR_REAL,
                },
                {
                    label: 'GAMEFI - METAFI',
                    value: constants_1.PROJECT_CATEGORY_TYPE.GAMEFI_METAFI,
                },
                {
                    label: 'AI',
                    value: constants_1.PROJECT_CATEGORY_TYPE.AI,
                },
                {
                    label: 'OTHERS',
                    value: constants_1.PROJECT_CATEGORY_TYPE.OTHERS,
                },
            ],
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
exports.default = Project;
