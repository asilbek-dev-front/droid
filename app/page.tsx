import Image from 'next/image'
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
      <div className={'bg-white p-10 rounded-sm'}>
        <h1 className={"text-3xl font-semibold"}>Sign in</h1>

        <div className="grid w-96 max-w-sm items-center gap-1.5 my-5">
          <Label htmlFor="phoneNumber">Phone number</Label>
          <Input type="text" id="phoneNumber" placeholder="Phone number"/>
        </div>

        <div className="grid w-96 max-w-sm items-center gap-1.5 my-5">
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" placeholder="Password"/>
        </div>

        <div className={"flex justify-between"}>
          <Button className={"w-full mr-2"}>Sign in</Button>
          <Button className={"w-full ml-2"}>Register</Button>
        </div>
      </div>
    </main>
  )
}
