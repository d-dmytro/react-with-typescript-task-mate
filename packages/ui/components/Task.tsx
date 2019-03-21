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
      `}</style>
    </li>
  );
});
