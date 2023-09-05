import { useSpring } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import * as S from "./styled";

const bounds = { left: -100, right: 100, top: -50, bottom: 50 };
const img = {
  width: 256,
  height: 256,
  backgroundImage: `url(./assets/profile2.jpeg)`,
  backgroundSize: "256px 256px",
};

const Cards = () => {
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));
  const bind = useDrag(
    ({ offset: [x, y], movement: [mx, my], down }) => {
      api.start({ x, y, immediate: down });
    },
    {
      bounds,
      rubberband: true,
      threshold: 10,
      delay: 500,
    }
  );
  return (
    <S.Wrapper
      width={Math.abs(bounds.left) + bounds.right + img.width}
      height={Math.abs(bounds.top) + bounds.bottom + img.height}
    >
      <S.AnimatedDiv {...bind()} style={{ x, y, ...img }} />
    </S.Wrapper>
  );
};

export default Cards;
