import React from 'react';
import logo from '../img/liverpool-logo.png';

const Navbar = () => {
	return (
		<nav className="navbar navbar-light">
		  <a href="/tienda/home.jsp">
			  <img src={logo} width="190" alt="Liverpool - Es parte de mi vida" title="Liverpool - es parte de mi vida" />
		  </a>
		</nav>
	)
}

export default Navbar;