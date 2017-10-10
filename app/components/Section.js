import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import styles from 'styles'
import styledProps from 'styled-props'

export const Section = styled.section`
  padding-top: ${props => props.pt}px;
  padding-bottom: ${props => props.pb}px;
  background: ${styledProps(styles.color, 'background')};
  ${breakpoint('md', styles.breakpoint)`
    padding-top: ${props => props.ptm || props.pt}px;
    padding-bottom: ${props => props.pbm || props.pb}px;
  `}
`

Section.readableCard = styled(Section)`
  max-width: 600px;
  padding: 40px;
  margin-bottom: 30px;
  background: ${styledProps(styles.color, 'background')};
  box-shadow: 0 2px 45px 0 rgba(0,0,0,0.21);
  margin: 100px 0;
`

Section.readableCard.defaultProps = {
  background: 'altDark'
}

Section.defaultProps = {
  background: 'primary',
  pt: 50,
  pb: 50
}