import { colors } from '../styles/constants';
import { FunctionComponent } from 'react';

export const Layout: FunctionComponent = ({ children }) => {
  return (
    <div className="pageContainer">
      {children}
      <style jsx global>
        {`
          html {
            box-sizing: border-box;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
          body {
            color: ${colors.text};
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            font-size: 18px;
            margin: 0;
          }
          a {
            text-decoration: none;
          }
          ul {
            padding: 0;
          }
        `}
      </style>
      <style jsx>
        {`
          .pageContainer {
            margin: 0 auto;
            max-width: 600px;
            padding: 0 15px;
          }
        `}
      </style>
    </div>
  );
};
