import Pagenation from "./Pagenation";
let Table = (props) => {

    return (
        <>
        <div class="row">
        <div class="col-10">
          <table class="table mt-4">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                <th scope="col">Stock</th>
                <th scope="col">Rate</th>
              </tr>
            </thead>
            <tbody>
            { props.movieData.map((el) => {
                 return (
                     <tr key = {el._id}>
                         <td>{el.title}</td>
                         <td>{el.genre.name}</td>
                         <td>{el.numberInStock}</td>
                         <td>{el.dailyRentalRate}</td>
                         <td>like</td>
                         <td><button>Delete</button></td>
                     </tr>
                 );
             })}
            </tbody>
          </table>
        </div>
      </div>
      <Pagenation />
      </>
    );
}

export default Table;