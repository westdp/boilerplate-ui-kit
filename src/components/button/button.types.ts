export type ButtonVariant = 'primary' | 'secondary' | 'text'
export interface ButtonProps {
  label: string
  disabled?: boolean
  variant?: ButtonVariant
  type?: 'button' | 'submit' | 'reset'
}