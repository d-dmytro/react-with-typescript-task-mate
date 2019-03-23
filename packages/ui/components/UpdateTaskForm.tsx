import React from 'react';
import { Button } from './Button';
import { FormField } from './FormField';
import { formStyle } from '../styles/form';
import { UpdateTaskInput } from '../resources/gql-types';

export interface Props {
  initialInput: UpdateTaskInput;
}

export interface State {
  input: UpdateTaskInput;
}

export class UpdateTaskForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      input: props.initialInput
    };
  }

  render() {
    const { input } = this.state;
    return (
      <form>
        <FormField label="Title">
          <input
            type="text"
            name="title"
            className="textInput"
            value={input.title || undefined}
          />
        </FormField>
        <Button label="Save" />
        <style jsx>{formStyle}</style>
      </form>
    );
  }
}
