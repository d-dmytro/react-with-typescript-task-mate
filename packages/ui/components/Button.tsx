import React from 'react';
import { colors } from '../styles/constants';

export interface Props {
  label: string;
  type?: string;
}

export const Button: React.FunctionComponent<Props> = ({
  label,
  type = 'submit'
}) => {
  return (
    <button type={type}>
      {label}
      <style jsx>{`
        button {
          border: 2px solid ${colors.primary};
          color: ${colors.primary};
          cursor: pointer;
          display: inline-block;
          font-weight: bold;
          font-size: 16px;
          outline: 0;
          padding: 12px 24px;
        }
        button:hover {
          background: ${colors.primary};
          color: white;
        }
      `}</style>
    </button>
  );
};
