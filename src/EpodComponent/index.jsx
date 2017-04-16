import React, { Component } from "react";
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Popover from 'material-ui/Popover/Popover';
import Paper from 'material-ui/Paper';
import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
injectTapEventPlugin();
export default class EpodComponent extends Component {
  state = {
    open: false
  };
  handleTouchTap = (event) => {
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };
  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };
	render() {
    const styles = {
      leftBottomFixed: {
        float: "right",
        position: "fixed",
        right: "0",
        bottom: "1.5em",
        marginRight: "1.5em"
      },
      paperStyle: {
        width: "300px",
        padding: "0.5em"
      },
      item: {
        paddingBottom: "0.5em",
        fontSize: "1.5em"
      }
    };
    let epodInfo = this.props.info;
    let count = 0;
    let epodInfoRows = epodInfo.map((obj) => {
      count++;
      return (
        <div style={styles.item} key={count}>
          <a href={obj["url"]}>{obj["title"]}</a>
        </div>
      );
    })
		return (
      <MuiThemeProvider>
			<div style={styles.leftBottomFixed}>
        <RaisedButton
          onTouchTap={this.handleTouchTap}
          label="Elixir Puzzle of the Day"
          primary={true}
        />
        <Popover
            open={this.state.open}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{ "horizontal": "left", "vertical": "top" }}
            targetOrigin={{ "horizontal": "left", "vertical": "bottom" }}
            onRequestClose={this.handleRequestClose}
          >
          <Paper style={styles.paperStyle} zDepth={1} rounded={false}>
                {epodInfoRows}
          </Paper>
        </Popover>
			</div>
      </MuiThemeProvider>
		);
	};
}
