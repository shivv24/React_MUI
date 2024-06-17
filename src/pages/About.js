import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          padding: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4": {
              fontSize: "1.5rem",
              fontWeight: 500,
              marginBottom: "1rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome to my Restaurant</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eos,
          dolores quasi vitae iste aspernatur illum nemo laudantium excepturi,
          ex officiis aliquam ab nam ducimus amet hic natus consectetur eius in
          labore fugiat deleniti temporibus praesentium! Dignissimos iste
          placeat illum ipsum non, accusantium nemo. Corrupti velit placeat,
          quos nostrum a sint porro nihil ipsam at recusandae doloribus, ut
          magnam accusamus facere, praesentium maxime perferendis veniam impedit
          molestiae magni nesciunt cumque. Quos quibusdam alias, obcaecati
          minus, ipsum quis itaque ratione distinctio iste sit rerum tenetur
          soluta aspernatur. Excepturi sapiente perferendis quibusdam
          accusantium, recusandae magnam maxime voluptatum iusto ex mollitia hic
          facere!
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
          dignissimos modi exercitationem eveniet temporibus quos soluta
          repellendus quam, inventore recusandae magnam dolorem ad cum corporis
          tempora nam rerum explicabo accusantium sit voluptate architecto.
          Ratione nihil fugiat libero magnam, dignissimos animi sunt optio
          recusandae illum veritatis? Quaerat atque expedita ipsam, autem labore
          rerum dicta eaque? Beatae eaque eveniet ullam placeat quas sapiente
          itaque accusamus corporis sint quibusdam voluptatibus vel in eos
          voluptates quasi, cupiditate, incidunt totam suscipit? Illo voluptate,
          blanditiis iste laudantium esse ad harum accusamus eum suscipit
          molestiae sapiente commodi molestias distinctio dolorem, aperiam sit
          adipisci obcaecati! Qui, maxime voluptate.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
