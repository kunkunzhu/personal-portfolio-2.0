import React, { PropsWithChildren } from "react";
import { Nav } from "../nav/Nav";
import Footer from "../footer/footer";

interface AppLayoutProps extends PropsWithChildren {
  onThemeChange: (isDark: boolean) => void;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children, onThemeChange }) => {

    return (
      <>
        <Nav onThemeChange={onThemeChange}/>
        {children}
        {/* <Footer/> */}
      </>
    );
};

export default AppLayout