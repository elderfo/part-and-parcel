import { PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';

type PortalProps = {
  /**
   * Container element to attach the portal to. If this element is not set, the body element will be used.
   */
  container?: Element | null;
  /**
   * Flag for using this as a portal or a regular element.
   */
  enabled?: boolean;
};

export const Portal = ({
  children,
  container,
  enabled = true,
}: PropsWithChildren<PortalProps>): JSX.Element => {
  if (enabled) {
    return ReactDOM.createPortal(
      children,
      container || document.querySelector('body')!
    );
  }

  return <>children</>;
};
