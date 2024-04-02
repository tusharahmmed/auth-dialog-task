import {DialogModal} from "@/components/shared/dialogModal";

export default function HomePage() {
  return (
    <div className="bg-theme-blue pb-6">
      <DialogModal>
        <h1 className="w-full font-poppins text-lg xl:text-2xl 2xl:text-4xl 3xl:text-4xl text-center text-[#FFB606]">
          Home Page
        </h1>
      </DialogModal>
    </div>
  );
}
