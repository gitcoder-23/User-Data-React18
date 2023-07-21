import React, { useEffect, useState } from 'react';
import { Button, Dropdown, Nav } from 'react-bootstrap';

const Menu = () => {
  const [authState, setAuthState] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem('userlogdata');
    if (userData) {
      const userTokenData = JSON.parse(userData).token;
      if (userTokenData) {
        setAuthState(true);
      }
    }
  }, []);

  const makeLogOut = () => {
    localStorage.removeItem('userlogdata');
    window.location.reload();
  };

  return (
    <>
      <Nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="/">Navbar</a> */}
          <Button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </Button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  Application Menu
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/userapp">User list app</Dropdown.Item>
                  <Dropdown.Item href="/userapptask">
                    User list Dummy Json
                  </Dropdown.Item>
                  <Dropdown.Item href="/employeelist">
                    Employee Crud App
                  </Dropdown.Item>
                  <Dropdown.Item href="/redux/emplist">
                    Employee Crud Using Redux
                  </Dropdown.Item>
                  {authState === false && (
                    <Dropdown.Item href="/login">
                      Login Authentication
                    </Dropdown.Item>
                  )}
                  <Dropdown.Item onClick={() => makeLogOut()}>
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </ul>
            {/* <form onSubmit={getSearch} className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={updateSearch}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </Nav>
    </>
  );
};

export default Menu;
