import styled from 'styled-components'
import {
    layout,
    LayoutProps
} from 'styled-system'

let Container = styled("div").attrs(props=>({className:'container'}))<LayoutProps>`
${layout}
`
export default Container