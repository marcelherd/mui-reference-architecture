import { type TypographyProps, Typography, Divider } from "@mui/material";

type Props = TypographyProps;

export const Subtitle: React.FC<Props> = ({ children, ...props }) => {
  return (
    <>
      <Typography variant="subtitle1" color="text.secondary" {...props}>
        {children}
      </Typography>
      <Divider sx={{ mt: 2, mb: 3 }} />
    </>
  );
};
