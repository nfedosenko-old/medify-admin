import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import PropTypes from 'prop-types';
import Input from 'muicss/lib/react/input';
import {SliderPicker} from 'react-color';

class RootModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            team: '',
            location: '',
            title: '',
            image: ''
        };
    }

    componentWillReceiveProps(newProps) {
        this.setState((prevState, props) => {
            return {
                first_name: props.data.first_name || '',
                last_name: props.data.last_name || '',
                team: props.data.team || '',
                location: props.data.location || '',
                title: props.data.title || '',
                color: props.data.color || '',
                id: props.data.id || '',
                image: props.data.image || ''
            };
        });
    }

    handleChange = (name, value) => {
        this.setState((prevState, props) => {
            return {
                [name]: value
            }
        });
    };

    onColorChangeComplete = (color) => {
        this.setState((prevState) => {
            return {
                color: color.hex.slice(1)
            }
        });
    };

    render() {
        const actions = [
            <FlatButton
                label="Close"
                primary={true}
                onClick={this.props.onClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                onClick={() => this.props.onSubmit(this.state, this.props.type)}
            />,
        ];

        const {first_name, last_name, title, team, location, image, color} = this.state;

        return (
            <Dialog
                title={`${this.props.type} Contact`}
                actions={actions}
                autoScrollBodyContent={true}
                modal={true}
                open={this.props.opened}>
                {image ? <img src={image} alt="Contact Avatar"/> : null}
                <Input label="First Name"
                       onChange={(e) => this.handleChange('first_name', e.target.value)}
                       value={first_name}/>
                <Input label="Last Name"
                       onChange={(e) => this.handleChange('last_name', e.target.value)}
                       value={last_name}/>
                <Input label="Title"
                       onChange={(e) => this.handleChange('title', e.target.value)}
                       value={title}/>
                <Input label="Location"
                       onChange={(e) => this.handleChange('location', e.target.value)}
                       value={location}/>
                <Input label="Team"
                       onChange={(e) => this.handleChange('team', e.target.value)}
                       value={team}/>
                <SliderPicker color={color}
                              onChangeComplete={this.onColorChangeComplete}/>
            </Dialog>
        );
    }
}

RootModal.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    opened: PropTypes.bool,
    data: PropTypes.object,
    type: PropTypes.string
};

RootModal.defaultProps = {
    opened: false,
    data: {
        first_name: '',
        last_name: '',
        title: '',
        color: '',
        image: null,
        location: '',
        team: ''
    }
};

export default RootModal;