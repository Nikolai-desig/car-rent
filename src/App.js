import React, { lazy } from "react";
import { Routes, Route, Link } from "react-router-dom";
import css from './App.module.css'

const Home = lazy(() => import("./components/Pages/Home"));
const Cars = lazy(() => import("./components/Pages/Cars"));

export default function App() {
  return (
    <div>
      <header>
        <nav className={css.navigation}>
          <Link to="/" className={css.link}>
            Home
          </Link>
          <Link to="/cars" className={css.link}>
            Cars
          </Link>
          <Link to="/favorite" className={css.link}>
            Favorite
          </Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cars" element={<Cars />} />
      </Routes>
    </div>
  );
}
