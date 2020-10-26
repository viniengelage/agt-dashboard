import React, { useRef, useEffect, useCallback, useState } from 'react';
import ReactInputMask from 'react-input-mask';
import { useField } from '@unform/core';

import { Container, InputBlock } from './styles';

const InputMask = ({ name, label, icon, ...rest }) => {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, registerField, defaultValue, error } = useField(name);

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
      setValue(ref, value) {
        ref.setInputValue(value);
      },
      clearValue(ref) {
        ref.setInputValue('');
      },
    });
  }, [fieldName, registerField]);

  const Icon = icon;

  return (
    <InputBlock>
      {label && <label htmlFor={fieldName}>{label}</label>}
      <Container isFocused={isFocused} isFilled={isFilled}>
        <Icon size={36}/>
        <ReactInputMask
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
};
export default InputMask;
