export interface RadioButtonProps {
  label: string;
  name: string;
  value: string;
  selectedColor?: string;
  hoverColor?: string;
  disabled?: boolean;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
