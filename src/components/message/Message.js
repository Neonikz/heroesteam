import React from 'react';

export const Message = ({ message, type }) => ( <div className={`alert alert-${type} text-center`}>{message}</div> );
