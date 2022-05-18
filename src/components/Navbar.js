import world from "../images/world.png"
export default function Navbar() {
	return (
		<div className="navbar">
			<img className="navbar--img" src={world} alt="world" />
            <h4 className="navbar--title">my travel journal</h4>
		</div>
	);
}
