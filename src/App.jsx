import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import RegistrationPage from "./pages/RegistrationPage";
import PostDetail from "./pages/PostDetail";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/post/:id" element={<PostDetail />} />
        </Route>
        <Route path="/user/:id" element={<Profile />}></Route>

      </Routes>

    </>
  );
};

export default App;