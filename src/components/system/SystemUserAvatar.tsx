import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

type SystemUserAvatarProps = {
  image?: string;
  alt?: string;
};

const SystemUserAvatar = ({ image, alt }: SystemUserAvatarProps) => {
  return (
    <Avatar>
      <AvatarImage src={image} alt={alt || "user-avatar"} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default SystemUserAvatar;
