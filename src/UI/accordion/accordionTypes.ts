export interface AccordionProps {
  id?: number;
  selectedId?: number;
  handleSelectedId?: (id: number) => void;
  titleFirst?: string;
  titleSecond?: string;
  titleThird?: string;
  textFirst?: string;
  textSecond?: string;
  color?: string;
  isRoot?: boolean;
  hasChildren?: boolean;
}
