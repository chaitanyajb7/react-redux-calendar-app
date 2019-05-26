import React from 'react'
import { Message, Form } from 'semantic-ui-react'

const TextInput = field => {
  const error = field.meta.touched && field.meta.error !== undefined;
  return (
    <div style={field.containerStyle}>
      <Form.Input
        icon={field.icon}
        iconPosition={field.iconPosition}
        error={error}
        label={field.label}
        id={field.id}
        placeholder={field.placeholder}
        type={field.type}
        {...field.input}
        disabled={field.disabled}
        step={field.step}
        maxLength={field.maxlength}
        min={field.min}
        style={field.style}
      />
      {error ? (
        <Message
        size="tiny"
      error
      content={field.meta.error}
    />
      ) : null}
    </div>
  );
};

export default TextInput;
