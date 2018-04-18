import {connect} from 'react-redux';
import Header from '../../components/Header';
import {openModal} from '../../store/modal';

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAddContact: () => {
            dispatch(openModal({}, 'Create'));
        }
    }
};

const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Header);

export default HeaderContainer;