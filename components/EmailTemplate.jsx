import * as React from 'react';


export function EmailTemplate({ fullName,  email, message }) {
  return (
    <div>
      <h1>My name is {fullName}!</h1>
      <p>{email}</p>
      <p>{message}</p>
    </div>
  );
}