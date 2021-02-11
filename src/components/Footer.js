import React from 'react';

const footer = props => {
	return (
		<footer className="footer">
			<div className="footer__wrap">
				<p className="footer__copyright">
                    <span>All rights reserved | Created by </span> 
					<a className="footer__copyright-link" href="https://www.facebook.com/pronassar" target="_blank" rel="noopener noreferrer">Mohamed Nassar</a>
				</p>
			</div>
		</footer>
	);
}

export default footer;