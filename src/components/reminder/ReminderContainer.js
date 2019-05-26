import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ReminderForm from "./ReminderForm";
import { addReminder } from '../../actions/calenderActions';

/*
 * mapDispatchToProps
 */
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      addReminder
    },
    dispatch
  )
});

export class ReminderContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state={
      open:false
    }
  }
  componentDidMount() {
    console.log("Mount");
  }

  handleSubmit = values => {
    this.props.actions.addReminder(values);
    this.clearForm();
  };

  clearForm = () => {
    this.setState({open:false});
  };

  onShow = () => {
    this.setState({ open: true });
  }
  render() {
    return (
      <ReminderForm
        onSubmit={this.handleSubmit}
        size={this.props.size}
        open={this.state.open}
        onClose={this.clearForm}
        onShow={this.onShow}
      />
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(ReminderContainer);
