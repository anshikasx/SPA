import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
} from "@mui/material";

export default function App() {
  return (
    <Box sx={{ bgcolor: "#f4f6f8", minHeight: "100vh" }}>
      {/* Top Navbar */}
      <AppBar position="static" sx={{ bgcolor: "#111827" }}>
        <Toolbar>
          <Typography variant="h6" fontWeight="bold">
            Student Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box sx={{ p: 3 }}>
        {/* Cards Section */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  Attendance
                </Typography>
                <Typography variant="h4" fontWeight="bold" sx={{ mt: 1 }}>
                  85%
                </Typography>
                <Typography variant="body2" sx={{ color: "gray" }}>
                  Keep it above 75%
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  Assignments
                </Typography>
                <Typography variant="h4" fontWeight="bold" sx={{ mt: 1 }}>
                  3
                </Typography>
                <Typography variant="body2" sx={{ color: "gray" }}>
                  Pending tasks
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  Upcoming Test
                </Typography>
                <Typography variant="h4" fontWeight="bold" sx={{ mt: 1 }}>
                  COA
                </Typography>
                <Chip
                  label="Next Week"
                  sx={{
                    mt: 1,
                    bgcolor: "#E0F2FE",
                    color: "#0369A1",
                    fontWeight: "bold",
                  }}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Task List Section */}
        <Card sx={{ mt: 4, borderRadius: 3, boxShadow: 2 }}>
          <CardContent>
            <Typography variant="h6" fontWeight="bold">
              Today’s Tasks
            </Typography>

            <Box
              sx={{
                mt: 2,
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Chip
                label="✔ Complete DAA Assignment"
                color="success"
                variant="outlined"
              />
              <Chip
                label="⏳ Revise COA Unit-2"
                color="warning"
                variant="outlined"
              />
              <Chip
                label="📌 Submit UI Experiment"
                color="error"
                variant="outlined"
              />
            </Box>

            <Button
              variant="contained"
              sx={{
                mt: 3,
                bgcolor: "#111827",
                borderRadius: 2,
                "&:hover": { bgcolor: "#1F2937" },
              }}
            >
              View All
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}