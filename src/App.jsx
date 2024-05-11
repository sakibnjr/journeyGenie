import { useState } from "react";
import Nav from "./Nav";
import Home from "./Home";
import Footer from "./Footer";

const App = () => {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <div className="border-b-2 mb-6 shadow-md">
        <Nav open={open} setOpen={setOpen} />
      </div>
      <Home open={open} />
      <Footer open={open} />
    </div>
  );
};

export default App;
