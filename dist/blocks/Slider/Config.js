"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slider = void 0;
exports.Slider = {
    slug: 'slider',
    labels: {
        singular: 'Slider',
        plural: 'Slider Blocks',
    },
    fields: [
        {
            name: 'services',
            type: 'relationship',
            relationTo: 'services',
            hasMany: true,
            required: true,
        },
    ],
};
exports.default = exports.Slider;
