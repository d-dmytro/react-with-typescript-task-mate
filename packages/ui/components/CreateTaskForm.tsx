import React from 'react';
import { colors } from '../styles/constants';

export class CreateTaskForm extends React.Component {
  state = {
    input: {
      title: ''
    }
  };

  onChange = () => {};

  render() {
    const { input } = this.state;

    return (
      <form>
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
