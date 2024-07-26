
export interface TableProps {
  headers: string[];
  rows: string[][];
  colSpacing?: number;
  cellColors?: string;
  borderColor?: string;
  borderWidth?: number;
  fontSize?: string;
  textColor?: string;
  headerBgColor?: string;
  rowHoverEffect?: boolean;
  boxShadow?: boolean;
  stripe?: boolean;
  stripeColor?: string;
}
