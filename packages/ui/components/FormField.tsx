import React from 'react';

export interface Props {
  label: string;
}

export const FormField: React.FunctionComponent<Props> = ({
  label,
  children
}) => {
  return (
    <div className="formField">
      <label>{label}</label>
      <div>{children}</div>
      <style jsx>{`
        .formField {
          margin: 0 0 20px;
        }
        .formField :global(input[type='text']) {
          width: 100%;
        }
        label {
          display: block;
          margin: 0 0 5px;
        }
      `}</style>
    </div>
  );
};
