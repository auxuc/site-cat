import React, { ReactElement } from 'react';
import useStyles from './styles';

interface IButton {
  type?: 'button' | 'submit' | 'reset';
  text: string;
  isDisabled?: boolean;
  onClick?: Function
}

export const Button = ({
  type = 'button',
  text,
  isDisabled = false,
  onClick,
  ...props
}: IButton): ReactElement => {
  const classes = useStyles();

  return (
    <button
      type={type}
      disabled={isDisabled}
      className={classes.button}
      onClick={(e) => onClick?.(e)}
      {...props}
    >
      {text}
    </button>
  );
};