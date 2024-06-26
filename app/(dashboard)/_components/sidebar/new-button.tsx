"use client";

import { Plus } from "lucide-react";
import { CreateOrganization } from "@clerk/nextjs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Hint } from "@/components/hint";

export const NewButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-square">
          <Hint
            label={"Create organization"}
            side={"right"}
            align={"start"}
            sideOffset={14}
          >
            <button className="bg-white/25 h-full w-full rouned-md flex items-center justify-center opacity-60 hover:opacity-100 transition">
              <Plus size={24} className={"text-white"} />
            </button>
          </Hint>
        </div>
      </DialogTrigger>
      <DialogContent className="p-0 bg-white bg-transparent border-none max-w-[480px] shadow-none">
        <CreateOrganization />
      </DialogContent>
    </Dialog>
  );
};
