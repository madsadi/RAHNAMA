import styled from 'styled-components'
import {
    flex,
    flexbox,
    layout,
    LayoutProps
} from 'styled-system'

let Container = styled("div").attrs(props=>({className:'container'}))<LayoutProps>`
${layout}
${flex}
`
Container.defaultProps={
    maxWidth:[800, 1025, 1230, 1640],
}
export default Container