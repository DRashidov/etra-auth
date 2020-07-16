import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import LoginContainer from './LoginContainer';
import RegisterContainer from './RegisterContainer';

const AUTH_FLOW = {
  login: 'LOGIN',
  register: 'REGISTER',
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabsWrapper: {
    '& .MuiTabs-flexContainer': {
      justifyContent: 'space-evenly'
    }
  },  
  tab: {
    textTransform: 'none',
    fontSize: '1rem',
    textAlign: 'center',
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  // const classes = useStyles();

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        // <Box className={classes.tabPanel} p={3}>
        <Box>
          <Typography component={'span'} variant={'body2'}>
            {children}
          </Typography>
        </Box>
      )}
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabsContainer({ setAuthFlow }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    newValue ? setAuthFlow(AUTH_FLOW.register) : setAuthFlow(AUTH_FLOW.login);
  };

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='navigation tabs'
          className={classes.tabsWrapper}
          TabIndicatorProps={{ style: { height: '4px' } }}
        >
          <Tab label='Вход' {...a11yProps(0)} className={classes.tab} />
          <Tab
            label='Заявка на регистрацию'
            {...a11yProps(1)}
            className={classes.tab}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <LoginContainer />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <RegisterContainer />
      </TabPanel>
    </div>
  );
}
