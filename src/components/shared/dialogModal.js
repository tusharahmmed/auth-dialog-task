import {Dialog, DialogContent, DialogTrigger} from "@/components/ui/dialog";

export function DialogModal({content, children}) {
  return (
    <Dialog>
      <DialogTrigger className="w-full">{children}</DialogTrigger>
      {/* sm:max-w-[425px] */}
      <DialogContent className="lg:max-w-[767px] xl:max-w-[1080px]  2xl:max-w-[1080px] h-[580px] rounded-[25px] bg-theme-white-light border-4 border-theme-gray shadow-[0px 0px 4px 0px rgba(129, 129, 129, 0.25)] p-0 flex-col">
        {content}
      </DialogContent>
    </Dialog>
  );
}
