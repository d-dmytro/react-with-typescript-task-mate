import css from 'styled-jsx/css';
import { colors } from './constants';

export const formStyle = css`
  .textInput {
    border: 1px solid ${colors.border};
    color: ${colors.text};
    outline: 0;
    font-size: 18px;
    padding: 14px;
  }
`;
