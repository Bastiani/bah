const theme = {
  bahColors: {
    white1: '#ffffff',
    white2: '#efefef',
    black1: '#000000',
    bluebrand: '#0060aa',

    red1: '#f44336',
    red50: '#ffebee',
    red100: '#ffcdd2',
    red200: '#ef9a9a',
    red300: '#e57373',
    red400: '#ef5350',
    red500: '#f44336',
    red600: '#e53935',
    red700: '#d32f2f',
    red800: '#c62828',
    red900: '#b71c1c',

    blue1: '#2196f3',
    blue50: '#e3f2fd',
    blue100: '#bbdefb',
    blue200: '#90caf9',
    blue300: '#64b5f6',
    blue400: '#42a5f5',
    blue500: '#2196f3',
    blue600: '#1e88e5',
    blue700: '#1976d2',
    blue800: '#1565c0',
    blue900: '#0d47a1',

    green1: '#4caf50',
    green50: '#e8f5e9',
    green100: '#c8e6c9',
    green200: '#a5d6a7',
    green300: '#81c784',
    green400: '#66bb6a',
    green500: '#4caf50',
    green600: '#43a047',
    green700: '#388e3c',
    green800: '#2e7d32',
    green900: '#1b5e20',

    yellow1: '#ffeb3b',
    yellow50: '#fffde7',
    yellow100: '#fff9c4',
    yellow200: '#fff59d',
    yellow300: '#fff176',
    yellow400: '#ffee58',
    yellow500: '#ffeb3b',
    yellow600: '#fdd835',
    yellow700: '#fbc02d',
    yellow800: '#f9a825',
    yellow900: '#f57f17',

    orange1: '#ff9800',
    orange50: '#fff3e0',
    orange100: '#ffe0b2',
    orange200: '#ffcc80',
    orange300: '#ffb74d',
    orange400: '#ffa726',
    orange500: '#ff9800',
    orange600: '#fb8c00',
    orange700: '#f57c00',
    orange800: '#ef6c00',
    orange900: '#e65100',

    gray1: '#9e9e9e',
    gray50: '#fafafa',
    gray100: '#f5f5f5',
    gray200: '#eeeeee',
    gray300: '#d9d9d9',
    gray400: '#bdbdbd',
    gray500: '#9e9e9e',
    gray600: '#757575',
    gray700: '#616161',
    gray800: '#424242',
    gray900: '#212121',

    bluegray1: '#607d8b',
    bluegray50: '#eceff1',
    bluegray100: '#cfd8dc',
    bluegray200: '#b0bec5',
    bluegray300: '#90a4ae',
    bluegray400: '#78909c',
    bluegray500: '#607d8b',
    bluegray600: '#546e7a',
    bluegray700: '#455a64',
    bluegray800: '#37474f',
    bluegray900: '#263238',

    steel1: '#C0CCDA',
    steel50: '#F9FAFC',
    steel100: '#EFF2F7',
    steel200: '#E5E9F2',
    steel300: '#E0E6ED',
    steel400: '#D3DCE6',
    steel500: '#C0CCDA',
    steel600: '#8492A6',
    steel700: '#3C4858',
    steel800: '#273444',
    steel900: '#1F2D3D',

    customBlue1: '#3c8dbc',
    customBlue2: '#367fa9',
    customBlue3: '#1e282c',
    customBlue4: '#222d32',
    customBlue5: '#2c3b41',
  },
  get bahDefaultTextColor() {
    return this.bahColors.bluegray700;
  },
  get bahDefaultBackgroundColor() {
    return this.bahColors.gray100;
  },
  /* Form Styles */
  get bahFormInputBorderColor() {
    return this.bahColors.steel600;
  },
  get bahFormInputBackgroundColor() {
    return this.bahColors.white1;
  },
  get bahFormInputBoxShadowColor() {
    return this.bahColors.steel400;
  },
  get bahFormInputDisabledColor() {
    return this.bahColors.steel200;
  },
  get bahFormInputFocusShadowColor() {
    return this.bahColors.bluegray400;
  },
  get bahFormInputFocusBorderColor() {
    return this.bahColors.bluegray600;
  },
  bahFormInputDefaultHeight: '24px',
  bahFormInputDefaultPadding: '4px 8px',
  bahFormFieldsDefaultBorder: '4px',
  /* Table Styles */
  get bahTableRowColor() {
    return this.bahColors.steel200;
  },
  get bahTableHeaderColor() {
    return this.bahColors.steel400;
  },
  get bahTableHeaderBorderColor() {
    return this.bahColors.steel600;
  },
  /* Paginate Styles */
  get bahPaginateBackgroundColor() {
    return this.bahColors.blue700;
  },
  /* Layout Styles */
  get bahLayoutHeaderBackgroundColor() {
    return this.bahColors.customBlue1;
  },
  get bahLayoutFooterBackgroundColor() {
    return this.bahColors.gray100;
  },
  get bahLayoutNavBackgroundColor() {
    return this.bahColors.customBlue4;
  },
  get bahLayoutNavBoderRightColor() {
    return this.bahColors.customBlue3;
  },
  get bahLayoutArticleBackgroundColor() {
    return this.bahColors.gray100;
  },
  get bahLayoutAsideBackgroundColor() {
    return this.bahColors.gray100;
  },
  /* Sidebar */
  get bahSidebarItemLabelBgColor() {
    return this.bahColors.customBlue3;
  },
  get bahSidebarItemLabelHoverBgColor() {
    return this.bahColors.customBlue4;
  },
  get bahSidebarItemUlBgColor() {
    return this.bahColors.customBlue5;
  },
  get bahSidebarItemLabelFonteSize() {
    return '20px';
  },
  get bahSidebarFonteSize() {
    return '18px';
  },
  get bahSidebarBgColor() {
    return this.bahColors.customBlue4;
  },
  get bahSidebarItemUlHoverBgColor() {
    return this.bahColors.customBlue4;
  },
  get bahSidebarItemLabelBorderColor() {
    return this.bahColors.customBlue5;
  },
  get bahSidebarItemUlBorderColor() {
    return this.bahColors.customBlue5;
  },
  get bahSidebarItemUlTextColor() {
    return this.bahColors.white2;
  },
  get bahSidebarItemLabelTextColor() {
    return this.bahColors.white2;
  },
  get bahSidebarItemUlBorderSize() {
    return '0px';
  },
  get bahSidebarItemLabelBorderSize() {
    return '0px';
  },

  bahNavDefaultFlexBasis: '16%',

  bahFontFamily:
    '"Roboto", Apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen-Sans, Ubuntu, Cantarell, sans-serif',
};

export default theme;
