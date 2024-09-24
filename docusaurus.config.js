// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'My Site',
    tagline: 'Dinosaurs are cool',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://cmponktonk23.github.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/pata-doc/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'patastudio', // Usually your GitHub org/user name.
    projectName: 'pata-doc', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    routeBasePath: '/docs/',
                    sidebarPath: './sidebars.js',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    // editUrl:
                    //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: false,
                // {
                //   showReadingTime: true,
                //   feedOptions: {
                //     type: ['rss', 'atom'],
                //     xslt: true,
                //   },
                //   // Please change this to your repo.
                //   // Remove this to remove the "edit this page" links.
                //   editUrl:
                //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                //   // Useful options to enforce blogging best practices
                //   onInlineTags: 'warn',
                //   onInlineAuthors: 'warn',
                //   onUntruncatedBlogPosts: 'warn',
                // },
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/docusaurus-social-card.jpg',
            tableOfContents: {
                minHeadingLevel: 2,
                maxHeadingLevel: 4,
            },
            navbar: {
                // title: 'PataStudio',
                logo: {
                    alt: 'PataStudio Logo',
                    src: 'img/logo_1_b.png',
                    srcDark: 'img/logo_1_w.png'
                },
                items: [
                    {
                        href: 'http://localhost:8080/',
                        label: 'Home',
                        position: 'left'
                    },
                    {
                        type: 'docSidebar',
                        sidebarId: 'tutorialSidebar',
                        position: 'left',
                        label: 'Documents',
                    },
                    // { to: '/blog', label: 'Blog', position: 'left' },
                    {
                        href: 'https://github.com/facebook/docusaurus',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            myfooter: {
                bglight: 'white',
                bgdark: '#211d35',
                headinglight: 'black',
                textlight: '#333',
                headingdark: 'white',
                textdark: '#9a91b1',
                src: 'img/logo_1_b.png',
                srcDark: 'img/logo_1_w.png'
            },
            // footer: {
            //     style: 'dark',
            //     logo: {
            //         alt: 'Meta Open Source Logo',
            //         src: 'img/logo_1_b.png',
            //         srcDark: 'img/logo_1_w.png',
            //         href: 'https://opensource.fb.com',
            //         width: 160,
            //         height: 51,
            //     },
            //     links: [
            //         {
            //             title: 'Docs',
            //             items: [
            //                 {
            //                     label: 'Tutorial',
            //                     to: '/docs/intro',
            //                 },
            //             ],
            //         },
            //         {
            //             title: 'Resources',
            //             items: [
            //                 {
            //                     label: 'Home',
            //                     href: 'http://localhost:8080/',
            //                 },
            //                 {
            //                     label: 'Assets',
            //                     href: 'http://localhost:8080/assets',
            //                 },
            //                 {
            //                     label: 'Blogs',
            //                     href: 'http://localhost:8080/blogs',
            //                 },
            //             ],
            //         },
            //         // {
            //         //     title: 'More',
            //         //     items: [
            //         //         {
            //         //             label: 'Blog',
            //         //             to: '/blog',
            //         //         },
            //         //         {
            //         //             label: 'GitHub',
            //         //             href: 'https://github.com/facebook/docusaurus',
            //         //         },
            //         //     ],
            //         // },
            //     ],
            //     // logo: {
            //     //     alt: 'PataStudio Logo',
            //     //     src: 'img/logo_1_b.png',
            //     //     srcDark: 'img/logo_1_w.png',
            //     //     wdith: 100,
            //     //     height: 51,
            //     // },
            //     copyright: `Copyright © ${new Date().getFullYear()} Pata Studio.`,
            // },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
        }),
};

export default config;
