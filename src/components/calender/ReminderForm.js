import React from 'react';
import _ from 'lodash';
import {
  Button,
  Modal,
  ModalHeader,
  Header,
  Form,
  Select
} from 'semantic-ui-react';
import DatePicker from 'react-datepicker';

const colors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black'
];

const colorOptions = _.map(colors, color => ({
  key: color,
  text: color,
  value: color
}));
export const ReminderForm = (value, submitReminder, handleInputChange) => (
  <Modal
    trigger={
      <Button basic color="blue" size="large">
        Set Remider
      </Button>
    }
  >
    <Modal.Content image>
      <Modal.Description>
        <Header>Add Reminder</Header>
        <Form>
          <form onSubmit={submitReminder}>
            <Form.Field>
              <label>Reminder</label>
              <input
                placeholder="Reminder"
                value={value.name}
                maxlength="30"
                onChange={handleInputChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Start day</label>
              <input
                placeholder="Select a start"
                value={value.start}
                onChange={handleInputChange}
              />
            </Form.Field>
            <Form.Field>
              <label>End day</label>
              <input
                placeholder="Select a end"
                value={value.end}
                onChange={handleInputChange}
              />
            </Form.Field>
            <Form.Field>
              <Select
                placeholder="Select a color"
                options={colorOptions}
                onChange={handleInputChange}
                selected={value.color}
              />
            </Form.Field>
            <Form.Field>
              <input type="submit" value="Submit" />
            </Form.Field>
          </form>
        </Form>
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default ReminderForm;
