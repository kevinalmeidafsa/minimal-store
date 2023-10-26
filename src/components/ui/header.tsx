import {
  BadgeIcon,
  HomeIcon,
  ListIcon,
  LogInIcon,
  MenuIcon,
  PercentCircleIcon,
  ShoppingBagIcon,
  User,
  X,
} from "lucide-react";
import { ModeToggle } from "../ButtonTheme";
import { Button } from "./button";
import { Card } from "./card";
import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";

const Header = () => {
  return (
    <div>
      <Card className="flex items-center justify-between p-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <MenuIcon size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent className="flex flex-col justify-between" side={"left"}>
            <SheetHeader className="text-left text-lg font-semibold">
              Menu
            </SheetHeader>
            <div className=" mt-4 flex h-full w-full flex-col gap-3">
              <Button
                variant={"outline"}
                className="flex w-full items-center justify-start gap-3 rounded-lg"
              >
                <User /> Fazer Login
              </Button>
              <Button
                variant={"outline"}
                className="flex w-full items-center justify-start gap-3 rounded-lg"
              >
                <HomeIcon /> Inicio
              </Button>
              <Button
                variant={"outline"}
                className="flex w-full items-center justify-start gap-3 rounded-lg"
              >
                <PercentCircleIcon /> Ofertas
              </Button>
              <Button
                variant={"outline"}
                className="flex w-full items-center justify-start gap-3 rounded-lg"
              >
                <ListIcon /> Catálogo
              </Button>
            </div>
            <SheetFooter className="items-end ">
              <ModeToggle />
            </SheetFooter>
          </SheetContent>
        </Sheet>

        <h1 className="text-2xl uppercase tracking-widest text-black dark:text-white">
          Minimal
        </h1>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <ShoppingBagIcon size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent side={"right"}>
            <SheetHeader>Carrinho</SheetHeader>
          </SheetContent>
        </Sheet>
      </Card>
    </div>
  );
};

export default Header;
