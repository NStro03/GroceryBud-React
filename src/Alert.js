import React, { useEffect } from 'react'

const Alert = ({data, hideAlertAction}) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      hideAlertAction();
    }, 2000);
  
    return () => {
      clearTimeout(timeout);
    };
  }, [data]);
  
  return <h2>{data.text}</h2>
}

export default Alert
