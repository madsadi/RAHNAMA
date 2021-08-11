import styled from 'styled-components'
import {
    flex, flexbox,
    FlexboxProps,
    layout,
    LayoutProps, space, SpaceProps
} from 'styled-system'

let Col = styled("div")<SpaceProps| LayoutProps| FlexboxProps>`
${layout}
${flex}
${flexbox}
${space}
`
Col.defaultProps={
    flexBasis:['33.3%','25%']
}
export default Col