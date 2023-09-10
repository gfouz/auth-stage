import * as React from 'react';
import s from './ErrorWarning.module.scss';

interface IErrorWarning {
  info?: string;
  errors?: object;
  label: string | PropertyKey;
}

function ErrorWarning(props: IErrorWarning) {
  const { errors, label, info } = props;

  return (
    <div className={s.errorWarning} {...props}>
      {errors?.hasOwnProperty(label) && (
        <p className={s.errorWarning__message}>{info}</p>
      )}
    </div>
  );
}

export default ErrorWarning;

//npx serve@latest out
