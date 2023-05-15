import React, { PropsWithChildren } from "react";
import Nav from "../nav/Nav";
// import Footer from "../footer/footer";

const AppLayout = ({ children }: PropsWithChildren) => {
    return (
      <>
        <Nav />
        {children}
        {/* <Footer/> */}
      </>
    );
};

export default AppLayout