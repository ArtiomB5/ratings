import { Footer } from "./Footer";
import { Header } from "./Header";
import { ILayoutProps } from "./Layout.props";
import { Sidebar } from "./Sidebar";

export const Layout = ({ children }: ILayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
        <div>{children}</div>
      </div>
      <Footer />
    </>
  );
};
