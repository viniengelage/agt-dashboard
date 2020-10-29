import React, { useRef, useEffect, useCallback, useState }  from 'react';
import { useField } from '@unform/core';

import { Container, InputBlock, Error } from './styles';

import { IoIosAlert } from 'react-icons/io';

const InputFile = ({ name, label, icon, ...rest }) => {
const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const inputRef = useRef(null);
  
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [preview, setPreview] = useState(defaultValue);

  const handlePreview = useCallback((e) => {
    const file = e.target.files?.[0];
    if (!file) {
      setPreview(null);
    }
    const previewURL = URL.createObjectURL(file);
    setPreview(previewURL);
  }, []);

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
      path: 'files[0]',
      clearValue(ref) {
        ref.value = '';
        setPreview(null);
      },
      setValue(_, value) {
        setPreview(value);
      }
    })
  }, [fieldName, registerField]);

  const Icon = icon;

  return (
    <>
      <InputBlock>
      {label && <label htmlFor={fieldName}>{label}</label>}
      { preview && <img src={preview} alt="Preview" width="100" /> }
      <Container isFocused={isFocused} isFilled={isFilled} isErrored={!!error}>
        <Icon size={36}/>
        <input
            type="file"
            ref={inputRef}
            id={fieldName}
            onChange={handlePreview}
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
    </>
  );
};

export default InputFile;