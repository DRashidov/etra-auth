import React from 'react';
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#E4333F',
    },
    primary: {
      main: '#0C63AD',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

const useStyles = makeStyles({
  root: {
    background: '#EBEBF0',
    width: '100%',
    height: '100vh',
  },
  grid: {
    height: '100%',
  },
});

export default function Layout({ children }) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Grid
          container
          justify='center'
          alignItems='center'
          className={classes.grid}
        >
          <Grid item xs={12}>
            {children}
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}
