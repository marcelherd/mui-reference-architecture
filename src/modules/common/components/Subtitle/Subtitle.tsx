import { type TypographyProps, Typography, Divider } from "@mui/material";

type Props = TypographyProps<"p">;

export const Subtitle: React.FC<Props> = ({ children, ...props }) => {
  return (
    <>
      <Typography
        variant="subtitle1"
        component="p"
        color="text.secondary"
        {...props}
      >
        {children}
      </Typography>
      <Divider sx={{ mt: 2, mb: 3 }} />
    </>
  );
};
