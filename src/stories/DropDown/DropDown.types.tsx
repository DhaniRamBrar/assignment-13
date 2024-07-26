export interface DropdownProps {
  options: string[];
  placeholder?: string;
  multiSelect?: boolean;
  disabled?: boolean;
  onChange: (selectedOption: string | string[]) => void;
}

  