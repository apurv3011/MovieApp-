let Navbar = () => {
    return(
        <div>
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="google.com">MoviesRentals</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="google.com">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="google.com">Customers</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="google.com">Rentals</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="google.com">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    
        </div>
    );
}

export default Navbar;