import React, { useEffect } from 'react';
import rightJoyCon from './assets/right.png';
import leftJoyCon from './assets/left.png';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    background: '#f52215',
  },
  left: {
    width: '24vw',
    height: '30vh',
    objectFit: 'contain',
    marginRight: '-12vw',
    animation: `$leftSnap 100ms`,
    animationDelay: '1.15s',
    animationFillMode: 'forwards',
  },
  right: {
    width: '24vw',
    height: '30vh',
    objectFit: 'contain',
    marginLeft: '-12vw',
    animation: `$rightSnap 200ms`,
    animationDelay: '1s',
    animationFillMode: 'forwards',
    paddingBottom: '7em',
  },
  '@keyframes rightSnap': {
    '0%': {
      transform: 'translateY(0)',
    },
    '80%': {
      transform: 'translateY(7.5em)',
    },
    '100%': {
      transform: 'translateY(6.5em)',
    },
  },
  '@keyframes leftSnap': {
    '0%': {
      transform: 'translateY(.5em)',
    },
    '100%': {
      transform: 'translateY(-.5em)',
    },
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justify='center'
      style={{ minHeight: '100vh' }}
      className={classes.root}
    >
      <Grid item xs={12}>
        <img src={leftJoyCon} className={classes.left} alt='' />
        <img id='right' src={rightJoyCon} className={classes.right} alt='' />
      </Grid>
    </Grid>
  );
};

export default App;
