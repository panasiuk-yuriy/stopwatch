import React from 'react';
import Typography from '@material-ui/core/Typography';

const Display = ({ time: {hours,minutes, seconds }}) => {
 

  return (
      <Typography variant="h2">
        {hours <= 9 ? 0 : null}{hours}:
        {minutes <= 9 ? 0 : null}{minutes}:
        {seconds <= 9 ? 0 : null}{seconds}
      </Typography>
  );
}

export default Display;