import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MapPin } from "lucide-react";

import Image from "next/image";

export default function Education() {
  return (
    <div className="flex flex-col gap-y-4">
      <Card className=" dark:border-neutral-900">
        <CardHeader>
          <CardTitle className="text-xl">Education</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-y-5">
          <div className="flex items-center gap-x-3">
            <div className="mb-auto">
              <Image
                src="https://media.licdn.com/dms/image/C510BAQGaDmr7LgLTSA/company-logo_100_100/0/1630608848953?e=1729728000&v=beta&t=ecE-IB9eABpuLpD1aUXK_W_CEtWvGD4ISVdicHdoLe0"
                alt=""
                width={50}
                height={50}
              />
            </div>
            <div>
              <CardTitle className="text-md">STI College</CardTitle>
              <CardDescription className="flex flex-col">
                <span>Bachelor of Science - BS, Computer Engineering</span>
                <div className="mt-2 text-xs grid grid-cols-1 md:flex items-center gap-2 md:gap-5">
                  <span>Sep 2019 - Jul 2023</span>
                  <span className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" /> Surigao City,
                    Philippines
                  </span>
                </div>
              </CardDescription>
            </div>
          </div>
          <Separator className="bg-neutral-100 dark:bg-neutral-900" />
          <div className="flex items-center gap-x-3">
            <div className="mb-auto">
              <Image
                src="https://media.licdn.com/dms/image/C510BAQGaDmr7LgLTSA/company-logo_100_100/0/1630608848953?e=1729728000&v=beta&t=ecE-IB9eABpuLpD1aUXK_W_CEtWvGD4ISVdicHdoLe0"
                alt=""
                width={50}
                height={50}
              />
            </div>
            <div>
              <CardTitle className="text-md">STI College | SHS</CardTitle>
              <CardDescription className="flex flex-col">
                <span>ICT - Information Communication Technology</span>
                <div className="mt-2 text-xs grid grid-cols-1 md:flex items-center gap-2 md:gap-5">
                  <span>Sep 2019 - Jul 2023</span>
                  <span className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" /> Surigao City,
                    Philippines
                  </span>
                </div>
              </CardDescription>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
