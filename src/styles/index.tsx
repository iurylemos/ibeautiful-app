import styled from "styled-components/native";
import themeConfig from "../config/theme.config";
import { ImageBackground } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import {
  Text as TextPaper,
  Title as TitlePaper,
  Badge as BadgerPaper,
  Button as ButtonPaper,
  TextInput as TextInputPaper,
} from "react-native-paper";
import { DefaultColors } from "../interfaces/defaultColors.interface";
import { Dimensions } from "react-native";
import colorsUtil from "../utils/colors.util";

type CoverProps = {
  width?: string;
  height?: string;
  spacing?: string;
  circle?: string;
  border?: string;
};

type LinearGradientProps = {
  colors: string[];
  hasPadding?: boolean;
  justify?: string;
};

type BadgeProps = {
  color?: DefaultColors;
};

type TitleProps = {
  color?: DefaultColors;
  small?: boolean;
  hasPadding?: boolean;
  align?: string;
};

type TextProps = {
  color?: DefaultColors;
  small?: boolean;
  bold?: boolean;
  spacing?: string;
  hasPadding?: boolean;
};

type BoxProps = {
  wrap?: string;
  direction?: string;
  justify?: string;
  align?: string;
  width?: string;
  height?: string;
  hasPadding?: boolean;
  removePaddingBottom?: boolean;
  spacing?: string;
  radius?: string;
  colors?: DefaultColors;
  background?: string;
};

type TouchableProps = {
  direction?: string;
  justify?: string;
  align?: string;
  width?: string;
  height?: string;
  hasPadding?: boolean;
  spacing?: string;
  background?: string;
  rounded?: string;
  border?: string;
};

type ButtonProps = {
  background: string;
  block?: boolean;
  textColor?: string;
};

export const Cover = styled(ImageBackground)<CoverProps>`
  width: ${(props: CoverProps) => props.width || "60px"};
  height: ${(props: CoverProps) => props.height || "70px"};
  margin: ${(props: CoverProps) => props.spacing || "0 10px 0 0"};
  border-radius: ${(props: CoverProps) => (props.circle ? props.width : "3px")};
  border: ${(props: CoverProps) => props.border || "none"};
  background-color: ${themeConfig.colors.muted};
`;

export const GradientView = styled(LinearGradient)<LinearGradientProps>`
  flex: 1;
  padding: ${(props) => (props.hasPadding ? "20px" : "0px")};
  justify-content: ${(props) => props.justify || "flex-start"};
`;

export const Badge = styled(BadgerPaper)<BadgeProps>`
  align-self: flex-start;
  font-size: 16px;
  width: auto;
  height: auto;
  padding: 5px 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  background: ${(props) => themeConfig.colors[props.color || "danger"]};
`;

export const Title = styled(TitlePaper)<TitleProps>`
  color: ${(props) => themeConfig.colors[props.color || "dark"]};
  font-size: ${(props) => (props.small ? "22px" : "30px")};
  padding: ${(props) => (props.hasPadding ? "20px" : "0px")};
  letter-spacing: -0.8px;
  line-height: ${(props) => (props.small ? "22px" : "30px")};
  text-align: ${(props) => props.align || "left"};
`;

export const Text = styled(TextPaper)<TextProps>`
  color: ${(props) => themeConfig.colors[props.color || "muted"]};
  font-size: ${(props) => (props.small ? "13px" : "17px")};
  font-family: ${(props) => (props.bold ? "Ubuntu-Bold" : "Ubuntu-Regular")};
  margin: ${(props) => props.spacing || 0};
  padding: ${(props) => (props.hasPadding ? "20px" : "0px")};
`;

export const Box = styled.View<BoxProps>`
  flex: 1;
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "flex-start"};
  width: ${(props) => props.width || `${Dimensions.get("window").width}px`};
  height: ${(props) => props.height || "auto"};
  max-height: ${(props) => props.height || "auto"};
  padding: ${(props) => (props.hasPadding ? "20px" : "0px")};
  padding-bottom: ${(props) =>
    props.removePaddingBottom ? "0px" : props.hasPadding ? "20px" : "0px"};
  margin: ${(props) => props.spacing || 0};
  border-radius: ${(props) => props.radius || 0};
  background: ${(props) =>
    themeConfig.colors[props.background! as DefaultColors] ||
    props.background ||
    "transparent"};
`;

export const Touchable = styled.TouchableOpacity<TouchableProps>`
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "flex-start"};
  width: ${(props) => props.width || `${Dimensions.get("window").width}px`};
  height: ${(props) => props.height || "auto"};
  padding: ${(props) => (props.hasPadding ? "20px" : "0px")};
  margin: ${(props) => props.spacing || 0};
  background: ${(props) =>
    themeConfig.colors[props.background! as DefaultColors] ||
    props.background ||
    "transparent"};
  border-radius: ${(props) => props.rounded || 0};
  border: ${(props) => props.border || "none"};
`;

export const TextInput = styled(TextInputPaper).attrs({
  mode: "outlined",
  theme: {
    colors: {
      placeholder: colorsUtil.toAlpha(themeConfig.colors.muted, 30),
    },
  },
})`
  height: 45px;
  width: 100%;
  font-size: 15px;
  background: ${themeConfig.colors.light};
`;

export const Button = styled(ButtonPaper).attrs<ButtonProps>((props) => ({
  buttonColor:
    themeConfig.colors[props.background as DefaultColors] || props.background,
  width: props.block ? `${Dimensions.get("window").width}px` : "auto",
  labelStyle: {
    color: themeConfig.colors[(props.textColor! as DefaultColors) || "light"],
    letterSpacing: 0,
  },
}))``;
