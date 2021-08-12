import React from "react";
import Filter from "./filter";
import Navbar from "./navbar";
import Pagenation from "./Pagenation";
import Search from "./search";
import Table from "./Table";
class App extends React.Component {

  state = {
    movie : [],
    genre : [],

  };
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
        <Filter genreName = {this.state.genre}/>
          <div class="col-9 p-4">
          <Search />
          <Table movieData = {this.state.movie}/>
          </div>
        </div>
     
     </div>
     
    );
  }
}

export default App;
