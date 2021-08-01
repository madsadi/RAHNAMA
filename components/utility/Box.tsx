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
    BorderProps
} from 'styled-system'

let Box = styled("div").attrs(props=>({className:props.className}))<FlexboxProps|ColorProps|LayoutProps|SpaceProps|BorderProps >`
${space}
${layout}
${color}
${flex}
${flexbox}
`
export default Box