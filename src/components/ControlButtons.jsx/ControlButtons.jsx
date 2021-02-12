import React, { useRef } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  button: {
    width: 100,
  },
}));

export const ControlButtons = ({ stopTime, startTime, resetTime, doubleClickWait, isActive, isPaused }) => {
  const ref = useRef()
  const classes = useStyles();

  return (
    <ButtonGroup variant="contained" color="primary" size="large">
      {!isActive || isPaused 
        ? <Button onClick={() => startTime(ref)} className={classes.button}>Start </Button>
        : <Button onClick={() => stopTime(ref)} className={classes.button}>Stop</Button>
      }
      <Button onClick={() => resetTime(ref)}>Reset</Button>
      <Button onClick={() => doubleClickWait(ref)}>Wait</Button>
    </ButtonGroup>
  )
};

