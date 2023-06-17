import React from "react";
import Title from "./../components/Title/index";
import Card from "./../components/Card/index";
import SearchBar from "../components/SearchBar";

function Home() {
  return (
    <div>
      <Title title={"Catálogo de Filmes"} text={"Filmes Disponíveis"} />
      {/* <Title title=""/> */}
      <SearchBar/>
    </div>
  );
}
export default Home;
