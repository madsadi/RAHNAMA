import styled from 'styled-components'
import {
    space,
    layout,
    color,
    border,
    flex,
    flexbox,
    FlexboxProps,
    ColorProps,
    LayoutProps,
    SpaceProps,
    BorderProps,
    typography, TypographyProps, BackgroundProps, background
} from 'styled-system'

let Box = styled("div").attrs(props=>({className:props.className}))<FlexboxProps|ColorProps|LayoutProps|SpaceProps|BorderProps|TypographyProps | BackgroundProps>`
${space}
${layout}
${color}
${flex}
${border}
${flexbox}
${background}
${typography}
`
export default Box