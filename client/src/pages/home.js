import React from 'react';
import PropTypes from "prop-types";
import pic from "../img/pic.png";

// const Home = (props) => {
//   return <div>WE ARE LOGGED IN</div>;
// };

// Home.propTypes = {};

// export default Home;
export default class About extends React.Component {
	render() {
		return (
			<div
				id="about-container"
				className="content-containers container text-center mt-5">
				<h1 id="about" className={this.props.bounceLeft}>
        Video Audio Networking Service
				</h1>
				

				<div className="row" style={{ marginTop: 7 + "rem" }}>
					<div className="col-12 col-lg-6 hidden">
						<img
							className={"img-fluid " + this.props.fadeIn}
							src={pic}
							alt=""
							style={{
								height: 750 + "px",
								width: 750 + "px"
							}}
						/>
					
					</div>
					<div
						className={"col-12 col-sm-12 col-md-12 col-lg-6 " + this.props.fadeIn}>
						Lorem ipsum dolor sit amet, mea veniam tritani tibique at.
             Debet quando te nec, quo eu nisl nullam cotidieque. 
             Omnes persequeris voluptatibus eum ex, error primis singulis quo id. 
             Ne his ipsum inani, choro consulatu interesset ius id. Sit lobortis intellegam ad.
              Ad simul maluisset argumentum cum, ad adhuc possim interesset usu, saepe platonem 
              quaerendum id sed.
						
					</div>
				</div>
			</div>
		);
  }
  
}

About.propTypes = {
	bounceLeft: PropTypes.string,
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
	tada: PropTypes.string
};