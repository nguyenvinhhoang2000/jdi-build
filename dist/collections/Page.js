"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page = void 0;
var Config_1 = require("../blocks/Home/Config");
var Config_2 = require("../blocks/Image/Config");
// import { Type as ImageType } from '../blocks/Image/Component';
var Config_3 = require("../blocks/CallToAction/Config");
// import { Type as CallToActionType } from '../blocks/CallToAction/Component';
var Config_4 = require("../blocks/Content/Config");
// import { Type as ContentType } from '../blocks/Content/Component';
var Config_5 = require("../blocks/AI/Config");
// import { Type as AIType } from '../blocks/AI/Component';
var Config_6 = require("../blocks/ServicesList/Config");
// import { Type as ServicesListType } from '../blocks/ServicesList/Component';
var Config_7 = require("../blocks/TitlePage/Config");
// import { Type as TitlePageType } from '../blocks/TitlePage/Component';
var Config_8 = require("../blocks/MemberCard/Config");
// import { Type as MemberCardType } from '../blocks/MemberCard/Component';
var Config_9 = require("../blocks/Price/Config");
// import { Type as PricingType } from '../blocks/Price/Component';
var Config_10 = require("../blocks/Mission/Config");
// import { Type as MissionType } from '../blocks/Mission/Component';
var Config_11 = require("../blocks/Vission/Config");
// import { Type as VissionType } from '../blocks/Vission/Component';
var Config_12 = require("../blocks/About/Config");
// import { Type as AboutType } from '../blocks/About/Component';
var Config_13 = require("../blocks/Location/Config");
// import { Type as LocationType } from '../blocks/Location/Component';
var slug_1 = __importDefault(require("../fields/slug"));
var meta_1 = __importDefault(require("../fields/meta"));
exports.Page = {
    slug: 'pages',
    access: {
        read: function () { return true; }, // Everyone can read Pages
    },
    admin: {
        useAsTitle: 'title',
    },
    fields: [
        {
            name: 'title',
            label: 'Page Title',
            type: 'text',
            required: true,
        },
        {
            name: 'layout',
            label: 'Page Layout',
            type: 'blocks',
            minRows: 1,
            blocks: [
                Config_3.CallToAction,
                Config_4.Content,
                Config_2.Image,
                Config_1.Home,
                Config_5.AI,
                Config_6.ServicesList,
                Config_7.TitlePage,
                Config_8.MemberCard,
                Config_9.Pricing,
                Config_10.Mission,
                Config_11.Vission,
                Config_12.About,
                Config_13.Location,
            ],
        },
        meta_1.default,
        slug_1.default,
    ],
};
exports.default = exports.Page;
