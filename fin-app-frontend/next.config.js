const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ['en'],
        defaultLocale: 'en'
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
}

module.exports = nextConfig
