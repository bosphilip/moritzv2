import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Navbar";
import Home from "./components/Home";
import BookingPanel from "./components/Booking";
import MasonryImageList from "./components/Gallery";
import MobileNav from "./components/MobileNav";
import Contact from "./components/Contact";
import ScrollToTop from "./ScrollToTop";
import About from "./components/About";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<div>
					<Nav />
					<MobileNav />
					<ScrollToTop></ScrollToTop>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/galerie" element={<MasonryImageList />} />
						<Route path="/uberuns" element={<About />} />
						<Route path="/kontakt" element={<Contact />} />
					</Routes>
					<BookingPanel></BookingPanel>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
