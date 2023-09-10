import * as React from 'react';
import s from './exceptionhandler.module.scss';

interface HandlerProps {
  response: string;
}

function ExceptionHandler({ response }: HandlerProps) {
  return (
    <div className={s.container}>
      <p>{response}</p>
    </div>
  );
}

export default ExceptionHandler;
