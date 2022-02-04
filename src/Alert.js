import React, { useEffect } from 'react'

const Alert = ({ data, hideAlertAction }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      hideAlertAction();
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [data]);

  return (<p className={'alert alert-' + data.type}>{data.text}</p>)
}

export default Alert
