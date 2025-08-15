import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { addBookApi } from '../services/allApi'; // replace with your API


function BookAdd() {
  const [bookDetails, setBookDetails] = useState({
    title: "",
    author: "",
    description: "",
    price: "",
    dprice: "",
    imageurl: ""
  });

  const [token, setToken] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"));
    }
  }, []);

  const handleReset = () => {
    setBookDetails({
      title: "",
      author: "",
      description: "",
      price: "",
      dprice: "",
      imageurl: ""
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, author, description, price, dprice, imageurl } = bookDetails;

    if (!title || !author || !description || !price || !dprice || !imageurl) {
      toast.info('Please fill all the fields completely');
    } else {
      const reqHeader = { "Authorization": `Bearer ${token}` };
      try {
        const result = await addBookApi(bookDetails, reqHeader);
        if (result.status === 200) {
          toast.success('Book added successfully');
          handleReset();
        } else {
          toast.error('Something went wrong');
        }
      } catch (error) {
        toast.error('Server error');
      }
    }
  };

  return (
    <>
      <div className="bg-light min-vh-100">
        <div className="container mt-5">
          <div className="card shadow p-4">
            <h2 className="text-center mb-4">Add Book</h2>
            <form>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" value={bookDetails.title}
                      onChange={(e) => setBookDetails({ ...bookDetails, title: e.target.value })} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Author</label>
                    <input type="text" className="form-control" value={bookDetails.author}
                      onChange={(e) => setBookDetails({ ...bookDetails, author: e.target.value })} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" rows="3" value={bookDetails.description}
                      onChange={(e) => setBookDetails({ ...bookDetails, description: e.target.value })}></textarea>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input type="number" className="form-control" value={bookDetails.price}
                      onChange={(e) => setBookDetails({ ...bookDetails, price: e.target.value })} />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Discount Price</label>
                    <input type="number" className="form-control" value={bookDetails.dprice}
                      onChange={(e) => setBookDetails({ ...bookDetails, dprice: e.target.value })} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Image URL</label>
                    <input type="text" className="form-control" value={bookDetails.imageurl}
                      onChange={(e) => setBookDetails({ ...bookDetails, imageurl: e.target.value })} />
                  </div>
                  <div className="d-flex justify-content-end gap-2">
                    <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                    <button type="button" className="btn btn-secondary" onClick={handleReset}>Reset</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer theme="colored" position="top-center" autoClose={2000} />
    </>
  );
}

export default BookAdd;
