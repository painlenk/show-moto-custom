import LogoImage from "../../assets/images/LogoImage";

export const Header = () => {
  return (
    <header>
      <LogoImage />
      <div>
        <ul>
          <li>Home</li>
          <li>News</li>
          <li>Contacts</li>
          <li>Calendar</li>
        </ul>
      </div>

      <div>
        <ul>
          <li>Login</li>
          <li>register</li>
        </ul>
      </div>
    </header>
  );
};
