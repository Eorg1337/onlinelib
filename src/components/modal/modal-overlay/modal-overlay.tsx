import React from 'react'
import * as styles from './modal-overlay.module.css'
import { useRef } from 'react'
import { ModalProps } from '../../../utils/interfaces/interfaces'
export const MyModalOverlay: React.FC<ModalProps> = ({ onClose }) => {
  const ref = useRef(null)
  return <div className={styles.overlay} ref={ref} onClick={onClose} />
}
