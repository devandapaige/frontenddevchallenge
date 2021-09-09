import Logo from "../assets/nasa-logo-web-rgb.png"

export default function Header() {
  return (
    <div className="topHeader">
      <h1>NASA Photo of the Day</h1>
      <img src={Logo} alt="NASA logo" />
    </div>
  );
}
