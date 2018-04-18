import {connect} from 'react-redux';
import RootModal from '../../components/RootModal';
import {createContact, updateContact} from '../../store/contacts';
import {closeModal} from '../../store/modal';

const mapStateToProps = (state, ownProps) => {
    return {
        opened: state.modal.opened,
        data: state.modal.data,
        type: state.modal.type
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSubmit: (contact, type) => {
            if (type === 'Edit') {
                dispatch(updateContact(contact));
            } else if (type === 'Create') {
                dispatch(createContact(contact));
            }
        },
        onClose: () => {
            dispatch(closeModal());
        }
    }
};

const RootModalContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(RootModal);

export default RootModalContainer;