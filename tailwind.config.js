// tailwind.config.js
module.exports = {
    prefix: '',
    important: false,
    separator: ':',
    theme: {
        fontFamily: {
            'sans': ['Poppins']
        },
        extend: {
            zIndex: {
                back: -1
            },
            spacing: {
                sm: '5px',
                md: '10px',
                lg: '20px',
                xl: '40px',
                '2xl': '80px',
            },
            transitionTimingFunction: {
                'expo': 'cubic-bezier(0.9, 0.01, 0.2, 1)',
                'out-min': 'cubic-bezier(0, 0, 0.7, 1)'
            }
        }
    },
    variants: {
        margin: ['last', 'responsive']
    },
    corePlugins: {
        container: false
    },
    plugins: [
        function ({ addComponents }) {
            addComponents({
                '.container': {
                    maxWidth: '100vw',
                    marginLeft: 'auto',
                    marginRight: 'auto',

                    '@screen sm': { maxWidth: '100vw' },
                    '@screen md': { maxWidth: '100vw' },
                    '@screen lg': { maxWidth: '980px' },
                    '@screen xl': { maxWidth: '980px' },
                }
            })
        }
    ]
}