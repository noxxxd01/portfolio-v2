"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { useTheme } from "next-themes";
import { Separator } from "./ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Github, Linkedin, Moon, Sun } from "lucide-react";
import Contact from "./Drawer";
import { useEffect, useState } from "react";

export default function Navigation() {
  const { setTheme } = useTheme();
  const [isActive, setIsActive] = useState("projects");

  useEffect(() => {
    setIsActive(isActive);
  });

  return (
    <div className="flex flex-col gap-y-10">
      <Card className="border-none shadow-none lg:hidden">
        <CardContent className="p-0 flex flex-row items-center gap-5">
          <div>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex flex-col gap-y-1">
            <CardTitle className="text-2xl font-semibold">Mikko</CardTitle>
            <CardDescription>lumpotmikko1@gmail.com</CardDescription>
          </div>
        </CardContent>
        <CardFooter className="flex items-center gap-x-2 p-0 mt-6">
          <Contact />
          <Link href="https://github.com/noxxxd01" target="_blank">
            <Button variant="outline" size="sm">
              <Github className="w-4 h-4" />
            </Button>
          </Link>
          <Link
            href="https://www.linkedin.com/in/mikko-lumpot-64204831a/"
            target="_blank"
          >
            <Button variant="outline" size="sm">
              <Linkedin className="w-4 h-4" />
            </Button>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardFooter>
      </Card>
      <Card className="border-none shadow-none hidden lg:block">
        <CardHeader className="p-0">
          <CardTitle className="text-4xl font-semibold">Mikko Lumpot</CardTitle>
        </CardHeader>
      </Card>
      <Card className="border-none shadow-none">
        <CardContent className="p-0 flex items-center gap-4">
          <Link href="/">
            <Button
              variant="link"
              onClick={() => setIsActive("projects")}
              className={`p-0 hover:no-underline ${
                isActive === "projects"
                  ? "border-b-neutral-400 border-b-[1px]"
                  : ""
              }`}
            >
              <CardDescription>Projects</CardDescription>
            </Button>
          </Link>
          <Link href="/about">
            <Button
              variant="link"
              onClick={() => setIsActive("about")}
              className={`p-0 hover:no-underline ${
                isActive === "about"
                  ? "border-b-neutral-400 border-b-[1px]"
                  : ""
              }`}
            >
              <CardDescription>About</CardDescription>
            </Button>
          </Link>
        </CardContent>
        <Separator className="bg-neutral-200 dark:bg-neutral-800" />
      </Card>
    </div>
  );
}
