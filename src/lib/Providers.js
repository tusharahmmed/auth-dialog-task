import {poppins, roboto} from "@/fonts/fonts";

const Providers = ({children}) => {
  return (
    <div className={`${poppins.variable} ${roboto.variable}`}>{children}</div>
  );
};

export default Providers;
