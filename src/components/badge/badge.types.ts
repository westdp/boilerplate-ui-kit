export type BadgeLabelType = 'success' | 'error' | 'info' | 'default';
export interface IBadgeProps {
  label: string
  status?: BadgeLabelType
}