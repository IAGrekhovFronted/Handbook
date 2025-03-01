const plugin = require('tailwindcss/plugin');

module.exports = {
    theme: {
        extend: {
            colors: {
                'custom-blue': '#243c5a',
            },
        },
    },
    plugins: [
        plugin(function ({ addComponents }) {
            addComponents({
                '.btn-primary': {
                    backgroundColor: '#243c5a',
                    color: '#ffffff',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.375rem',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    '&:hover': {
                        backgroundColor: '#1e3350',
                    },
                },
                '.ght': {
                    backgroundColor: 'red',
                    height: '100px',
                    width: '200px'
                }
            });
        }),
    ],
};
