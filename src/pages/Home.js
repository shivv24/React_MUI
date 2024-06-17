import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
      <div
        className="home"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1604152135912-04a022e23696?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      >
        <div className="headerContainer">
          <h1>Food Website</h1>
          <p>Best Food in India</p>
          <Link to={"/menu"}>
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
