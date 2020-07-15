import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    background: '#EBEBF0',
    width: '100%',
    height: '100vh',
  },
});

export default function Layout({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} justify='center' alignItems='center'>
        <Grid item xs={6}>
          {children}
        </Grid>
      </Grid>
    </div>
  );
}
