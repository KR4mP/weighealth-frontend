import Topbar from "./components/Topbar/Topbar";
import Home from "./pages/Home/Home";
import Category from "./pages/Category/Category";
import SinglePost from "./pages/SinglePost/SinglePost";
import Write from "./pages/Write/Write";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const admin = false;
  return (
    <div className="App">
      <Router>
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:catId" element={<Category />}></Route>
          <Route path="/post/:postId" element={<SinglePost />}></Route>
          <Route path="/write" element={admin ? <Write /> : <Home />}></Route>
          <Route
            path="/register"
            element={admin ? <Home /> : <Register />}
          ></Route>
          <Route path="/login" element={admin ? <Home /> : <Login />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
