import logo from './logo.svg';
import './App.css';
import rightJoyCon from './assets/right.png';
import leftJoyCon from './assets/left.png';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    background: '#f52215',
  },
  left: {
    width: '450px',
    height: '600px',
    objectFit: 'contain',
    marginRight: '-225px',
  },
  right: {
    width: '450px',
    height: '600px',
    objectFit: 'contain',
    marginLeft: '-225px',
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
        <img src={leftJoyCon} className={classes.left} />
        <img src={rightJoyCon} className={classes.right} />
      </Grid>
    </Grid>
  );
};

export default App;
