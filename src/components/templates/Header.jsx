import styled from 'styled-components'
import { Logo, FlexBetween, Flex, H3 } from '@/components/atoms'
import { colors } from '@/theme/colors'

const HeaderLayout = styled.header`
  width: 100%;
  height: 116px;
  padding: 30px 64px;
`

export const Header = ({ Icons }) => {
  return (
    <HeaderLayout>
      <FlexBetween>
        {/* left items */}
        <Flex gap={16}>
          <Logo />
          <H3 style={{ color: colors.white }}>KWTree</H3>
        </Flex>
        {/* right items */}
        <Icons />
      </FlexBetween>
    </HeaderLayout>
  )
}
