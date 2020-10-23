import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';

import { Container, InputBlock, Error } from './styles';

const Input = ({
  label,
  name,
  icon: Icon,
  help,
  ...rest
}) => {
  const inputRef = useRef(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  const [show, setShow] = useState(false);

  const showTooltip = () => {
    if (show || help === undefined) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  const visible = show ? 'visible' : 'disable';

  const tooltip = (
    <i
      onMouseEnter={showTooltip}
      onMouseLeave={showTooltip}
      className="pi pi-info-circle ico"
    >
      <div id={visible} className="Tooltip">
        <div id="arrow" />
        <span id="help">{help}</span>
      </div>
    </i>
  );

  return (
    <InputBlock>
      <label htmlFor={name}>
        {label}
        {help ? tooltip : false}
      </label>
      <Container isErrored={!!error} isFilled={isFilled} isFocused={isFocused}>
        {Icon && <Icon />}
        <input
          name={name}
          defaultValue={defaultValue}
          ref={inputRef}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          {...rest}
        />
        {error && (
          <Error title={error}>
            <FiAlertCircle color="#c53030" size={20} />
          </Error>
        )}
      </Container>
    </InputBlock>
  );
};

export default Input;
