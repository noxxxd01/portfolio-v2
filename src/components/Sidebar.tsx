"use client";

import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Github, Linkedin, Moon, Sun } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { useTheme } from "next-themes";
import Link from "next/link";
import Contact from "./Drawer";

export default function Sidebar() {
  const { setTheme } = useTheme();

  return (
    <div className="py-[4rem]">
      <Card className="border-none shadow-none">
        <CardContent className="py-0">
          <Avatar className="w-24 h-24">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </CardContent>
      </Card>
      <div>
        <Card className="border-none shadow-none">
          <CardHeader>
            <CardTitle>Mikko</CardTitle>
            <CardDescription>Web Developer & Data Scientist</CardDescription>
          </CardHeader>
        </Card>
        <Card className="border-none shadow-none">
          <CardContent className="flex items-center gap-x-2">
            <Contact />
            <Link href="https://github.com/noxxxd01" target="_blank">
              <Button size="sm">
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
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
