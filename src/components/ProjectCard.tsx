"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";
import Link from "next/link";
import { Github, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

type TechStack = {
  id: string;
  name: string;
};

type Project = {
  id: string;
  title: string;
  webname: string;
  desc: string;
  image: string;
  techstack: TechStack[];
  github: string;
  link: string;
  createdAt: string;
};

export default function ProjectCard() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://json-server-one-ecru.vercel.app/projects"
        );
        const projects = await response.json();
        setProjects(projects);
      } catch (error) {
        console.error("Error fetching projects", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      {projects.map((project: Project) => (
        <Card className="border-none shadow-none" key={project.id}>
          <CardContent className="p-0 md:flex md:flex-row justify-between gap-3 lg:gap-8 grid grid-cols-1">
            <div className="w-full">
              <div className="flex flex-col space-y-2.5">
                <CardDescription>{project.webname}</CardDescription>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.desc}</CardDescription>
              </div>
              <div className="flex flex-wrap gap-2 mt-4 ">
                {project.techstack.map((tech) => (
                  <Badge
                    variant="secondary"
                    key={tech.id}
                    className="text-neutral-700 dark:text-neutral-100"
                  >
                    {tech.name}
                  </Badge>
                ))}
              </div>
              <CardFooter className="p-0 mt-6 flex items-center justify-between">
                <div>
                  <CardDescription className="text-xs">
                    {project.createdAt}
                  </CardDescription>
                </div>
                <div className="flex items-center gap-x-6">
                  {project.link && (
                    <Link href={project.link} target="_blank">
                      <CardDescription className="hover:underline">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <span className="text-xs flex items-center gap-x-1.5">
                                <Globe className="w-4 h-4" /> Visit page
                              </span>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>2 mins to load</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </CardDescription>
                    </Link>
                  )}
                  <Link href={project.github} target="_blank">
                    <CardDescription className="text-xs flex items-center gap-x-1.5 hover:underline">
                      <Github className="w-4 h-4" /> Visit github repo
                    </CardDescription>
                  </Link>
                </div>
              </CardFooter>
            </div>
            <div>
              <Image
                src={project.image}
                alt={project.webname}
                width={250}
                height={300}
                className="w-full lg:w-auto"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </CardContent>
          <Separator className="mt-7 bg-neutral-200 dark:bg-neutral-800" />
        </Card>
      ))}
    </>
  );
}
