import { css } from '@emotion/react';
import { ComponentProps, PropsWithChildren, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

type OverlayProps = {
  /**
   * Flag whether or not the Overlay is displayed or not. Default: false
   */
  show?: boolean;
  /**
   * Opacity of the overlay. Default: 0.8
   */
  opacity?: number;
  /**
   * Cursor for the overlay. Default: auto
   */
  cursor?:
    | 'auto'
    | 'default'
    | 'none'
    | 'context-menu'
    | 'help'
    | 'pointer'
    | 'progress'
    | 'wait'
    | 'cell'
    | 'crosshair'
    | 'text'
    | 'vertical-text'
    | 'alias'
    | 'copy'
    | 'move'
    | 'no-drop'
    | 'not-allowed'
    | 'e-resize'
    | 'n-resize'
    | 'ne-resize'
    | 'nw-resize'
    | 's-resize'
    | 'se-resize'
    | 'sw-resize'
    | 'w-resize'
    | 'ew-resize'
    | 'ns-resize'
    | 'nesw-resize'
    | 'nwse-resize'
    | 'col-resize'
    | 'row-resize'
    | 'all-scroll'
    | 'zoom-in'
    | 'zoom-out'
    | 'grab'
    | 'grabbing';
} & ComponentProps<'div'>;

export const Overlay = ({
  show,
  children,
  cursor = 'auto',
  opacity = 0.8,
  ...props
}: PropsWithChildren<OverlayProps>) => {
  return (
    <div
      {...props}
      className={'overlay' + (show ? ' overlay-up' : ' overlay-down')}
      css={css`
        cursor: ${cursor};
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transition: opacity 300ms ease-in-out;
        opacity: ${show ? 1 : 0};

        &.overlay-down {
          animation: lower 300ms linear 1 reverse;
          z-index: -1;
        }

        &.overlay-up {
          z-index: 1000;
        }

        &::before {
          transition: opacity 300ms ease-in-out;
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background: var(--base-background);
          opacity: ${show ? opacity : 0};
          z-index: -1;
        }

        @keyframes lower {
          from {
            z-index: -1;
          }
          to {
            z-index: 1000;
          }
        }
      `}
    >
      {children}
    </div>
  );
};

const OverlayPortal = (props: OverlayProps) => {
  const [container] = useState(document.createElement('div'));

  useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return ReactDOM.createPortal(<Overlay {...props} />, container);
};
Overlay.Portal = OverlayPortal;
