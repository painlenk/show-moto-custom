import LogoImage from "../../assets/images/LogoImage";

export const Header = () => {
  return (
    <header>
      <LogoImage />
      <div>
        <ul>
          <li>News</li>
          <li>Calendar</li>
          <li>Contacts</li>
          <li>WorkShop</li>
        </ul>
      </div>

      <div>
        <ul>
          <li>Login</li>
          <li>Register</li>
        </ul>
      </div>
    </header>
  );
};
