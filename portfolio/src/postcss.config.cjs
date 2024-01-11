module.exports = {
  plugins: {
    'postcss-preset-mantine': {},
    'postcss-simple-vars': {
      variables: {
        'mantine-breakpoint-xs': '36em',
        'mantine-breakpoint-sm': '48em',
        'mantine-breakpoint-md': '62em',
        'mantine-breakpoint-lg': '75em',
        'mantine-breakpoint-xl': '88em',
        'mantine-primary-color': '#3498db', // New variable for primary color
        'mantine-secondary-color': '#2ecc71', // New variable for secondary color
        'mantine-color-body':'green'
      },
    },
  },
};
