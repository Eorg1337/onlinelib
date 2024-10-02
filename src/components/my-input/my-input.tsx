import React from 'react'
import { MyInputProps } from '../../utils/interfaces/interfaces'

export const MyInput: React.FC<MyInputProps> = ({
  type,
  className,
  placeholder,
  onChange
}) => {
  return (
    <>
      <input
        type={type}
        className={className}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  )
}
