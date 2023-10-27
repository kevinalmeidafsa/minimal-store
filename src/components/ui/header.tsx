"use client";

import {
  BadgeIcon,
  HomeIcon,
  ListIcon,
  LogInIcon,
  LogOutIcon,
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
import { sign } from "crypto";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Separator } from "./separator";

const Header = () => {
  const { status, data } = useSession();
  const handleLoginClick = async () => {
    await signIn();
  };
  const handleLogoutClick = async () => {
    await signOut();
  };

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
            {status === "authenticated" && data?.user && (
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>
                      {data.user.name?.[0].toUpperCase()}
                    </AvatarFallback>
                    {data.user.image && <AvatarImage src={data?.user.image} />}
                  </Avatar>
                  <div className="flex flex-col">
                    <p className="text-base font-medium capitalize">
                      {data.user.name}
                    </p>
                    <p className="text-xs opacity-60">{data.user.email}</p>
                  </div>
                </div>
                <Separator className="m-auto w-3/4" />
              </div>
            )}

            <div className=" mt-4 flex h-full w-full flex-col gap-3">
              {status === "unauthenticated" && (
                <Button
                  variant={"outline"}
                  onClick={handleLoginClick}
                  className="flex w-full items-center justify-start gap-3 rounded-lg"
                >
                  <User /> Fazer Login
                </Button>
              )}
              {status === "authenticated" && (
                <Button
                  onClick={handleLogoutClick}
                  variant={"outline"}
                  className="flex w-full items-center justify-start gap-3 rounded-lg"
                >
                  <LogOutIcon /> Logout
                </Button>
              )}
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
