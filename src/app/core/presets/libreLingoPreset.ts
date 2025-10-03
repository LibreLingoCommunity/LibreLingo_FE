import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

const primaryColor = 'blue';
const lightColorText = 'slate';
const darkColorText = 'zinc';
const LibreLingoPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{' + primaryColor + '}.50}',
      100: '{' + primaryColor + '.100}',
      200: '{' + primaryColor + '.200}',
      300: '{' + primaryColor + '.300}',
      400: '{' + primaryColor + '.400}',
      500: '{' + primaryColor + '.500}',
      600: '{' + primaryColor + '.600}',
      700: '{' + primaryColor + '.700}',
      800: '{' + primaryColor + '.800}',
      900: '{' + primaryColor + '.900}',
      950: '{' + primaryColor + '.950}',
    },
    colorScheme: {
      light: {
        surface: {
          0: '#ffffff',
          50: '{' + lightColorText + '}.50}',
          100: '{' + lightColorText + '.100}',
          200: '{' + lightColorText + '.200}',
          300: '{' + lightColorText + '.300}',
          400: '{' + lightColorText + '.400}',
          500: '{' + lightColorText + '.500}',
          600: '{' + lightColorText + '.600}',
          700: '{' + lightColorText + '.700}',
          800: '{' + lightColorText + '.800}',
          900: '{' + lightColorText + '.900}',
          950: '{' + lightColorText + '.950}',
        },
      },
      dark: {
        surface: {
          0: '#ffffff',
          50: '{' + darkColorText + '}.50}',
          100: '{' + darkColorText + '.100}',
          200: '{' + darkColorText + '.200}',
          300: '{' + darkColorText + '.300}',
          400: '{' + darkColorText + '.400}',
          500: '{' + darkColorText + '.500}',
          600: '{' + darkColorText + '.600}',
          700: '{' + darkColorText + '.700}',
          800: '{' + darkColorText + '.800}',
          900: '{' + darkColorText + '.900}',
          950: '{' + darkColorText + '.950}',
        },
      },
    },
  },
});

export default LibreLingoPreset;
