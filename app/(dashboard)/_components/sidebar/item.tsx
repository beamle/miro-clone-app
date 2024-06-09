"use client";
import { cn } from "@/lib/utils";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import Image from "next/image";
import { Hint } from "@/components/hint";

interface ItemProps {
  id: string;
  name: string;
  imageUrl: string;
}

const Item = ({ id, name, imageUrl }: ItemProps) => {
  const { organization } = useOrganization();
  const { setActive } = useOrganizationList();
  const isActive = organization?.id === id;

  const handleClick = () => {
    if (!setActive) return;

    setActive({ organization: id });
  };

  return (
    <div className={"aspect-square relative"}>
      <Hint label={name} side={"right"} align={"start"} sideOffset={14}>
        <Image
          alt={name}
          src={imageUrl}
          layout={"fill"}
          objectFit={"cover"}
          className={cn(
            "rouned-md cursor-pointer opacity-75 hover:opacity-100 transition",
            isActive && "opacity-100", // cn allows to use isActive here like that
          )}
        />
      </Hint>
    </div>
  );
};

export default Item;
