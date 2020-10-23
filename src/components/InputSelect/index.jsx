import React, { useRef, useEffect, useState, useCallback } from 'react';
import ReactSelect from 'react-select';
import { useField } from '@unform/core';

import { Container, InputBlock } from './styles';

const Select = ({ name, options, label, ...rest }) => {
  const { fieldName, defaultValue, registerField } = useField(name);

  const selectRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      setValue: (ref, value) => {
        ref.select.setValue(value || null);
      },
      clearValue: (ref) => {
        ref.select.clearValue();
      },
      getValue: rest.isMulti
        ? (ref) => ref.state.value.map((option) => option.value) || []
        : (ref) => (ref.state.value ? ref.state.value.value : ''),
    });
  }, [fieldName, registerField, rest.isMulti]);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!selectRef.current);
  }, []);

  return (
    <InputBlock>
      {label && <label htmlFor={fieldName}>{label}</label>}
      <Container isFilled={isFilled} isFocused={isFocused}>
        <ReactSelect
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          ref={selectRef}
          defaultValue={defaultValue}
          options={options}
          {...rest}
        />
      </Container>
    </InputBlock>
  );
};

export default Select;
