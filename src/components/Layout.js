import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

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
  );
}
