import React from 'react'
import Link from 'next/link';
import { ButtonBack, ButtonFront } from './index'

const Button = (props) => (
  <Link href="https://medium.com/@chondroa/" passHref >
    <ButtonBack target="_blank" rel="noopener noreferrer" alt={props.alt} form={props.form} disabled={props.disabled}>{props.children}
      <ButtonFront alt={props.alt} onClick={props.onClick} disabled={props.disabled}>{props.children}</ButtonFront>
    </ButtonBack>
    {/* <ButtonBack target="_blank" alt={props.alt} form={props.form} disabled={props.disabled}>{props.children}
      <ButtonFront alt={props.alt} onClick={props.onClick} disabled={props.disabled}>{props.children}</ButtonFront>
    </ButtonBack> */}
  </Link>


);

export default Button
