import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm';
import Main from '../Index/main';
import './Navbar.css';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [showLogin, setShowLogin] = useState(false);  // To show/hide login form
  const Navigate = useNavigate();

  // Check if user is logged in on initial load (from localStorage)
  useEffect(() => {
    const storedUserData = localStorage.getItem('user');
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
      setIsLoggedIn(true);
    }
  }, []);

  // Toggle login/logout state
  const handleAuthToggle = () => {
    if (isLoggedIn) {
      // Log the user out
      localStorage.removeItem('user');
      setIsLoggedIn(false);
      setUserData(null);
    } else {
      // Show the login form
      setShowLogin(true);
      Navigate('/LoginForm')
      console.log('login form is opened');
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-light">
        <div className="container-fluid ">
          <h1 className="navbar-brand" style={{ fontSize: '40px', marginLeft: '12%' }}>
            EDUCARE <br />
            <span>
              <h6 className="navbar-collapse" style={{ marginLeft: '10%' }}>
                Personal Life Coach
              </h6>
            </span>
          </h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ paddingLeft: '10%', fontSize: '20px' }}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ marginLeft: '5%' }}>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active ms-1" aria-current="page" to='/aboutus' >About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active ms-1" aria-current="page" to='/services' >Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active ms-1" aria-current="page" to='/contactus' >Contact Us</Link>
              </li>
              <div className="dropdown">
                <button className="btn dropdown-toggle ms-2" type="button" style={{ fontSize: '20px' }} id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Courses
                </button>
                <ul className="dropdown-menu ms-1" aria-labelledby="dropdownMenuButton1" >
                  <li><Link className="dropdown-item" to='/courses/After10th'>After_10th</Link></li>
                  <li><Link className="dropdown-item" to='/courses/After12th'>After_12th</Link></li>
                  <li><Link className="dropdown-item" to='/cou  rses/graduation'> After_graduation</Link></li>
                </ul>
              </div>
            </ul>

            <form className="d-flex">
              <button type="button" onClick={handleAuthToggle}>{isLoggedIn ? 'Logout' : 'Login'}</button>
            </form>
          </div>
        </div>
      </nav>
      {!showLogin && !isLoggedIn && (
        <div className="main-content">
          {/* <Main/> */}
        </div>
      )}

      {/* Display login form when 'Login' is clicked */}
      {showLogin && !isLoggedIn && (
        <AuthForm
          setIsLoggedIn={setIsLoggedIn}
          setUserData={setUserData}
          setShowLogin={setShowLogin}  // Close login form after successful login
        />
      )}

      {/* Display user info when logged in */}
      {isLoggedIn && (
        <div>
          {/* <h1>Welcome to Our Website!</h1>
          <p>Some important content here on the main page...</p> */}
        </div>
      )}
    </div>
  );
}

export default Navbar;
// import React, { useEffect, useState } from 'react';
// import { Link , useNavigate } from 'react-router-dom';
// import AuthForm from '../AuthForm/AuthForm';
// import Main from '../Index/main';
// import './Navbar.css';

// function Navbar() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userData, setUserData] = useState(null);
//   const [showLogin, setShowLogin] = useState(false);  // To show/hide login form
//   const Navigate = useNavigate();

//   // Check if user is logged in on initial load (from localStorage)
//   useEffect(() => {
//     const storedUserData = localStorage.getItem('user');
//     if (storedUserData) {
//       setUserData(JSON.parse(storedUserData));
//       setIsLoggedIn(true);
//     }
//   }, []);

//   // Toggle login/logout state
//   const handleAuthToggle = () => {
//     if (isLoggedIn) {
//       // Log the user out
//       localStorage.removeItem('user');
//       setIsLoggedIn(false);
//       setUserData(null);
//     } else {
//       // Show the login form
//       setShowLogin(true);
//       Navigate('/LoginForm')
//       console.log('login form is opened');
//     }
//   };

//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-light">
//         <div className="container-fluid ">
//           <h1 className="navbar-brand" style={{ fontSize: '40px', marginLeft: '12%' }}>
//             EDUCARE <br />
//             <span>
//               <h6 className="navbar-collapse" style={{ marginLeft: '10%' }}>
//                 Personal Life Coach
//               </h6>
//             </span>
//           </h1>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ paddingLeft: '10%', fontSize: '20px' }}>
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ marginLeft: '5%' }}>
//               <li className="nav-item">
//                 <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link active" aria-current="page" to='/aboutus' >About Us</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link active" aria-current="page" to='/services' >Services</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link active" aria-current="page" to='/contactus' >Contact Us</Link>
//               </li>
//               <div className="dropdown">
//                 <button className="btn dropdown-toggle" type="button" style={{ fontSize: '20px', marginLeft: '30px' }} id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
//                   Courses
//                 </button>
//                 <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
//                   <li><Link className="dropdown-item" to='/courses/After10th'>After_10th</Link></li>
//                   <li><Link className="dropdown-item" to='/courses/After12th'>After_12th</Link></li>
//                   <li><Link className="dropdown-item" to='/courses/graduation'> After_graduation</Link></li>
//                 </ul>
//               </div>
//             </ul>

//             <form className="d-flex">
//               <button type="button" onClick={handleAuthToggle}>{isLoggedIn ? 'Logout' : 'Login'}</button>
//             </form>
//           </div>
//         </div>
//       </nav>
//       {!showLogin && !isLoggedIn && (
//         <div className="main-content">
//           {/* <Main/> */}
//         </div>
//       )}

//       {/* Display login form when 'Login' is clicked */}
//       {showLogin && !isLoggedIn && (
//         <AuthForm
//           setIsLoggedIn={setIsLoggedIn}
//           setUserData={setUserData}
//           setShowLogin={setShowLogin}  // Close login form after successful login
//         />
//       )}

//       {/* Display user info when logged in */}
//       {isLoggedIn && (
//         <div>
//           {/* <h1>Welcome to Our Website!</h1>
//           <p>Some important content here on the main page...</p> */}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Navbar;