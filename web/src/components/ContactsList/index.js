import React, {Fragment} from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn,} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';
import {Contact} from "../../utils/sharedPropTypes";

const ContactsList = (props) => (
    <Fragment>
        <Table selectable={false}>
            <TableHeader displaySelectAll={false}
                         adjustForCheckbox={false}>
                <TableRow>
                    <TableHeaderColumn>Team</TableHeaderColumn>
                    <TableHeaderColumn>Title</TableHeaderColumn>
                    <TableHeaderColumn>First Name</TableHeaderColumn>
                    <TableHeaderColumn>Last Name</TableHeaderColumn>
                    <TableHeaderColumn>Actions</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
                {props.contacts.map(contact => (
                    <TableRow key={contact.id}>
                        <TableRowColumn>{contact.team}</TableRowColumn>
                        <TableRowColumn>{contact.title || 'None'}</TableRowColumn>
                        <TableRowColumn>{contact.first_name}</TableRowColumn>
                        <TableRowColumn>{contact.last_name}</TableRowColumn>
                        <TableRowColumn>
                            <RaisedButton label="Edit Contact"
                                          primary={true}
                                          onClick={(e) => props.onViewDetails(contact)}/>
                        </TableRowColumn>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </Fragment>
);

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(Contact),
    onViewDetails: PropTypes.func
};

ContactsList.defaultProps = {
    contacts: []
};

export default ContactsList;