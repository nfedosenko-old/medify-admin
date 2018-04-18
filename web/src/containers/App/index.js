import React, {Component} from 'react';
import {connect} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HeaderContainer from '../../containers/HeaderContainer';
import ContactListContainer from '../ContactsListContainer';
import RootModalContainer from '../RootModalContainer';
import {getContacts} from '../../store/contacts';

class App extends Component {

    componentDidMount() {
        this.props.getContacts();
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <HeaderContainer/>
                    <ContactListContainer/>
                    <RootModalContainer />
                </div>
            </MuiThemeProvider>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getContacts: () => {
            dispatch(getContacts());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
