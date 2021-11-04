import { Placement, PositioningStrategy } from '@popperjs/core';
import React, { PropsWithChildren, useMemo, useState } from 'react';
import { usePopper } from 'react-popper';

type PopperProps = {
  open?: boolean;
  anchorEl?: Element | null;
  placement?: Placement;
  strategy?: PositioningStrategy;
};

export const Popper = ({
  anchorEl,
  open,
  placement,
  strategy,
  ...props
}: PropsWithChildren<PopperProps>) => {
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);

  const { attributes, styles: popperStyles } = usePopper(
    anchorEl,
    popperElement,
    {
      placement,
      strategy,
    }
  );

  const styles = useMemo<React.CSSProperties>(() => {
    return {
      ...popperStyles.popper,
      visibility: open ? undefined : 'hidden',
      pointerEvents: open ? undefined : 'none',
    };
  }, [popperStyles.popper, open]);

  return (
    <div style={styles} {...attributes.popper} ref={setPopperElement}>
      {props.children}
    </div>
  );
};
