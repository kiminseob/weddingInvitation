import { styled } from "@mui/material";
import { animated } from "@react-spring/web";

export const Wrapper = styled("div", {
  shouldForwardProp: (props) => props !== "width" && props !== "height",
})<{ width: number; height: number }>(({ theme, width, height }) => ({
  width,
  height,
  backgroundColor: theme.palette.primary.dark,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const AnimatedDiv = styled(animated.div)({
  position: "relative",
  zIndex: 0,
});
