// import { render } from "@testing-library/react";

let Filter = (props) => {
    console.log("inside filter");
    console.log(props.genreName);
    return(
        <div class="col-3">
        <ul class="list-group m-4">
          <li class="list-group-item">All Genre</li>
          {
               props.genreName.map((el) => {
                return  <li key = {el.key} class="list-group-item">{el.name}</li>;
               
            })
          }
        </ul>
      </div>
    );


}

export default Filter;