// import { Fragment } from "react";
// import "./App.css";
// import { ReactComponent as FavT } from "./assets/favt.svg";
// import { ReactComponent as FavF } from "./assets/favf.svg";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Header } from "./pages/shared/Header";
import { Landing } from "./pages/landing/Landing";
import { HomePage } from "./pages/homepage/HomePage";
import { SignIn } from "./pages/sign-pages/SignIn";
import { SignUp } from "./pages/sign-pages/SignUp";
import { Details } from "./pages/details/Details";
import { Favorites } from "./pages/favorites/Favorites";

// import img from "./assets/background.jpg";

// import pizza from "./assets/pizza.jpg";
// function App() {
//   return (
//     <Fragment>

//       <main>
//         <section className="landing">
//           <div className="overlay"></div>
//           <div className="text">
//             <h1>Welcome to Reactaurant</h1>
//             <p>
//               Discover the best restaurants in Paris on Reactaurant! Order food
//               delivery and takeout from places to eat in location near you.
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae,
//               ad aliquam! Adipisci deserunt est, quam at, dicta veniam ipsa,
//               voluptates mollitia excepturi nihil nemo! Obcaecati earum
//               cupiditate modi. Eos, officia?
//             </p>
//           </div>
//         </section>
//       </main>
//       {/* <header className="main-header">
//         <div className="container header-container">
//           <div className="logo">Reactaurant</div>
//           <nav className="nav">
//             <ul className="nav-links">
//               <li className="sign-in head-btn">Sign In</li>
//               <li className="sign-up head-btn">Sign Up</li>
//             </ul>
//           </nav>
//         </div>
//       </header>

//       <main>
//         <section className="landing">
//           <div className="overlay"></div>
//           <div className="text">
//             <h1>Welcome to Reactaurant</h1>
//             <p>
//               Discover the best restaurants in Paris on Reactaurant! Order food
//               delivery and takeout from places to eat in location near you.
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae,
//               ad aliquam! Adipisci deserunt est, quam at, dicta veniam ipsa,
//               voluptates mollitia excepturi nihil nemo! Obcaecati earum
//               cupiditate modi. Eos, officia?
//             </p>
//           </div>
//         </section>
//       </main> */}

//       {/* <header className="sign-header">
//         <div className="container">
//           <div className="logo">Reactaurant</div>
//           <nav className="nav">
//             <ul className="nav-links">
//               <li className="favorite head-btn">Favorites</li>
//               <li className="sign-out head-btn">Sign out</li>
//             </ul>
//           </nav>
//         </div>
//       </header> */}
//       {/* <section className="sign-in-page sign-page">
//         <div className="container">
//           <div className="content">
//             <h2>Write your email and password</h2>
//             <form>
//               <input type="email" required placeholder="Enter your email" />
//               <input
//                 type="password"
//                 required
//                 placeholder="Enter your password"
//               />
//               <button type="submit">Sign in</button>
//             </form>
//             <div className="sign-in-options">or</div>
//             <div className="google-sign-in">
//               <GoogleLogo />
//               <p>Continue with Google</p>
//             </div>
//             <div className="disclaimer">
//               <p>
//                 By sign in you agree that we will use your data in how ever we'd
//                 like to
//               </p>
//             </div>
//           </div>
//         </div>
//       </section> */}

//       {/* <section className="sign-up-page sign-page">
//         <div className="container">
//           <div className="content">
//             <form>
//               <label>User</label>
//               <input type="text" required placeholder="Enter your username" />

//               <label>Email</label>
//               <input type="email" required placeholder="Enter your email" />

//               <label>Password</label>
//               <input
//                 type="password"
//                 required
//                 placeholder="Enter your password"
//               />

