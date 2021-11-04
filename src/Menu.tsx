import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { ComponentProps, PropsWithChildren } from 'react';
import { useClassName } from './utils';

interface MenuProps extends PropsWithChildren<ComponentProps<'div'>> {
  /**
   * Flag to show/hide the dialog
   */
  show?: boolean;
}

export const Menu = React.forwardRef<HTMLDivElement, MenuProps>(
  ({ show = false, ...props }, ref) => {
    const classNames = useClassName(props, 'surface-level-1');
    return (
      <div
        role="menu"
        css={css`
          border: 1px solid transparent;
          background: var(--surface-background);
          border-radius: 0.25rem;
          min-width: 10rem;
          display: inline-block;
          overflow: hidden;
        `}
        className={classNames}
        {...props}
        ref={ref}
      ></div>
    );
  }
);

const MenuItemButton = styled.button`
  color: var(--surface-foreground);
  display: block;
  padding-left: 1rem;
  padding-right: 1rem;

  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  user-select: none;
  cursor: pointer;
  border-radius: 0;
  width: 100%;
  text-align: left;

  transition: background-color 300ms ease-in-out;

  &[disabled],
  &.disabled {
    cursor: default;
    background-color: var(--well-background);
    opacity: 0.25;
  }

  &:hover {
    background-color: var(--menu-active);
  }

  & + & {
    margin: 0;
  }
`;

export const MenuItem = React.forwardRef<
  HTMLButtonElement,
  ComponentProps<'button'>
>(({ onClick, ...props }, ref) => {
  const className = useClassName(props, 'link');

  return (
    <MenuItemButton
      role="menuitem"
      ref={ref}
      className={className}
      {...props}
      onClick={(e) => {
        if (props.disabled) {
          e.preventDefault();
          e.stopPropagation();
          return;
        }

        if (onClick) {
          onClick(e);
        }
      }}
    />
  );
});
