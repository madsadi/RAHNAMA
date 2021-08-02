import styled from 'styled-components'
import {
    layout,
    LayoutProps
} from 'styled-system'

let Container = styled("div").attrs(props=>({className:props.className}))<LayoutProps>`
${layout}
`
export default Container