//               <label>Confirm Password</label>
//               <input
//                 type="password"
//                 required
//                 placeholder="Confirm your Password"
//               />
//               <button type="submit">Sign up</button>
//             </form>
//             <div className="sign-in-options">or</div>
//             <div className="google-sign-in">
//               <GoogleLogo />
//               <p>Continue with Google</p>
//             </div>
//             <div className="disclaimer">
//               <p>
//                 By signing up you agree that we will use your data in how ever
//                 we'd like to
//               </p>
//             </div>
//           </div>
//         </div>
//       </section> */}

//       {/* <section className="home">
//         <div className="container">
//           <h2>Reastaurants</h2>
//           <div className="cards-container">
//             <div className="card">
//               <div className="fav">
//                 <FavT />
//               </div>
//               <img src={img} alt="restaurant" />
//               <div className="text">
//                 <h3>title</h3>
//                 <p>description</p>
//               </div>
//             </div>

//             <div className="card">
//               <img src={img} alt="restaurant" />
//               <div className="text">
//                 <h3>title</h3>
//                 <p>description</p>
//               </div>
//             </div>

//             <div className="card">
//               <img src={img} alt="restaurant" />
//               <div className="text">
//                 <h3>title</h3>
//                 <p>description</p>
//               </div>
//             </div>

//             <div className="card">
//               <img src={img} alt="restaurant" />
//               <div className="text">
//                 <h3>title</h3>
//                 <p>description</p>
//               </div>
//             </div>

//             <div className="card">
//               <img src={img} alt="restaurant" />
//               <div className="text">
//                 <h3>title</h3>
//                 <p>description</p>
//               </div>
//             </div>

//             <div className="card">
//               <img src={img} alt="restaurant" />
//               <div className="text">
//                 <h3>title</h3>
//                 <p>description</p>
//               </div>
//             </div>

//             <div className="card">
//               <img src={img} alt="restaurant" />
//               <div className="text">
//                 <h3>title</h3>
//                 <p>description</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section> */}
// {/*
//       <section className="detail">
//         <div className="container">
//           <div className="content">
//             <div className="image">
//               <img src={img} alt="" />
//             </div>
//             <div className="description">
//               <ul className="labels">
//                 <li>Name</li>
//                 <li>Adress</li>
//               </ul>

//               <ul className="text">
//                 <li>restaurant</li>
//                 <li>
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
//                   voluptates tenetur officiis voluptatum laborum possimus
//                   doloremque dolor reiciendis porro error rerum id iste veniam
//                   voluptas modi facilis. Consequatur, culpa reprehenderit!
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <div className="menu">
//             <h2>Menu</h2>
//             <div className="menu-content">
//               <h3>entrees</h3>
//               <div className="foods">
//                 <div className="card">
//                   <img src={pizza} alt="" />
//                   <p>Entree 1</p>
//                   <span>300 euro</span>
//                 </div>
//                 <div className="card">
//                   <img src={pizza} alt="" />
//                   <p>Entree 1</p>
//                   <span>300 euro</span>
//                 </div>
//               </div>
//             </div>

//             <div className="menu-content">
//               <h3>entrees</h3>
//               <div className="foods">
//                 <div className="card">
//                   <img src={pizza} alt="" />
//                   <p>Entree 1</p>
//                   <span>300 euro</span>
//                 </div>
//                 <div className="card">
//                   <img src={pizza} alt="" />
//                   <p>Entree 1</p>
//                   <span>300 euro</span>
//                 </div>
//               </div>
//             </div>

//             <div className="menu-content">
//               <h3>entrees</h3>
//               <div className="foods">
//                 <div className="card">
//                   <img src={pizza} alt="" />
//                   <p>Entree 1</p>
//                   <span>300 euro</span>
//                 </div>
//                 <div className="card">
//                   <img src={pizza} alt="" />
//                   <p>Entree 1</p>
//                   <span>300 euro</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section> */}

//     </Fragment>
//   );
// }

// export default App;

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Landing />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/details" element={<Details />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>
    </Routes>
  );
};

export default App;
