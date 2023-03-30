import '../styles/header.scss';
import { Link } from 'react-router-dom';
export default function Header() {
	return (
		<header>
			<Link to={"/"}>
			<div className="header-section-left">HRnet</div>
			</Link>
			<nav className="header-section-right"></nav>
		</header>
	);
}
