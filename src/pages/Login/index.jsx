import React from 'react';
import { Form } from '@unform/web'
import InputBasic from '../../components/InputBasic';

const Login = props => {
    return(
        <>
            <Form>
                <InputBasic 
                    name="email"
                    label="Email"
                />
                <InputBasic
                    name="password"
                    label="Senha"
                />
            </Form>
        </>
    )
}

export default Login;