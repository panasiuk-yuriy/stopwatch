import  React, { useState, useEffect } from  "react";
import Display from '../Display/Display';
import counter from '../../store/stopwatch';
import { ControlButtons } from "../ControlButtons.jsx/ControlButtons";
import { Paper, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  box: {
    marginTop: '5rem',
    width: 'max-content',
    padding: 10,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export const StopWatch = () => {
  const classes = useStyles();
  const [counterState, setCounterState] = useState(counter.initialState);
  const [isPaused, setIsPaused] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [countClicks, setCountClicks] = useState(0)


  useEffect(()=> {
    counter.subscribe(setCounterState);
    counter.init();
  },[]);

  const handleStartTime = (ref) => { 
    if (isActive){
      return
    }
    setIsActive(true)
    setIsPaused(false)
    counter.startTime(ref)
  }

  const handleStopTime = (ref) => {
      counter.stopTime(ref)
      setIsPaused(true)
      setIsActive(false)
      counter.clearTime(ref)
  }

  const handleResetTime = (ref) => {
    setIsPaused(false)
    setIsActive(true)
    counter.clearTime(ref)
    counter.startTime(ref)
  }

  const handleDoubleClick = (ref) => {
    setCountClicks(countClicks + 1)
    if (countClicks >= 1 && countClicks <= 2) {
      counter.stopTime(ref)
      setIsPaused(true)
      setIsActive(false)
    }
    setTimeout(() => setCountClicks(0), 300)
  }

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Typography variant="h2">Stopwatch</Typography>
      <Paper className={classes.box} elevation={3}>
        <Display time = {counterState} />
        <ControlButtons 
          startTime={handleStartTime} 
          stopTime={handleStopTime} 
          resetTime={handleResetTime}
          doubleClickWait={handleDoubleClick} 
          isPaused={isPaused}
          isActive={isActive}
        />
      </Paper>
    </Container>
  );
}

export default StopWatch;