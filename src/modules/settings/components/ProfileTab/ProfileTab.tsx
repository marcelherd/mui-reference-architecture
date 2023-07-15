import { Box } from "@mui/material";

import { TextField } from "@/modules/forms";

type Props = {};

export const ProfileTab: React.FC<Props> = () => {
  return (
    <Box>
      <TextField label="Username" />
    </Box>
  );
};
