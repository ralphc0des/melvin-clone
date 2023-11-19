import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/component/ui/avatar";

const LocalAvatar = () => {
  return (
    <div>
      <Avatar className="h-10 w-10 ">
        <AvatarImage
          src="https://github.com/shadcn.png"
          alt="@shadcn"
          className="rounded-full"
        />
        <AvatarFallback>Melvin</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default LocalAvatar;
