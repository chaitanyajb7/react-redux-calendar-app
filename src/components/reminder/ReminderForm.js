import React from "react";
import { Field, reduxForm } from "redux-form";
import _ from 'lodash'
import { Modal, Button,Form } from "semantic-ui-react";
import TextInput from "../inputs/TextInput";

import validation from "./validation";

const ReminderForm = props => {
  return (
    <Modal
    size={props.size}
    open={props.open}
    onClose={props.onClose}
    trigger={
      <Button basic color="blue" size="large" onClick={props.onShow}>
        {"Add Reminder"}
      </Button>
    }
    >
        <Modal.Header>{"Add Reminder"}</Modal.Header>
        <Modal.Content>
        <Form error>
          <Field
            label={"Reminder"}
            component={TextInput}
            name="event"
            placeholder="Reminder name"
            type="text"
          />
          <Field
            label={"Start Day"}
            component={TextInput}
            name="start"
            placeholder="Start"
            type="text"
            containerStyle={{marginTop:'5%'}}
          />
          <Field
            label={"End Day"}
            component={TextInput}
            name="end"
            placeholder="End"
            type="text"
            containerStyle={{marginTop:'5%'}}
          />
          <Field name="color" component="select" containerStyle={{marginTop:'5%'}}>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="yellow">Yellow</option>
            <option value="olive">Olive</option>
            <option value="teal">Teal</option>
            <option value="blue">Blue</option>
            <option value="pink">Pink</option>
            <option value="purple">Purple</option>
            <option value="teal">Teal</option>
            <option value="blue">Blue</option>
            <option value="violet">Violet</option>
            <option value="orange">orange</option>
            <option value="brown">brown</option>
            <option value="grey">Grey</option>
            <option value="black">Black</option>
          </Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={props.onClose}>
            Cancel
          </Button>
          <Button
            positive
            icon="checkmark"
            labelPosition="right"
            content={"Add Reminder"}
            type="submit"
            onClick={props.handleSubmit}
          />
        </Modal.Actions>
      </Modal>
  );
};

export default reduxForm({
  form: "ReminderForm",
  validate: validation
})(ReminderForm);
