module.exports = {
    purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'regal-blue': '#243c5a',
            }

        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}