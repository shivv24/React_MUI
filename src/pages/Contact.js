import React from "react";
import Layout from "../components/Layout/Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 10, ml: 10, "&h4": { fontWeight: "bold", m: 2 } }}>
        <Typography variant="h4">Contact My Restaurant</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
          numquam dicta, praesentium molestias ipsam voluptas provident eius vel
          minima neque doloremque asperiores saepe adipisci laboriosam libero,
          veritatis dolorem cumque quam?
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          width: "600px",
          ml: 5,
          "@media (max-width:600px)": { width: "300px" },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} />
                  1800-000-000 (tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <EmailIcon sx={{ color: "skyBlue", pt: 1 }} />
                  helpme@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} />
                  1234567890
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
