import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand fw-bold" href="#">Book Review Board</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <Link to={'/login'}>
                                <li className="nav-item">
                                    <div className="nav-link">Login</div>
                                </li>
                            </Link>
                           <Link to={'/register'}>
                                <li className="nav-item">
                                    <div className="nav-link">Register</div>
                                </li>
                           </Link>
                        </ul>
                    </div>
                </div>
            </nav>

            <section className="bg-light py-5 text-center">
                <div className="container">
                    <h1 className="fw-bold">Discover, Share & Review Books</h1>
                    <p className="lead text-muted">Join our community and explore reviews from passionate readers around the world.</p>
                    <a href="#" className="btn btn-primary btn-lg mt-3">Add Your First Book</a>
                </div>
            </section>

            <section className="py-5">
                <div className="container">
                    <h2 className="mb-4">Latest Books</h2>
                    <div className="row g-4">

                        <div className="col-md-4">
                            <div className="card h-100 shadow-sm">
                                <img src="https://via.placeholder.com/300x400" className="card-img-top" alt="Book Cover" />
                                <div className="card-body">
                                    <h5 className="card-title">Book Title</h5>
                                    <p className="card-text text-muted">by Author Name</p>
                                    <p className="card-text">A short description of the book goes here...</p>
                                    <a className="btn btn-outline-primary btn-sm">View Details</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card h-100 shadow-sm">
                                <img src="https://via.placeholder.com/300x400" className="card-img-top" alt="Book Cover" />
                                <div className="card-body">
                                    <h5 className="card-title">Another Book</h5>
                                    <p className="card-text text-muted">by Author Name</p>
                                    <p className="card-text">Brief description about this amazing book...</p>
                                    <a href="#" className="btn btn-outline-primary btn-sm">View Details</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card h-100 shadow-sm">
                                <img src="https://via.placeholder.com/300x400" className="card-img-top" alt="Book Cover" />
                                <div className="card-body">
                                    <h5 className="card-title">Sample Book</h5>
                                    <p className="card-text text-muted">by Author Name</p>
                                    <p className="card-text">Some description about this book...</p>
                                    <a href="#" className="btn btn-outline-primary btn-sm">View Details</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <footer className="bg-dark text-light py-3 text-center">
                <p className="mb-0">&copy; 2025 Book Review Board | All Rights Reserved</p>
            </footer>
        </>
    )
}

export default Home
