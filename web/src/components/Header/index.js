import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import PropTypes from 'prop-types';

const HeaderMenu = (props) => (
    <IconMenu
        iconButtonElement={
            <IconButton>
                <MenuIcon/>
            </IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
        <MenuItem primaryText="Create Contact" onClick={() => props.onAddContact()}/>
    </IconMenu>
);

HeaderMenu.propTypes = {
    onAddContact: PropTypes.func.isRequired
};

const Header = (props) => {
    return (
        <AppBar
            title="Medify Admin Panel"
            showMenuIconButton={false}
            iconElementRight={<HeaderMenu onAddContact={props.onAddContact}/>}
        />
    );
};

Header.propTypes = {
    onAddContact: PropTypes.func.isRequired
};

export default Header;