import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useField } from '@unform/core';

import { Container, InputBlock, Error } from './styles';

import { IoIosAlert } from 'react-icons/io';

export default function Input({ name, label, icon, ...rest }) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const inputRef = useRef(null);

  const { fieldName, defaultValue = '', registerField, error } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const Icon = icon;

  return (
    <InputBlock>
      {label && <label htmlFor={fieldName}>{label}</label>}
      <Container isFocused={isFocused} isFilled={isFilled} isErrored={!!error}>
        <Icon size={36}/>
        <input
          ref={inputRef}
          id={fieldName}
          defaultValue={defaultValue}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          {...rest}
        />

        {error && (
          <Error title={error}>
            <IoIosAlert color="#c53030" size={28} />
          </Error>
        )}
      </Container>
    </InputBlock>
  );
}
