export interface IInputControlProps {
  modelValue?: string
  errorMessage?: string | null
  placeholder?: string
  isClearable?: boolean
  hideDetails?: boolean
  readonly?: boolean
  isDisabled?: boolean
  isLoading?: boolean
  appendInnerIcon?: string | null
  timeout?: number
  icon?: string | null
  autoFocus?: boolean
}