import React from "react"
import styled from "styled-components"
import ContactFormMain from "../ContactForm"

interface Props {}

const ContactSectionRoot = styled.div`
  padding: 5vh 0px 5vh 0px;
  background-color: #fff;
  font-family: ${props => props.theme.typography.fontFamily};
`

const ContactSectionGridContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;

  @media (min-width: 1024px) {
    grid-template-rows: none;
    grid-template-columns: 1fr 1fr;
  }
`

const ContactSectionFormContainer = styled.div``

const ContactSectionInfoContainer = styled.div``

const ContactSection = (props: Props) => {
  return (
    <ContactSectionRoot>
      <ContactSectionGridContainer>
        <ContactSectionFormContainer>
          <ContactFormMain />
        </ContactSectionFormContainer>
      </ContactSectionGridContainer>
    </ContactSectionRoot>
  )
}

export default ContactSection
