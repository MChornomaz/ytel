import * as nodePath from 'path';

const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
    build: {
        js: `${buildFolder}/assets/js/`,
        css: `${buildFolder}/assets/css/`,
        html: `${buildFolder}/`,
        images: `${buildFolder}/assets/img/`,
        fonts: `${buildFolder}/assets/fonts/`,
        files: `${buildFolder}/assets/files/`
    },
    src: {
        js: `${srcFolder}/assets/js/app.js`,
        images: `${srcFolder}/assets/img/**/*.{jpg,jpeg,png,gif,webp}`,
        fonts: `${srcFolder}/assets/fonts/`,
        svg: `${srcFolder}/assets/img/**/*.svg`,
        scss: `${srcFolder}/assets/scss/style.scss`,
        html: `${srcFolder}/*.html`,
        files: `${srcFolder}/assets/files/**/*.*`,
        svgicons: `${srcFolder}/assets/svgicons/*.svg`,
    },
    watch: {
        js: `${srcFolder}/assets/js/**/*.js`,
        scss: `${srcFolder}/assets/scss/**/*.scss`,
        html: `${srcFolder}/**/*.html`,
        images: `${srcFolder}/assets/img/**/*.{jpg,jpeg,png,gif,svg,ico,webp}`,
        files: `${srcFolder}/assets/files/**/*.*`
    },
    clean: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``  
}