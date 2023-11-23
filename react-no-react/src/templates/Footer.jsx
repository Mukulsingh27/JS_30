import React from "react";
import "../scss/footer.scss";

const Footer = () => {
	return (
		<footer class="footer">
			<div class="footer__logo">
				<img src="https://avatars.githubusercontent.com/u/54891099?v=4" />
				<a href="#">mukulsingh.dev</a>
			</div>
			<ul class="footer__menu">
				<li class="footer__menu-item">
					<a class="footer__menu-link" href="#">
						Home
					</a>
				</li>
				<li class="footer__menu-item">
					<a class="footer__menu-link" href="#">
						About
					</a>
				</li>
				<li class="footer__menu-item">
					<a class="footer__menu-link" href="#">
						Blog
					</a>
				</li>
				<li class="footer__menu-item">
					<a class="footer__menu-link" href="#">
						Contact
					</a>
				</li>
			</ul>
			<p>
				{`© ${new Date().getFullYear()} Mukul Singh | All Rights Reserved ❤️`}
			</p>
		</footer>
	);
};

export default Footer;
