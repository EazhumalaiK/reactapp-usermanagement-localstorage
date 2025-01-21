import React from "react";

interface HomeProps {
  name: string;
}

const Home = (Name: HomeProps) => {
  return <div>Welcome {Name.name}</div>;
};

export default Home;
