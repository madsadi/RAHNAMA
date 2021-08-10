import styled from 'styled-components'
import {
    flex,
    layout,
    LayoutProps, space, SpaceProps
} from 'styled-system'

let Container = styled("div").attrs(props=>({className:'container'}))<LayoutProps| SpaceProps>`
${layout}
${flex}
${space}
`
Container.defaultProps={
    maxWidth:[800, 1025, 1230, '85%'],
}
export default Container