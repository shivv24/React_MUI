import React from "react";
import { MenuList } from "../data/data";
import Layout from "../components/Layout/Layout";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

const Menu = () => {
  return (
    <Layout>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        gap={4}
        padding={2}
      >
        {MenuList.map((menu, index) => (
          <Card key={index} sx={{ maxWidth: "345px", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ width: "100%", height: "200px", objectFit: "cover" }}
                component="img"
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {menu.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {menu.description}
                </Typography>
                <Typography variant="h6" color="text.primary">
                  ${menu.price}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;
