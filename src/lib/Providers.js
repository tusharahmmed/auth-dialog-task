"use client";

import {poppins, roboto} from "@/fonts/fonts";
import {store} from "@/rtk/store";
import {Provider} from "react-redux";

const Providers = ({children}) => {
  return (
    <Provider store={store}>
      <div className={`${poppins.variable} ${roboto.variable}`}>{children}</div>
    </Provider>
  );
};

export default Providers;
