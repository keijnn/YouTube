import clsx from 'clsx'
import { MutableRefObject } from 'react'

interface InputProps {
  label: string
  className?: string
  onChange?: () => void
  onFocus?: () => void
  onBlur?: () => void
}

export const Input = ({ label, onFocus, onBlur, onChange, className }: InputProps) => (
  <input
    onFocus={onFocus}
    onBlur={onBlur}
    onChange={onChange}
    placeholder={label}
    className={clsx(
      'h-full w-full outline-none text-base bg-black text-white placeholder-[#7D7D7D]',
      className
    )}
  />
)
