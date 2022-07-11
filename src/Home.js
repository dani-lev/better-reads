import React from "react";
import SingleBook from "./SingleBook";
import Books from "./Books";
import Footer from "./Footer";
import Button from "@mui/material/Button";

const Home = () => {
  return (
    <div>
      <main class="Home-page">
        <h2>Home Page</h2>
        <h3>What are you looking for?</h3>
        {/* Search Form */}

        <Button variant="contained" href="#contained-buttons">
          Search
        </Button>
        {/* Books Component */}
        <Books />
        <SingleBook />
      </main>
      <Footer />
    </div>
    // Book Border Design
  );
};

export default Home;
