import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useHttp } from "../hooks/http.hooks";
import { useMessage } from "../hooks/message.hook";

export default function AuthPage() {
  const auth = useContext(AuthContext);
  const message = useMessage();
  const { request, loading, error, clearError } = useHttp();
  const [form, setForm] = useState({ email: "", password: "" });

  useEffect(() => {
    message(error);
    clearError();
  }, [error, message, clearError]);

  function changeHandler(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }
  const registerHandler = async () => {
    try {
      const data = await request("/api/auth/register", "POST", { ...form });
      message(data);
      loginHandler();
    } catch (e) {}
  };

  const loginHandler = async () => {
    try {
      const data = await request("/api/auth/login", "POST", { ...form });

      auth.login(data.token, data.userId);
    } catch (e) {}
  };
  useEffect(() => {
    window.M.updateTextFields();
  }, []);

  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1>Auth Page</h1>
        <div className="card blue-grey darken-4">
          <div className="card-content white-text">
            <span className="card-title">Авторизация</span>
          </div>
          <div style={{ padding: 30 }}>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="email"
                  type="email"
                  className="validate"
                  name="email"
                  onChange={changeHandler}
                  value={form.email}
                />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="password"
                  type="password"
                  className="validate"
                  name="password"
                  onChange={changeHandler}
                  value={form.password}
                />
                <label htmlFor="password">Password</label>
              </div>
            </div>
          </div>
          <div className="card-action">
            <button
              className="btn teal darken-1"
              style={{ marginRight: 10 }}
              onClick={loginHandler}
              dissabled={loading.toString()}
            >
              Ввойти
            </button>
            <button
              className="btn teal darken-1"
              onClick={registerHandler}
              dissabled={loading.toString()}
            >
              Регистрация
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
