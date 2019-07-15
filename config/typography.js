import Typography from 'typography';

export const typography = new Typography({
  title: 'GatsbyTutorial',
  baseFontSize: '18px',
  baseLineHeight: 1.45,
  googleFonts: [
    {
      name: 'Poppins',
      styles: [
        // '100',
        // '200',
        // '300',
        // '400',
        // '500',
        // '600',
        // '700',
        '800',
        // '900',
      ]
    },
    {
      name: 'Roboto',
      styles: [
        // '100',
        // '100i',
        // '200',
        // '200i',
        // '300',
        // '300i',
        '400',
        '400i',
        '500',
        '500i',
        '600',
        '600i',
        '700',
        '700i',
        '800',
        '800i',
        '900',
        '900i',
      ],
    }
  ],
  headerFontFamily: [
    'Poppins',
    'Candal',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: [
    'Roboto',
    'Open Sans',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  headerWeight: 800,
});

export default typography;
