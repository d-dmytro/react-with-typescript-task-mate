import React from 'react';
import { Button } from './Button';
import { FormField } from './FormField';
import { formStyle } from '../styles/form';

export interface Props {}

export interface State {}

export class UpdateTaskForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form>
        <FormField label="Title">
          <input type="text" name="title" className="textInput" />
        </FormField>
        <Button label="Save" />
        <style jsx>{formStyle}</style>
      </form>
    );
  }
}
