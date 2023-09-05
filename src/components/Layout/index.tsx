import { PropsWithChildren } from "react";
import * as S from "./styled";
import Header from "./Header";
import Main from "./Main";

const Layout = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <S.Layout direction="column" alignItems="center">
      <Header />
      <Main>{children}</Main>
    </S.Layout>
  );
};

export default Layout;
