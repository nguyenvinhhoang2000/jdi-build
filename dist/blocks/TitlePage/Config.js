"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TitlePage = void 0;
var link_1 = __importDefault(require("../../fields/link"));
exports.TitlePage = {
    slug: 'title-page',
    labels: {
        singular: 'Title Page',
        plural: 'Title Page Blocks',
    },
    fields: [
        {
            label: 'Breadcrumb Child',
            type: 'array',
            name: 'breadcrumb',
            fields: [
                link_1.default,
            ],
        },
    ],
};
exports.default = exports.TitlePage;
