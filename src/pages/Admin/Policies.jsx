import { Box, Typography } from "@mui/material";

// policies page
const Policies = () => {
  return (
    <Box>
      <Typography variant="h4" fontWeight="bold" mb={4}>
        Policies Page
      </Typography>
      {/* Add your policies content here */}
      <Box>
        <Typography variant="body1">
          This is the Policies page. You can manage and view company policies
          here.
        </Typography>
      </Box>
    </Box>
  );
};
export default Policies;
