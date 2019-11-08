import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


function TabPanel(props) {
    console.log(props);
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}  // hiding the data to be shown under tab
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        <Box p={10}>{children}</Box> 
      </Typography>
    );
}   
  // Size of box defined 


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


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }));


/*


    Tabset component


*/
const Tabset = (props) => {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    }
    console.log(value);
    return(
        <div>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Soft skills" {...a11yProps(0)} />
                    <Tab label="Hard Skills" {...a11yProps(1)} />
                    <Tab label="Value Addition" {...a11yProps(2)} />
                    <Tab label="Up learning" {...a11yProps(3)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                Comment and Review 1
            </TabPanel>
            <TabPanel value={value} index={1}>
                Comment and Review 2
            </TabPanel>
            <TabPanel value={value} index={2}>
                Comment and Review 3
            </TabPanel>
            <TabPanel value={value} index={3}>
                Comment and Review 4
            </TabPanel>
        </div>
    )
};


export default Tabset;