import { Navigation, Header, Main } from "@/modules/layout";

type Props = {
  children: React.ReactNode;
  title?: string;
};

export const Layout: React.FC<Props> = ({ children, title }) => {
  return (
    <>
      <Navigation />
      <Header title={title} />
      <Main component="main">{children}</Main>
    </>
  );
};
