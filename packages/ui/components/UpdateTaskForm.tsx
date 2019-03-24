import React from 'react';
import { Button } from './Button';
import { FormField } from './FormField';
import { formStyle } from '../styles/form';
import {
  UpdateTaskInput,
  UpdateTaskMutation,
  UpdateTaskMutationVariables
} from '../resources/gql-types';
import { graphql, MutationFunc } from 'react-apollo';
import UPDATE_TASK_MUTATION from '../graphql/update-task.graphql';
import Router from 'next/router';

export interface Props {
  initialInput: UpdateTaskInput;
}

export interface UpdateTaskMutationProps {
  updateTask?: MutationFunc<UpdateTaskMutation, UpdateTaskMutationVariables>;
}

export interface AllProps extends Props, UpdateTaskMutationProps {}

export interface State {
  input: UpdateTaskInput;
}

export class UpdateTaskForm extends React.Component<AllProps, State> {
  constructor(props: AllProps) {
    super(props);
    this.state = {
      input: props.initialInput
    };
  }

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({
      input: {
        ...this.state.input,
        [name]: value
      }
    });
  };

  onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { updateTask } = this.props;
    const { input } = this.state;
    if (updateTask) {
      const result = await updateTask({
        variables: { input }
      });
      if (result && result.data && result.data.updateTask) {
        Router.push('/');
      }
    }
  };

  render() {
    const { input } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <FormField label="Title">
          <input
            type="text"
            name="title"
            className="textInput"
            onChange={this.onChange}
            value={input.title || undefined}
          />
        </FormField>
        <Button label="Save" />
        <style jsx>{formStyle}</style>
      </form>
    );
  }
}

export const WrappedUpdateTaskForm = graphql<
  Props,
  UpdateTaskMutation,
  UpdateTaskMutationVariables,
  UpdateTaskMutationProps
>(UPDATE_TASK_MUTATION, {
  props: ({ mutate }) => ({ updateTask: mutate })
})(UpdateTaskForm);
