import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    margin: '0 auto',
    padding: '3rem 6rem',
    '@media (max-width:780px)': {
      padding: '2rem 1.5rem',
    },
  },
  indicator: {
    backgroundColor: '#edd224',
  },
}));

export default function CostTab() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position='static' color='default'>
        <Tabs
          value={value}
          onChange={handleChange}
          variant='fullWidth'
          aria-label='full width tabs example'
          classes={{ indicator: classes.indicator }}
          centered
        >
          <Tab label='Cost Includes' {...a11yProps(0)} />
          <Tab label='Cost Not Included' {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <ul>
            <li>
              All airport / hotel transfers
              <hr
                style={{
                  color: 'grey',
                  border: '1px ridge',
                  margin: ' 12px 0',
                }}
              ></hr>
            </li>
            <li>
              All airport / hotel transfers
              <hr
                style={{
                  color: 'grey',
                  border: '1px ridge',
                  margin: ' 12px 0',
                }}
              ></hr>
            </li>
            <li>
              All airport / hotel transfers
              <hr
                style={{
                  color: 'grey',
                  border: '1px ridge',
                  margin: ' 12px 0',
                }}
              ></hr>
            </li>
            <li>
              All airport / hotel transfers
              <hr
                style={{
                  color: 'grey',
                  border: '1px ridge',
                  margin: ' 12px 0',
                }}
              ></hr>
            </li>
            <li>
              An experienced English-speaking trek leader (trekking guide),
              assistant trek leader (4 trekkers: 1 assistant guide) and Sherpa
              porters to carry luggage (2 trekkers:1 porter) including their
              salary, insurance, equipment, flight, food and lodging Down
              jacket, four seasonal sleeping bag, Trekking duffel bag, t-shirt,
              and trekking map (down jacket and sleeping bag are to be returned
              after trip completion)
              <hr
                style={{
                  color: 'grey',
                  border: '1px ridge',
                  margin: ' 12px 0',
                }}
              ></hr>
            </li>
            <li>
              All airport / hotel transfers
              <hr
                style={{
                  color: 'grey',
                  border: '1px ridge',
                  margin: ' 12px 0',
                }}
              ></hr>
            </li>
            <li>
              All airport / hotel transfers
              <hr
                style={{
                  color: 'grey',
                  border: '1px ridge',
                  margin: ' 12px 0',
                }}
              ></hr>
            </li>
            <li>
              All airport / hotel transfers
              <hr
                style={{
                  color: 'grey',
                  border: '1px ridge',
                  margin: ' 12px 0',
                }}
              ></hr>
            </li>
          </ul>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <ul>
            <li>
              All airport / hotel transfers
              <hr
                style={{
                  color: 'grey',
                  border: '1px ridge',
                  margin: ' 12px 0',
                }}
              ></hr>
            </li>
            <li>
              All airport / hotel transfers
              <hr
                style={{
                  color: 'grey',
                  border: '1px ridge',
                  margin: ' 12px 0',
                }}
              ></hr>
            </li>
            <li>
              All airport / hotel transfers
              <hr
                style={{
                  color: 'grey',
                  border: '1px ridge',
                  margin: ' 12px 0',
                }}
              ></hr>
            </li>
            <li>
              All airport / hotel transfers
              <hr
                style={{
                  color: 'grey',
                  border: '1px ridge',
                  margin: ' 12px 0',
                }}
              ></hr>
            </li>
            <li>
              An experienced English-speaking trek leader (trekking guide),
              assistant trek leader (4 trekkers: 1 assistant guide) and Sherpa
              porters to carry luggage (2 trekkers:1 porter) including their
              salary, insurance, equipment, flight, food and lodging Down
              jacket, four seasonal sleeping bag, Trekking duffel bag, t-shirt,
              and trekking map (down jacket and sleeping bag are to be returned
              after trip completion)
              <hr
                style={{
                  color: 'grey',
                  border: '1px ridge',
                  margin: ' 12px 0',
                }}
              ></hr>
            </li>
            <li>
              All airport / hotel transfers
              <hr
                style={{
                  color: 'grey',
                  border: '1px ridge',
                  margin: ' 12px 0',
                }}
              ></hr>
            </li>
            <li>
              All airport / hotel transfers
              <hr
                style={{
                  color: 'grey',
                  border: '1px ridge',
                  margin: ' 12px 0',
                }}
              ></hr>
            </li>
            <li>
              All airport / hotel transfers
              <hr
                style={{
                  color: 'grey',
                  border: '1px ridge',
                  margin: ' 12px 0',
                }}
              ></hr>
            </li>
          </ul>
        </TabPanel>
        {/* <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel> */}
      </SwipeableViews>
    </div>
  );
}
