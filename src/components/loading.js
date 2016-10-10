import React from 'react';

/**
 * Shows the loading spinner animation.
 * @returns {React$Element}
**/
const Loading = () => {
	return (
		<div className="loader-wrapper">
		    <div className="loader"></div>
		    <img className="logo-img" src="../../images/logo.png" />
		</div>
	);
}

export default Loading;