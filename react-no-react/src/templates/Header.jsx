import React from "react";
import "../scss/header.scss";

const Header = () => {
	return (
		<header class="header">
			<div class="header__inner responsive-wrapper">
				<div class="header__logo">
					<img src="https://avatars.githubusercontent.com/u/54891099?v=4" />
					<a href="https://github.com/Mukulsingh27">
						<h3>mukulsingh.dev</h3>
					</a>
				</div>
				<nav class="header-navigation">
					<a href="#">Home</a>
					<a href="#">About</a>
					<a href="#">Blog</a>
					<a href="#">Contact Us</a>
					<button>Menu</button>
				</nav>
			</div>
		</header>
	);
};

export default Header;
