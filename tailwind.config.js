// tailwind.config.js
module.exports = {
    prefix: '',
    important: false,
    separator: ':',
    theme: {
        spacing: {
            sm: '5px',
            md: '10px',
            lg: '20px',
            xl: '40px',
        }
    },
    variants: {
        margin: ['last'],
        textAlign: ['responsive']
    },
    plugins: []
}