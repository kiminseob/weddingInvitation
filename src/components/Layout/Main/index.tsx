import { PropsWithChildren } from "react";
import * as S from "./styled";

const Main = (props: PropsWithChildren) => {
  const { children } = props;

  return <S.Main>{children}</S.Main>;
};

export default Main;
