import React from "react";
import Filter from "./filter";
import Navbar from "./navbar";
import Pagenation from "./Pagenation";
import Search from "./search";
import Table from "./Table";
import './App.css';
class App extends React.Component {

  state = {
    movie : [],
    genre : [],
    selectedFilter :"All Genre",

  };
  setFilter = (filter) => {
    this.setState({selectedFilter : filter});
  }
  componentDidMount() {
    //i will get data here

    let f = async () => {
      let moviesresponse = await fetch("/movies");
      let genreResponse = await fetch("/genre");
      let moviesJson = await moviesresponse.json();
      let genreJson = await genreResponse.json();
      this.setState({
        movie : moviesJson,
        genre : genreJson,
      });

    };

    f();
  }

  render() {
    return(
     <div>
        <Navbar />
        <div className = "row">
        <Filter 
          genreName = {this.state.genre}
          handleFilter = {this.setFilter}
          selectedFilter = {this.state.selectedFilter}
        />
          <div class="col-9 p-4">
          <Search />
          <Table movieData = {this.state.movie} 
            selectedFilter = {this.state.selectedFilter}/>
          </div>
        </div>
     
     </div>
     
    );
  }
}

export default App;
