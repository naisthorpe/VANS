// import React from 'react';
// import ReactDOM from 'react-dom';
// import Categories from '../components/Categories';
// import Footer from '../components/Footer';
// import pic from "../img/pic.png";

// export default function Home(props) {

// 	return (
// 		<div
// 			id="about-container"
// 			className="content-containers container text-center mt-5"
// 		>
// 			<h1 id="about" >
// 				Video Audio Networking Service
// 			</h1>

// 			<div className="row" style={{ marginTop: 7 + "rem" }}>
// 				<div className="col-12 col-lg-6 hidden">
// 					<img
// 						className={"img-fluid "}
// 						src={pic}
// 						alt=""
// 						style={{
// 							height: 750 + "px",
// 							width: 750 + "px"
// 						}}
// 					/>

// 				</div>
// 				<div
// 					className={"col-12 col-sm-12 col-md-12 col-lg-6 "}>
// 					Lorem ipsum dolor sit amet, mea veniam tritani tibique at.
// 					Debet quando te nec, quo eu nisl nullam cotidieque.
// 					Omnes persequeris voluptatibus eum ex, error primis singulis quo id.
// 					Ne his ipsum inani, choro consulatu interesset ius id. Sit lobortis intellegam ad.
// 					Ad simul maluisset argumentum cum, ad adhuc possim interesset usu, saepe platonem
// 					quaerendum id sed.

// 				</div>

// 				<Categories />
// 				<Footer />

// 			</div>

// 		</div>

// 	);
// };














import React from "react";
import { Container } from "semantic-ui-react";
import Categories from '../components/Categories';
import Footer from '../components/Footer';

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

const App = () => (

	<Container style={{ margin: 20 }}>
		<Categories />
	</Container >

);

export default App;