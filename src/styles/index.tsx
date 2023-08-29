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
