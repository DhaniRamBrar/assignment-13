export interface CardProps {
  title: string;
  content: string;
  imageUrl?: string;
  alignText?: 'left' | 'center' | 'right';
  hoverEffect?: boolean;
  backgroundColor?: string;
  borderStyle?: string;
  borderColor?: string;
}
