"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterProject = void 0;
exports.FilterProject = {
    slug: 'filter-project',
    labels: {
        singular: 'Project',
        plural: 'Project Blocks',
    },
    fields: [
        {
            name: 'projects',
            type: 'relationship',
            relationTo: 'projects',
            hasMany: true,
            required: true,
        },
    ],
};
exports.default = exports.FilterProject;
