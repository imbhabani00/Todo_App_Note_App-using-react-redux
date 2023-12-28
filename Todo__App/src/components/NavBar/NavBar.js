import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Utility Apps</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li>
              <h2>Utility App</h2>
            </li>
            <li className="nav-item">
              <h2><a className="nav-link active" aria-current="page" href="todo">ToDo</a></h2>
            </li>
            <li className="nav-item">
            <h2><a className="nav-link active" aria-current="page" href="notes">Note</a></h2>
            </li> 
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
