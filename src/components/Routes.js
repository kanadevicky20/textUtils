

import About from "./About";

function Routes(){
    return(
        <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    )
}
export default Routes;