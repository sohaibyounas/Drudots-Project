import { Box, Typography } from "@mui/material";

const EmployeeView = () => {
  return (
    <Box sx={{ p: { xs: 2, md: 3 }, maxWidth: 1400, mx: "auto" }}>
      <Typography variant="h4" fontWeight="bold" mb={4} sx={{ color: "#fff" }}>
        Employee Dashboard
      </Typography>
      <Box>
        <Typography variant="body1" sx={{ color: "#fff" }}>
          Welcome to the Employee Dashboard. More content will be added here soon.
        </Typography>
      </Box>
    </Box>
  );
};

export default EmployeeView;
