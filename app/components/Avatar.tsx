'use client'
import Image from "next/image";

interface AvatarProps {

   src: string | null | undefined
}


const Avatar: React.FC<AvatarProps> = ({
   src
}) => (
  <Image
    className="rounded-full"
    src={src || "/images/placeholder.jpg"}
    alt="Avatar"
    width={30}
    height={30}
  />
);

export default Avatar;
