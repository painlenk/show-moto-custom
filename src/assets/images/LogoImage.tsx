import { memo } from "react";
import Image from "next/image";
import Logo from "./Logo.svg";

const LogoImage = () => {
  return <Image src={Logo} alt="Show Moto Custom" />;
};

export default memo(LogoImage);
