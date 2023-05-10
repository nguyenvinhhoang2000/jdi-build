"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mission = void 0;
exports.Mission = {
    slug: 'mission',
    labels: {
        singular: 'Mission',
        plural: 'Mission Blocks',
    },
    fields: [
        {
            name: 'missions',
            type: 'array',
            label: 'Mission List',
            minRows: 1,
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    label: 'Title',
                    required: true,
                },
                {
                    name: 'desc',
                    type: 'text',
                    label: 'Desc',
                    required: true,
                },
            ],
        },
    ],
};
exports.default = exports.Mission;
