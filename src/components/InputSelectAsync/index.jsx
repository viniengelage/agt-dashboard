import React, { useRef, useEffect, useState, useCallback } from 'react';
import ReactSelect from 'react-select/async';
import { useField } from '@unform/core';

import { IoIosAlert } from 'react-icons/io';

import { Container, InputBlock, Error } from './styles';

const InputSelectAsync = ({ name, options, label, inputText, icon, ...rest }) => {
  const { fieldName, defaultValue, registerField, error } = useField(name);

  const selectRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref) => {
        if (rest.isMulti) {
          if (!ref.select.state.value) {
            return [];
          }
          return ref.select.state.value.map(
            (option) => option.value,
          );
        }
        if (!ref.select.state.value) {
          return '';
        }
        return ref.select.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!selectRef.current);
  }, []);

  const customStyles = {
    container: (base, state) => ({
      ...base,
      border: 0,
      width: '100%',
    }),
    control: (base, state) => ({
      ...base,
      border: 0,
      boxShadow: '0 !important',
      '&:hover': {
        border: '0 !important'
     }
    }),
    valueContainer: (base, state) => ({
      ...base,
      border: 0
    }),
  };

  const Icon = icon;

  return (
    <InputBlock>
      {label && <label htmlFor={fieldName}>{label}</label>}
      <Container isFilled={isFilled} isFocused={isFocused}>
        <Icon size={36}/>
        <ReactSelect
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          ref={selectRef}
          defaultValue={defaultValue}
          options={options}
          styles={customStyles}
          placeholder={inputText}
          cacheOptions
          classNamePrefix="react-select"
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
};

export default InputSelectAsync;
