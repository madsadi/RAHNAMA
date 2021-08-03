import styled from 'styled-components'
import {
    layout,
    LayoutProps
} from 'styled-system'

let Container = styled("div").attrs(props=>({className:'container'}))<LayoutProps>`
${layout({maxWidth:[800,1025,1180,1640]})}
`
export default Container