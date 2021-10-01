import {
  Avatar,
  Box,
  ButtonBase,
  Card,
  CardContent,
  Grid,
  InputAdornment,
  OutlinedInput,
  Popper
} from '@mui/material';
import { IconAdjustmentsHorizontal, IconSearch, IconX } from '@tabler/icons';
import PopupState, { bindPopper, bindToggle } from 'material-ui-popup-state';
import React, { useState } from 'react';
import Transitions from '../../../../components/extended/Transition';
import useStyles from './styles';

const SearchSection = () => {
  const classes = useStyles();
  const [value, setValue] = useState();
  return (
    <>
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <PopupState variant="popper" popupId="demo-popup-popper">
          {(popupState) => (
            <>
              <Box
                sx={{
                  ml: 2
                }}
              >
                <ButtonBase sx={{ borderRadius: '12px' }}>
                  <Avatar
                    variant="rounded"
                    className={classes.headerAvatar}
                    {...bindToggle(popupState)}
                  >
                    <IconSearch stroke={1.5} size="1.2rem" />
                  </Avatar>
                </ButtonBase>
              </Box>
              <Popper
                {...bindPopper(popupState)}
                transition
                className={classes.popperContainer}
              >
                {({ TransitionProps }) => (
                  <Transitions
                    type="zoom"
                    {...TransitionProps}
                    sx={{ transformOrigin: 'center left' }}
                  >
                    <Card className={classes.card}>
                      <CardContent className={classes.cardContent}>
                        <Grid
                          container
                          alignItems="center"
                          justifyContent="space-between"
                        >
                          <Grid item xs>
                            <OutlinedInput
                              className={classes.searchControl}
                              id="input-search-header"
                              value={value}
                              onChange={(e) => setValue(e.target.value)}
                              placeholder="Search"
                              startAdornment={
                                <InputAdornment position="start">
                                  <IconSearch
                                    stroke={1.5}
                                    size="1rem"
                                    className={classes.startAdornment}
                                  />
                                </InputAdornment>
                              }
                              endAdornment={
                                <InputAdornment position="end">
                                  <ButtonBase sx={{ borderRadius: '12px' }}>
                                    <Avatar
                                      variant="rounded"
                                      className={classes.headerAvatar}
                                    >
                                      <IconAdjustmentsHorizontal
                                        stroke={1.5}
                                        size="1.3rem"
                                      />
                                    </Avatar>
                                  </ButtonBase>
                                  <Box
                                    sx={{
                                      ml: 2
                                    }}
                                  >
                                    <ButtonBase sx={{ borderRadius: '12px' }}>
                                      <Avatar
                                        variant="rounded"
                                        className={classes.closeAvatar}
                                        {...bindToggle(popupState)}
                                      >
                                        <IconX stroke={1.5} size="1.3rem" />
                                      </Avatar>
                                    </ButtonBase>
                                  </Box>
                                </InputAdornment>
                              }
                            />
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Transitions>
                )}
              </Popper>
            </>
          )}
        </PopupState>
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <OutlinedInput
          className={classes.searchControl}
          id="input-search-header"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search"
          startAdornment={
            <InputAdornment position="start">
              <IconSearch
                stroke={1.5}
                size="1rem"
                className={classes.startAdornment}
              />
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end">
              <ButtonBase sx={{ borderRadius: '12px' }}>
                <Avatar variant="rounded" className={classes.headerAvatar}>
                  <IconAdjustmentsHorizontal stroke={1.5} size="1.3rem" />
                </Avatar>
              </ButtonBase>
            </InputAdornment>
          }
        />
      </Box>
    </>
  );
};

export default SearchSection;
