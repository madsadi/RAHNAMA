import styled from 'styled-components'
import {
    space,
    layout,
    flexbox,
    FlexboxProps,
    LayoutProps,
    SpaceProps,
} from 'styled-system'

let Box = styled("div").attrs(props=>({className:props.className}))<FlexboxProps|LayoutProps|SpaceProps>`
${space}
${layout}
${flexbox}
`
export default Box