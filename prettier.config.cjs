/** @type {import("prettier").Config} */
const config = {
    plugins: ["prettier-plugin-go-template"],
    overrides: [
        {
            files: ["*.html"],
            options: {
                parser: "go-template",
            },
        },
    ],
};

module.exports = config;
