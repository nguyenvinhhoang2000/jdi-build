"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vission = void 0;
exports.Vission = {
    slug: 'vission',
    labels: {
        singular: 'Vission',
        plural: 'Vission Blocks',
    },
    fields: [
        {
            name: 'vission',
            type: 'array',
            label: 'Vission List',
            minRows: 2,
            maxRows: 2,
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    label: 'Title',
                    required: true,
                },
                {
                    name: 'desc',
                    type: 'textarea',
                    label: 'Desc',
                    required: true,
                },
            ],
        },
    ],
};
exports.default = exports.Vission;
