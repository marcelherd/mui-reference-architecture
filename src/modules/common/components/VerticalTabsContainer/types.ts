export type ChangeTabEvent = (
  event: React.SyntheticEvent<Element, Event>,
  value: any
) => void;

export type Tab = {
  children?: React.ReactNode;
  label: string;
  title?: string;
  subtitle?: string;
  hideDivider?: boolean;
};
