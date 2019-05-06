import React from 'react';
import { colors } from '../styles/constants';

export const NotificationButtons: React.FunctionComponent = ({ children }) => {
  return (
    <div>
      <p>{children}</p>
      <style jsx>{`
        p {
          display: flex;
          justify-content: flex-end;
        }
        p > :global(a) {
          margin-left: 20px;
        }
      `}</style>
    </div>
  );
};

export const Notification: React.FunctionComponent = ({ children }) => {
  return (
    <div>
      {children}
      <style jsx>{`
        div {
          background: ${colors.liteBg};
          border: 1px solid ${colors.border};
          margin: 0 0 30px;
          padding: 30px 30px 10px;
        }
      `}</style>
    </div>
  );
};
