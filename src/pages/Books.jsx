import React from 'react';

function Books() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand fw-bold">
            📚 BookReviewBoard
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ms-auto gap-3 text-white">
              <li className="nav-item">
                <a>Home</a>
              </li>
              <li className="nav-item">
                <a>Book List</a>
              </li>
              <li className="nav-item">
                <a>Add Review</a>
              </li>
              <li className="nav-item">
                <a>Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Page Title */}
      <div className="container mt-4">
        <h1 className="text-center mb-4">📖 Book List</h1>

        {/* Search Bar */}
        <div className="row mb-4">
          <div className="col-md-6 offset-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search books..."
            />
          </div>
        </div>

        <div className="container my-5">
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src=""
                  className="card-img-top"
                  alt=""
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">title</h5>
                  <h6 className="card-subtitle mb-2 text-muted">author</h6>
                  <p className="card-text">desc</p>
                </div>
                <div className="card-footer bg-white border-0">
                  <button className="btn btn-primary w-100">View Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-5">
        <p className="mb-0">&copy; 2025 BookReviewBoard. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default Books;
