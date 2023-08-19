import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#1976D2',
      light: '#b4c5e4',
      dark: '#0f172a',
    },
    secondary: {
      main: '#1976D2'
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#FFFFFF',
    },
  },
});
export default theme;