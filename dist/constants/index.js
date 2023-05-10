"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TITLE_TYPE = exports.BACKGROUND_TYPE = exports.SERVICES_CATEGORY_LIST = exports.SERVICES_CATEGORY_TYPE = exports.PROJECT_CATEGORY_LIST = exports.PROJECT_CATEGORY_TYPE = exports.SITE_NAME = exports.LOCATIONS = void 0;
exports.LOCATIONS = {
    ABOUT_US: '/about-us',
    CONTACT_US: '/contact-us',
    HOME: '/',
    PROJECTS: '/projects',
    SERVICES: '/services',
    TEAM: '/team',
    // socials
    FACEBOOK: 'https://www.facebook.com/',
    LINKED_IN: 'https://www.linkedin.com/',
    TELEGRAM: 'https://web.telegram.org/',
    TWITTER: 'https://twitter.com/',
};
exports.SITE_NAME = 'JDI One';
exports.PROJECT_CATEGORY_TYPE = {
    SOCIAL_FI: 'SOCIAL_FI',
    DEFI: 'DEFI',
    BLOCKCHAIN_FOR_REAL: 'BLOCKCHAIN_FOR_REAL',
    GAMEFI_METAFI: 'GAMEFI_METAFI',
    AI: 'AI',
    OTHERS: 'OTHERS',
};
exports.PROJECT_CATEGORY_LIST = [
    {
        value: exports.PROJECT_CATEGORY_TYPE.SOCIAL_FI,
        label: 'SocialFi',
    },
    {
        value: exports.PROJECT_CATEGORY_TYPE.DEFI,
        label: 'DEFI',
    },
    {
        value: exports.PROJECT_CATEGORY_TYPE.BLOCKCHAIN_FOR_REAL,
        label: 'Blockchain for Real',
    },
    {
        value: exports.PROJECT_CATEGORY_TYPE.GAMEFI_METAFI,
        label: 'GameFI - MetaFI',
    },
    {
        value: exports.PROJECT_CATEGORY_TYPE.AI,
        label: 'Ai',
    },
    {
        value: exports.PROJECT_CATEGORY_TYPE.OTHERS,
        label: 'OTHERS',
    },
];
exports.SERVICES_CATEGORY_TYPE = {
    WEB_3: 'WEB_3',
    VENTURE_BUILDING: 'VENTURE_BUILDING',
};
exports.SERVICES_CATEGORY_LIST = [
    {
        value: exports.SERVICES_CATEGORY_TYPE.WEB_3,
        label: 'Web 3',
    },
    {
        value: exports.SERVICES_CATEGORY_TYPE.VENTURE_BUILDING,
        label: 'Venture Building',
    },
];
exports.BACKGROUND_TYPE = {
    RHOMBUS: 'RHOMBUS',
    CRICLE: 'CRICLE',
};
exports.TITLE_TYPE = {
    NORMAL: 'NORMAL',
    GRADIENT: 'GRADIENT',
};
