import { memo } from "react";
import Image from "next/image";
import Logo from "./Logo.svg";
import Link from "next/link";

const LogoImage = () => {
  return (
    <Link href="/">
      <a>
        <Image src={Logo} alt="Show Moto Custom" />
      </a>
    </Link>
  );
};

export default memo(LogoImage);
