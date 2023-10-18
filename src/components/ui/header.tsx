import {
  BadgeIcon,
  LogInIcon,
  MenuIcon,
  ShoppingBagIcon,
  User,
} from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <Card className="flex items-center justify-between p-4">
        <Button variant="ghost" size="icon">
          <MenuIcon size={24} />
        </Button>
        <h1>
          <Image src="/vercel.svg" alt="Logo" width={120} height={40} />
        </h1>
        <Button variant="ghost" size="icon">
          <ShoppingBagIcon size={24} />
        </Button>
      </Card>
    </div>
  );
};

export default Header;
