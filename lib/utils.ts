import { useColorModeValue } from "@chakra-ui/color-mode";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { whiten, darken } from "@chakra-ui/theme-tools";

export const ColorMode = (light, dark) => useColorModeValue(light, dark);

export const Lighten = (color, amount) => whiten(color, amount);

export const Darken = (color, amount) => darken(color, amount);

export const BreakPoint = (values) => useBreakpointValue(values);
