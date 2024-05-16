export interface DropdownProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  selectName: string;
}
