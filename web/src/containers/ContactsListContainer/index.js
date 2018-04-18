import {connect} from 'react-redux';
import ContactsList from '../../components/ContactsList';
import {openModal} from '../../store/modal';

const mapStateToProps = (state, ownProps) => {
    return {
        contacts: state.contact.contacts
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onViewDetails: (contact) => {
            dispatch(openModal(contact, 'Edit'));
        }
    }
};

const ContactListContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ContactsList);

export default ContactListContainer;