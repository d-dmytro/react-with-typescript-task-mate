import React from 'react';
import Link from 'next/link';
import { colors } from '../styles/constants';

export interface Props {
  id: number;
  title: string;
}

export const Task = React.memo<Props>(({ id, title }) => {
  return (
    <li>
      <div className="title">
        <Link href={{ pathname: '/edit', query: { id } }}>
          <a>{title}</a>
        </Link>
      </div>
      <button>&times;</button>
      <style jsx>{`
        li {
          align-items: center;
          border: 1px solid ${colors.border};
          display: flex;
          padding: 14px;
        }
        li + li {
          margin-top: -1px;
        }
        li:nth-child(odd) {
          background: ${colors.liteBg};
        }
        .title {
          margin: 0 20px;
        }
        .title a {
          color: ${colors.text};
          display: block;
        }
        .title a:hover {
          color: ${colors.primary};
        }
        button {
          background: ${colors.shadow};
          border: none;
          border-radius: 50%;
          cursor: pointer;
          color: ${colors.primary};
          flex-shrink: 0;
          font-size: 11px;
          font-weight: bold;
          height: 20px;
          line-height: 20px;
          margin: 0 0 0 auto;
          outline: 0;
          padding: 0;
          text-align: center;
          width: 20px;
        }
        button:hover {
          background: ${colors.primary};
          color: white;
        }
      `}</style>
    </li>
  );
});
