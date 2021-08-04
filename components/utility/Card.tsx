import styled from 'styled-components'
import {
    flex,
    flexbox, FlexboxProps,
    layout,
    LayoutProps
} from 'styled-system'

let Col = styled("div")<LayoutProps| FlexboxProps>`
${layout}
${flex}
${flex}
`
Col.defaultProps={
    flexBasis:['33.3%','25%']
}
export default Col