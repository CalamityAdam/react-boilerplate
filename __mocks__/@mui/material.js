import React from 'react';

export function Accordion({ children }) {
  return <div data-testid='accordion'>{children}</div>;
}
export function AccordionDetails({ children }) {
  return <div>{children}</div>;
}
export function AccordionSummary({ children }) {
  return <div>{children}</div>;
}
export function Box({ children }) {
  return <div>{children}</div>;
}
export function Container({ children }) {
  return <div>{children}</div>;
}
export function TextField({ children, ...rest }) {
  return (
    <input type='text' role='textbox' data-testid='textbox' {...rest}>
      {children}
    </input>
  );
}
export function Typography({ children }) {
  return <p>{children}</p>;
}
