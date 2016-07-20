import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { blueA400, blueA700 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import TextField from 'material-ui/TextField';
import { List, ListItem } from 'material-ui/List';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blueA400,
    primary2Color: blueA700
  }
})

const ContentArea = () => (
  <div>
    <AppBar title="Customer Explorer" showMenuIconButton={false}>
      <TextField floatingLabelText="Search for a Customer" />
    </AppBar>
  </div>
)

const Sidebar = () => (
  <Drawer docked={true} open={true}>
    <AppBar showMenuIconButton={false} />
    <h2>Some Content</h2>
    <List>
      <ListItem primaryText="Payment Plan" />
      <ListItem primaryText="Settlement" />
      <ListItem primaryText="Dispute" />
    </List>
  </Drawer>
)
const Main = () => (
  <div>
    <Sidebar />
    <ContentArea />
  </div>
);

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Main />
  </MuiThemeProvider>
);

injectTapEventPlugin();

ReactDOM.render(<App />,
                document.getElementById('app'));
