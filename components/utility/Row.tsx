import styled from 'styled-components'
import {
    flex,
    flexbox, FlexboxProps,
    layout,
    LayoutProps
} from 'styled-system'

let Row = styled("div")<LayoutProps| FlexboxProps>`
${layout}
${flex}
${flexbox}
${{
    margin: '0 -8px'
}}
`
Row.defaultProps={
    display:'flex',
    flexWrap:'wrap',
}
export default Row