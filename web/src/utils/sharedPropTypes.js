import PropTypes from 'prop-types';

export const Contact = PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    title: PropTypes.string,
    color: PropTypes.string,
    image: PropTypes.string,
    location: PropTypes.string,
    team: PropTypes.string,
    id: PropTypes.string
});

export const DialogType = PropTypes.oneOf(['Edit', 'Create']);