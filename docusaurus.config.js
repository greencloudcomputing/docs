// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "GreenCloud Computing",
    tagline: "pioneering the green computing revolution",
    url: "https://docs.greencloud.dev",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "green cloud computing", // Usually your GitHub org/user name.
    projectName: "greencloud", // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
        localeConfigs: {
            en: {
                label: "English",
                direction: "ltr",
                htmlLang: "en-US",
                calendar: "gregory",
                path: "en",
            },
            // You can omit a locale (e.g. fr) if you don't need to override the defaults
        },
    },

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    routeBasePath: "/", // Serve the docs at the site's root
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    //editUrl:
                    //  "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                },
                blog: false,
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: "GreenCloud",
                logo: {
                    alt: "GreenCloud Computing",
                    src: "img/GC-Logo.svg",
                },
                items: [
                    {
                        type: "search",
                        position: "right",
                    },
                    {
                        type: "localeDropdown",
                        position: "right",
                    },
                ],
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "Docs",
                        items: [
                            {
                                label: "Tutorial",
                                to: "/category/-guide",
                            },
                            {
                                label: "Blog",
                                to: "https://blog.greencloudcomputing.io/",
                            },
                        ],
                    },
                    {
                        title: "Community",
                        items: [
                            {
                                label: "Stack Overflow",
                                href: "https://stackoverflow.com/questions/tagged/greencloud",
                            },
                            // {
                            //     label: "Discord",
                            //     href: "https://discordapp.com/invite/docusaurus",
                            // },
                            {
                                label: "Twitter",
                                href: "https://twitter.com/gccdotio",
                            },
                        ],
                    },
                    // {
                    //     title: "More",
                    //     items: [
                    //         {
                    //             label: "GitHub",
                    //             href: "https://github.com/facebook/docusaurus",
                    //         },
                    //     ],
                    // },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} GreenCloud`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
            algolia: {
                appId: "VMST0QGKDI",
                apiKey: "bf15f07c19567ee1d4d5aa08a66524cc",
                indexName: "index",
                contextualSearch: true,
                searchParameters: {},
            },
        }),
}

module.exports = config
