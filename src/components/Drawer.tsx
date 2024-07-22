import React from "react";
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
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "./ui/drawer";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { ToastAction } from "./ui/toast";
import { toast } from "./ui/use-toast";

const Contact: React.FC = () => {
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    formData.append("access_key", "34f995ee-f735-4e99-9361-5f05bacb7dc3");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast({
          description: "Your message has been sent.",
        });
        form.reset();
      } else {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
        console.log("Error", data);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Network Error",
        description: "Failed to send the message. Please try again.",
      });
      console.log("Error", error);
    }
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" size="sm" className="w-full lg:w-initial">
          Hit me up
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <Card className="border-none shadow-none w-full lg:w-[40rem] mx-auto">
          <CardHeader className="text-center">
            <CardTitle>Hit me up</CardTitle>
            <CardDescription>Drop a message below</CardDescription>
          </CardHeader>
          <form onSubmit={onSubmit}>
            <CardContent>
              <div className="flex flex-col gap-y-4">
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input type="text" name="name" required />
                </div>
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input type="email" name="email" required />
                </div>
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    name="message"
                    placeholder="Type your message here."
                    required
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button size="sm" className="w-full" type="submit">
                Send
              </Button>
            </CardFooter>
          </form>
        </Card>
        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Contact;
