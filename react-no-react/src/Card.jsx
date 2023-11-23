import React from "react";
import { decode } from "html-entities";

const Card = ({ link, title, excerpt, image }) => {
	return (
		<a href={link} class="card">
			<img src={image} class="card__image" alt="" />
			<div class="card__overlay">
				<div class="card__header">
					<div class="card__header-text">
						<h2 class="card__title">{decode(title)}</h2>
					</div>
				</div>
				<p class="card__description">
					{decode(excerpt?.replace(/(<([^>]+)>)/gi, ""))}
				</p>
			</div>
		</a>
	);
};

export default Card;
