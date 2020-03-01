import React, {Component} from 'react';
import moduleName from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export class Doginfodetails extends Component{
    continue = e => {
        e.preventDefault();
        this.props.nextstep();
    }
    render (){
        const {values} = this.props;
        return (
            <MuiThemeProvider>
                
            </MuiThemeProvider>
        );
    }
}

export default Doginfodetails;