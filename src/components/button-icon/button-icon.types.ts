import { VuetifyColor } from '@/models';

export interface IButtonIconProps {
  icon?: string;
  text?: string;
  color: VuetifyColor;
  disabled?: boolean;
  tooltip?: string;
  additionalClass?: string;
}