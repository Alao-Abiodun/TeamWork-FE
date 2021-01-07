import React, {useState} from 'react';
import './register.css';

function Login() {
    const initialState = {
        email: '',
        password: '',
      };
      const [formData, setformData] = useState(initialState);
      const handleChange = e => {
        const { name, value } = e.target;
        setformData({ ...formData, [name]: value });
      };
      const handleSubmit = e => {
        e.preventDefault();
        const data = {
          email,
          password,
        };
        console.log(data);
      };
      const {
        email,
        password,
      } = formData;
      return (
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <div className="form-group">
                {/* <label htmlFor="title">Title </label> */}
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                {/* <label htmlFor="email">Password </label> */}
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  placeholder="password"
                />
              </div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      );
}

export default Login;