import { SvgIcon } from "@material-ui/core"
import { Facebook, Instagram, WhatsApp } from "@material-ui/icons"
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
  justify-items: center;

  @media (min-width: 1024px) {
    grid-template-rows: none;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
  }
`

const ContactSectionFormContainer = styled.div``

const ContactSectionInfoContainer = styled.div`
  width: 80%;
  font-size: 20px;
  margin-top: 25px;

  font-family: ${props => props.theme.typography.fontFamily};

  & .infoHeader {
    color: ${props => props.theme.palette.primary.main};
    font-weight: 700;
    margin-bottom: 20px;
  }

  & .infoAddress {
    margin-bottom: 20px;
  }

  & .infoPhones {
    margin-bottom: 20px;

    & .infoPhonesHeader {
      color: #333;
      font-weight: 700;
    }
  }

  & .infoMail {
    margin-bottom: 20px;

    & .infoMailHeader {
      color: #333;
      font-weight: 700;
    }
  }

  & .infoSocials {
    display: flex;

    & .MuiSvgIcon-root {
      fill: #333;
      margin-right: 15px;
      font-size: 45px;
      transition: all 0.5s ease-in-out;

      &:hover {
        fill: ${props => props.theme.palette.primary.main};
      }
    }
  }

  @media (min-width: 1024px) {
    align-self: center;
    font-size: 25px;
    width: 50%;
    margin-top: 0;

    & .infoHeader {
      font-size: 30px;
    }
  }
`

const ContactSection = (props: Props) => {
  return (
    <ContactSectionRoot>
      <ContactSectionGridContainer>
        <ContactSectionFormContainer>
          <ContactFormMain />
        </ContactSectionFormContainer>

        <ContactSectionInfoContainer>
          <div className="infoHeader">
            Atendemos em Florianópolis e região metropolitana
          </div>

          <div className="infoAddress">
            Servidão Ana Cardoso, 267 - Florianópolis/SC
          </div>

          <div className="infoPhones">
            <div className="infoPhonesHeader">Telefones:</div>
            <div className="infoPhones-1">{"(48) 3065-6712"}</div>
            <div className="infoPhones-2">{"(48) 9-9124-0082"}</div>
          </div>

          <div className="infoMail">
            <div className="infoMailHeader">E-mail:</div>
            <div className="infoMail-1">{"comercial@hightechsc.com.br"}</div>
          </div>

          <div className="infoSocials">
            <div className="infoFacebookIcon">
              <a href="https://www.facebook.com/serralheriahightech">
                <SvgIcon component={Facebook} />
              </a>
            </div>
            <div className="infoWhatsAppIcon">
              <a href="https://wa.link/s2tjkr">
                <SvgIcon component={WhatsApp} />
              </a>
            </div>
            {/* <div className="infoInstagramIcon">
              <a href="#">
                <SvgIcon component={Instagram} />
              </a>
            </div> */}
          </div>
        </ContactSectionInfoContainer>
      </ContactSectionGridContainer>
    </ContactSectionRoot>
  )
}

export default ContactSection
