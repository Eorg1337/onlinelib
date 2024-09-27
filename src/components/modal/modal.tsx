import React, { ReactNode, useRef, PropsWithChildren } from 'react'
import ReactDOM from 'react-dom'
import { MyModalOverlay } from './modal-overlay/modal-overlay'
import { ModalProps } from '../../utils/interfaces/interfaces'
import * as styles from './modal.module.css'
const modal = document.getElementById('modal') as HTMLElement

export const MyModal: React.FC<PropsWithChildren<ModalProps>> = ({
  children,
  onClose
}) => {
  const ref = useRef(null)
  return ReactDOM.createPortal(
    <>
      <MyModalOverlay onClose={onClose} />
      <div className={styles.modal_container} ref={ref}>
        <div className={styles.children}>{children}</div>
        <div>
          <button className={styles.close_btn} onClick={onClose}>
            x
          </button>
        </div>
      </div>
    </>,
    modal
  )
}
