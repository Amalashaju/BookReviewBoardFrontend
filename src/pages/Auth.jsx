import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import { loginApi, registerApi } from '../services/allApi';

function Auth({ register }) {

    const [userDetails, setUserDetails] = useState({
        username: "",
        email: "",
        password: ""
    })
    console.log(userDetails);
    const navigate = useNavigate()

    const handleRegister = async () => {
        console.log("inside register function");

        const { username, email, password } = userDetails
        if (!username || !email || !password) {
            toast.info('please fill the details')
        }
        else {
            const result = await registerApi({ username, email, password })
            console.log(result);
            if (result.status == 200) {
                toast.success('Register successful')
                setUserDetails({
                    username: "",
                    email: "",
                    password: ""
                })
                navigate('/login')
            }
            else if (result.status == 409) {
                toast.warning(result.response.data)
                setUserDetails({
                    username: "",
                    email: "",
                    password: ""
                })
            }
            else {
                toast.error('Something went wrong')
                setUserDetails({
                    username: "",
                    email: "",
                    password: ""
                })
            }
        }

    }

    const handleLogin = async () => {
        const { email, password } = userDetails
        if (!email || !password) {
            toast.info('please enter the complete details')
        }
        else {
            const result = await loginApi({ email, password })
            console.log(result);

            if (result.status == 200) {
                toast.success('login successfull')
                sessionStorage.setItem("existingUser", JSON.stringify(result.data.existingUser))
                sessionStorage.setItem("token", result.data.token)
                navigate('/book-list')

            }
            else if (result.status == 401) {
                toast.warning(result.response.data);
                setUserDetails({
                    username: "",
                    email: "",
                    password: "",
                });
            }

            else if (result.status == 404) {
                toast.warning(result.response.data);
                setUserDetails({
                    username: "",
                    email: "",
                    password: "",
                });
            }

            else {
                toast.error("Something went wrong");
                setUserDetails({
                    username: "",
                    email: "",
                    password: "",
                });
            }
        }
    }

    return (
        <>
            <div
  className="vh-100 d-flex align-items-center justify-content-center"
  style={{
    backgroundImage:
      "url('https://cdn.pixabay.com/photo/2016/11/23/14/37/blur-1853262_1280.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}
>
  <div className="col-md-4">
    <div className="card p-4 shadow">
      <h2 className="text-center mb-4">
        {register ? 'Registration' : 'Login'}
      </h2>

      {register && (
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            value={userDetails.username}
            onChange={(e) =>
              setUserDetails({ ...userDetails, username: e.target.value })
            }
          />
        </div>
      )}

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          value={userDetails.email}
          onChange={(e) =>
            setUserDetails({ ...userDetails, email: e.target.value })
          }
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          value={userDetails.password}
          onChange={(e) =>
            setUserDetails({ ...userDetails, password: e.target.value })
          }
        />
      </div>

      <div className="d-grid mb-3">
        {register ? (
          <button className="btn btn-dark" onClick={handleRegister}>
            Register
          </button>
        ) : (
          <button className="btn btn-dark" onClick={handleLogin}>
            Login
          </button>
        )}
      </div>

      {register ? (
        <p className="text-center">
          Already have an account?{' '}
          <Link to="/login" className="fw-bold text-primary">
            Login
          </Link>
        </p>
      ) : (
        <p className="text-center">
          Are you a new user?{' '}
          <Link to="/register" className="fw-bold text-primary">
            Register
          </Link>
        </p>
      )}
    </div>
  </div>
</div>

            <ToastContainer theme="colored" position="top-center" autoClose={2000} />

        </>
    )
}

export default Auth