import React from 'react';
import Typography from '@material-ui/core/Typography';

const Display = ({ time }) => {
  const preparedTime = Object.keys(time).map(item => {
    if (time[item] <= 9) {
      return '0' + time[item]
    } else {
      return time[item]
    }
  }).reverse()
    .join(':')


  return (
    <Typography variant="h2">
      {preparedTime}
    </Typography>
  );
}

export default Display;