import React from 'react';

import { InputButton } from './styles'

const Button = ({title, ...rest}) => {
    return(
        <InputButton {...rest}>{title}</InputButton>
    )
}

export default Button;