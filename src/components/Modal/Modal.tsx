// import { usePathname } from 'next/navigation';
import React, { type ReactNode, useEffect } from 'react';

import preventBodyScroll from '@/utils/preventBodyScrollHelper';

import { Button } from '@/components/Button';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';
import ModalWrapper from './ModalWrapper';

export interface ModalProps {
  backdropClick?: boolean;
  backgroundColor?: string;
  cancelButtonLabel?: string;
  cancelHandler?: () => void;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  headerClassName?: string;
  hideClose?: boolean;
  isOpen: boolean;
  maxHeight?: string;
  saveButtonLabel?: string;
  saveHandler?: () => void;
  showCancelButton?: boolean;
  showHeader?: boolean;
  showModalInFullScreen?: boolean;
  size?: 'full' | 'lg' | 'md' | 'sm';
  title?: React.ReactNode;
  requiredPadding?: boolean;
  SidebarComponent?: ReactNode;
  closeIconClassName?: string;
  bodyClassName?: string;
}

export default function Modal({
  backdropClick = false,
  backgroundColor = 'bg-white',
  cancelButtonLabel = 'Cancel',
  cancelHandler = () => {},
  children,
  className = '',
  containerClassName = '',
  headerClassName = '',
  hideClose = false,
  isOpen,
  maxHeight = 'max-h-[95vh]',
  saveButtonLabel = '',
  saveHandler = () => {},
  showCancelButton = false,
  showHeader = true,
  showModalInFullScreen = false,
  size = 'sm',
  title = '',
  requiredPadding = true,
  SidebarComponent = null,
  closeIconClassName = '',
  bodyClassName = '',
}: ModalProps) {
  useEffect(() => {
    preventBodyScroll(isOpen);

    return () => {
      preventBodyScroll(false);
    };
  }, [isOpen]);

  return (
    <ModalWrapper
      active={isOpen}
      backgroundColor={backgroundColor}
      className={className}
      containerClassName={containerClassName}
      maxHeight={size === 'full' ? '' : maxHeight}
      requiredPadding={requiredPadding}
      SidebarComponent={SidebarComponent}
      size={size}
      toggleFunc={backdropClick ? cancelHandler : () => {}}
    >
      {showHeader && (
        <ModalHeader
          backgroundColor={backgroundColor}
          closeIconClassName={closeIconClassName}
          containerClassName={headerClassName}
          hideClose={hideClose}
          showModalInFullScreen={showModalInFullScreen}
          toggleFunc={cancelHandler}
        >
          {title}
        </ModalHeader>
      )}
      <ModalBody className={bodyClassName}>{children}</ModalBody>
      {(showCancelButton || saveButtonLabel) && (
        <ModalFooter>
          {showCancelButton && <Button onClick={cancelHandler}>{cancelButtonLabel}</Button>}
          {saveButtonLabel && <Button onClick={saveHandler}>{saveButtonLabel}</Button>}
        </ModalFooter>
      )}
    </ModalWrapper>
  );
}
