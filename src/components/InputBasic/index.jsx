import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useField } from '@unform/core';

import { Container, InputBlock } from './styles';

export default function Input({ name, label, ...rest }) {
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
  return (
    <InputBlock>
      {label && <label htmlFor={fieldName}>{label}</label>}
      <Container isFocused={isFocused} isFilled={isFilled}>
        <input
          ref={inputRef}
          id={fieldName}
          defaultValue={defaultValue}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          {...rest}
        />

        {error && <span style={{ color: '#f00' }}>{error}</span>}
      </Container>
    </InputBlock>
  );
}
