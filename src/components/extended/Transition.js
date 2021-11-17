import React, { forwardRef, Fragment } from 'react';
import { Box, Collapse, Fade, Grow, Slide, Zoom } from '@mui/material';

const Transitions = forwardRef(
  (
    {
      children,
      position = 'top left',
      type = 'grow',
      direction = 'up',
      ...others
    },
    ref
  ) => {
    let positionSX = {
      transformOrigin: '0 0 0'
    };

    if (position) {
      positionSX = {
        transformOrigin: position
      };
    }

    return (
      <Fragment ref={ref}>
        {type === 'grow' && (
          <Grow {...others}>
            <Box sx={positionSX}>{children}</Box>
          </Grow>
        )}
        {type === 'collapse' && (
          <Collapse {...others}>
            <Box sx={positionSX}>{children}</Box>
          </Collapse>
        )}
        {type === 'fade' && (
          <Fade {...others} timeout={{ appear: 500, enter: 600, exit: 400 }}>
            <Box sx={positionSX}>{children}</Box>
          </Fade>
        )}
        {type === 'slide' && (
          <Slide
            {...others}
            timeout={{ appear: 0, enter: 400, exit: 200 }}
            direction={direction}
          >
            <Box sx={positionSX}>{children}</Box>
          </Slide>
        )}
        {type === 'zoom' && (
          <Zoom {...others}>
            <Box sx={positionSX}>{children}</Box>
          </Zoom>
        )}
      </Fragment>
    );
  }
);

export default Transitions;
