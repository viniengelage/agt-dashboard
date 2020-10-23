const globalTheme = {
  switchWidth: '40px',
  switchHeight: '20px',
  switchPadding: '3px',
  colorContrastLow: '#e6e6e6',
  colorWhite: '#FFF',
  switchColorPrimary: '#F39200',
  switchAnimationDuration: '0.2s',
  gradient: 'linear-gradient(180deg, #FF9E48 0%, #F39200 100%)',
  colorGreen: '#40b279',
  colorGray: '#adadad',
  darkOrange: '#E94E1B',
};

export const lightTheme = {
  primary: '#fff',
  secondary: '#e9e9e9',
  textColor: '#333',
  header: '#F39200',
  headerNumber: '#FFF',
  activeMenu: '#F39200',
  ...globalTheme,
};

export const darkTheme = {
  primary: '#292929',
  secondary: '#333',
  textColor: '#F8F8F8',
  header: '#F8F8F8',
  headerNumber: '#F39200',
  activeMenu: '#F39200',
  ...globalTheme,
};
