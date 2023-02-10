import React from 'react';
import {
    Grid,
    Box,
    Container,
    TextField,
    Button,
    Typography,
  } from "@mui/material";

export default function Contact() {
  return (
    <div id="contact">
        <h2 className="about_title">
          <u>Contact</u>
        </h2>
        <Box sx={{ height: "90vh", mt: 10 }}>
      <Container>
        <Grid container>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                sx={{ border: "1px solid grey", color: "white",borderRadius:"10px" }}
                value="First Name" 
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                sx={{ border: "1px solid grey", color: "white",borderRadius:"10px" }}
                value="Last Name"
              />
            </Grid>
          </Grid>
          <Grid xs={12} sx={{ my: 3 }}>
            <TextField
              fullWidth
              sx={{ border: "1px solid grey", color: "white",borderRadius:"10px" }}
              value="Your Email"
            />
          </Grid>
          <Grid xs={12}>
            <TextField
              fullWidth
              sx={{
                border: "1px solid grey",
                color: "white",
                height: "200px",
                borderRadius:"10px"
              }}
              value="Your Message"
            />
          </Grid>
          <Grid xs={12}>
            <Button
              variant="contained"
              size="medium"
              sx={{ backgroundColor: "blue", width: "100%", mt: 3,borderRadius:"10px" }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
    </div>
  )
}
