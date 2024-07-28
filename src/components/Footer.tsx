import React from "react";
import { Card, CardContent, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <Card className="border-none shadow-none py-5">
      <CardContent className="p-0 flex items-center justify-between">
        <div>
          <CardTitle>
            <svg
              width="30"
              height="30"
              viewBox="0 0 81 81"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.4529 15.2097L0 27.6626L12.4529 40.1155L24.9058 27.6626L12.4529 15.2097Z"
                fill="#414042"
              />
              <path
                d="M12.4689 15.1995C15.7702 18.502 17.6248 22.9805 17.6248 27.6501C17.6248 32.3198 15.7702 36.7983 12.4689 40.1008L0.0112 52.5445L12.4689 65.0021L37.3841 40.1008L12.4689 15.1995Z"
                fill="url(#paint0_linear_16_23)"
              />
              <path
                d="M67.7534 65.0291L80.206 52.5762L67.7534 40.1233L55.3005 52.5762L67.7534 65.0291Z"
                fill="#414042"
              />
              <path
                d="M55.3025 52.5724L67.7602 65.0161C64.4588 61.7136 62.6043 57.2351 62.6043 52.5654C62.6043 47.8958 64.4588 43.4173 67.7602 40.1148L80.218 27.6571L67.7602 15.1995L42.8589 40.1148L55.3025 52.5724Z"
                fill="url(#paint1_linear_16_23)"
              />
              <path
                d="M15.2087 67.7671L27.6616 80.22L40.1145 67.7671L27.6616 55.3141L15.2087 67.7671Z"
                fill="#414042"
              />
              <path
                d="M15.2061 67.7531C18.5086 64.4518 22.987 62.5972 27.6567 62.5972C32.3263 62.5972 36.8048 64.4518 40.1073 67.7531L52.5511 80.211L65.0087 67.7531L40.1073 42.8518L15.2061 67.7531Z"
                fill="url(#paint2_linear_16_23)"
              />
              <path
                d="M65.0287 12.453L52.5757 0L40.1228 12.4529L52.5757 24.9059L65.0287 12.453Z"
                fill="#414042"
              />
              <path
                d="M65.0227 12.4621C61.7201 15.7634 57.2416 17.618 52.572 17.618C47.9023 17.618 43.4239 15.7634 40.1213 12.4621L27.6637 0.00440025L15.2061 12.4621L40.1213 37.3774L65.0227 12.4621Z"
                fill="url(#paint3_linear_16_23)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_16_23"
                  x1="39.8393"
                  y1="76.9357"
                  x2="40.2106"
                  y2="7.53456"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#414042" />
                  <stop offset="1" stop-color="#E6E7E8" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_16_23"
                  x1="315130"
                  y1="30301.5"
                  x2="315112"
                  y2="32776.3"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#414042" />
                  <stop offset="1" stop-color="#E6E7E8" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_16_23"
                  x1="152343"
                  y1="243169"
                  x2="150486"
                  y2="243162"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#414042" />
                  <stop offset="1" stop-color="#E6E7E8" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_16_23"
                  x1="77140.6"
                  y1="-58646"
                  x2="78293.6"
                  y2="-58639.8"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#414042" />
                  <stop offset="1" stop-color="#E6E7E8" />
                </linearGradient>
              </defs>
            </svg>
          </CardTitle>
        </div>
        <div className="gap-x-2 flex items-center">
          <Link href="https://github.com/noxxxd01" target="_blank">
            <Button variant="outline" size="sm">
              <Github className="w-4 h-4" />
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/mikko-lumpot" target="_blank">
            <Button variant="outline" size="sm">
              <Linkedin className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
