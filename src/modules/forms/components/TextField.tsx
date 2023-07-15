import {
  type TextFieldProps,
  TextField as MuiTextField,
  styled,
} from "@mui/material";

const StyledTextField = styled(MuiTextField)<TextFieldProps>(({ theme }) => ({
  maxWidth: theme.breakpoints.values.sm,
}));

type Props = TextFieldProps;

export const TextField: React.FC<Props> = ({ children, ...props }) => {
  return (
    <StyledTextField variant="outlined" size="small" fullWidth {...props}>
      {children}
    </StyledTextField>
  );
};
