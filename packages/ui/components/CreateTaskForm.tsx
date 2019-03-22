import React from 'react';
import { colors } from '../styles/constants';
import {
  CreateTaskInput,
  CreateTaskMutation,
  CreateTaskMutationVariables
} from '../resources/gql-types';
import { graphql, ChildMutateProps } from 'react-apollo';
import CREATE_TASK_MUTATION from '../graphql/create-task.graphql';

interface Props {
  onCreateTask: () => void;
}

type AllProps = ChildMutateProps<
  Props,
  CreateTaskMutation,
  CreateTaskMutationVariables
>;

interface State {
  input: CreateTaskInput;
}

export class CreateTaskForm extends React.Component<AllProps, State> {
  state = {
    input: {
      title: ''
    }
  };

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    this.setState({
      input: {
        title: value
      }
    });
  };

  onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { mutate, onCreateTask } = this.props;
    const { input } = this.state;
    const result = await mutate({
      variables: { input },
      update: () => {
        onCreateTask();
      }
    });
    if (result && result.data && result.data.createTask) {
      this.setState({
        input: { title: '' }
      });
    }
  };

  render() {
    const { input } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          onChange={this.onChange}
          value={input.title}
          autoComplete="off"
          placeholder="What would you like to get done?"
        />
        <style jsx>{`
          form {
            margin: 0 0 -1px;
          }
          input {
            border: 1px solid ${colors.border};
            color: ${colors.text};
            font-size: 18px;
            padding: 20px 15px;
            position: relative;
            width: 100%;
          }
          input:focus {
            border-color: ${colors.primary};
            box-shadow: 0 0 0 2px ${colors.shadow};
            outline: none;
            z-index: 10;
          }
        `}</style>
      </form>
    );
  }
}

export const WrappedCreateTaskForm = graphql<
  Props,
  CreateTaskMutation,
  CreateTaskMutationVariables,
  AllProps
>(CREATE_TASK_MUTATION)(CreateTaskForm);
