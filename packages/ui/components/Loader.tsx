import React from 'react';
import { colors } from '../styles/constants';

export const Loader = () => {
  return (
    <div className="loader">
      <div className="spinner">Loading</div>
      <style jsx>{`
        .spinner,
        .spinner:after {
          border-radius: 50%;
          width: 50px;
          height: 50px;
        }
        .spinner {
          font-size: 4px;
          position: relative;
          text-indent: -9999em;
          border-top: 1.1em solid ${colors.border};
          border-right: 1.1em solid ${colors.border};
          border-bottom: 1.1em solid ${colors.border};
          border-left: 1.1em solid ${colors.primary};
          transform: translateZ(0);
          animation: spin 1.1s infinite linear;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .loader {
          align-items: center;
          display: flex;
          justify-content: center;
          height: 80px;
        }
      `}</style>
    </div>
  );
};
