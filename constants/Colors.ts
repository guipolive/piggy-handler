const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

export const Colors = {
  gray: 'gray',
  black: 'black',
  white: 'white',
  red: 'red',
  blue: 'blue'
}

export default {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
};
