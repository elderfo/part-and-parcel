import styled from '@emotion/styled';
import React, { ComponentProps } from 'react';
import { HorizontalStack } from './Primitives';
import { useClassName } from './utils';

type ValidationTextFieldProps = {
  /**
   * Label or name of the text field
   */
  label?: string;
  /**
   * Error message of the text field. When this field evaluates to
   * `true`, the text field is in an error state
   */
  error?: string;
};

const LabelText = styled.span`
  flex: 1;
  color: var(--surface-foreground-medium);
  font-size: 0.75rem;
  font-weight: 600;
`;

const ErrorText = styled.span<{ show: boolean }>`
  margin-left: 1rem;
  color: var(--error-outline);
  opacity: ${(props) => (props.show ? 1 : 0)};
  font-size: 0.75rem;
  transition: opacity 300ms ease-in-out;
`;

const Label = styled.label`
  flex: 1;
  display: flex;
  flex-direction: column;

  input,
  textarea {
    margin: 0;
    outline: none;

    padding: 0.25rem;
    display: block;
    width: 100%;
    border-radius: 0.25rem;
    border-width: 1px;
    border-style: solid;
    border-color: var(--surface-outline);
    font-family: 'Open Sans', sans-serif;

    transition: all 300ms ease-in-out;
    outline: none;

    &:focus {
      border-color: var(--primary-background-medium);
    }

    &.invalid {
      border-color: var(--error-outline);
    }
  }

  textarea {
    flex: 1;
  }

  input {
    height: 2rem;
  }
`;

type TextFieldProps = ValidationTextFieldProps & ComponentProps<'input'>;

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label = '', error, className, ...inputProps }: TextFieldProps, ref) => {
    const showError = !!error;
    const classNames = useClassName({ className }, showError ? 'invalid' : '');
    return (
      <Label>
        <HorizontalStack>
          <LabelText>{label}</LabelText>
          <ErrorText show={showError}>{error}</ErrorText>
        </HorizontalStack>
        <input {...inputProps} ref={ref} className={classNames} />
      </Label>
    );
  }
);

type TextAreaFieldProps = ValidationTextFieldProps & ComponentProps<'textarea'>;

export const TextAreaField = React.forwardRef<
  HTMLTextAreaElement,
  TextAreaFieldProps
>(
  (
    { label = '', error, className, ...inputProps }: TextAreaFieldProps,
    ref
  ) => {
    const showError = !!error;
    const classNames = useClassName({ className }, showError ? 'invalid' : '');
    return (
      <Label>
        <HorizontalStack>
          <LabelText>{label}</LabelText>
          <ErrorText show={showError}>{error}</ErrorText>
        </HorizontalStack>
        <textarea {...inputProps} ref={ref} className={classNames} />
      </Label>
    );
  }
);
