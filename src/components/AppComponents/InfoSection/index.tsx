import { SvgIcon } from "@material-ui/core"
import { Facebook, Instagram, WhatsApp } from "@material-ui/icons"
import React from "react"
import styled from "styled-components"

type AddressInfo = {
  country: string
  city: string
  state: string
  street: string
  streetNumber: string | number
  zipCode: string | number
  additional?: any | undefined | null
}

type ContactInfo = {
  phone: string | number
  phone2?: string | number
  whatsapp: string | number
  email: string
}

type SocialsInfo = {
  facebookURL: string
  instagramURL: string
  whatsappURL: string
}

type InfoSectionProps = {
  address?: AddressInfo
  contact?: ContactInfo
  socials?: SocialsInfo
}

const InfoSectionBase = styled.div`
  background-color: #686868;
  display: grid;
  grid-template-rows: 1fr 1fr;
  font-family: "Suez One";

  @media (min-width: 1024px) {
    grid-template-rows: none;
    grid-template-columns: 1fr 1fr;
  }
`

const InfoSocials = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  & .socialIcon {
    text-decoration: none;
    fill: #fff;
    font-size: 60px;
    margin-left: 20px;
    margin-right: 20px;
    transition: all 0.3s ease-in-out;

    &:hover {
      fill: #ebe04a;
      transform: scale(1.1);
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`

const InfoContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-direction: center;
  color: #fff;

  & > div {
    margin-top: 20px;
    margin-bottom: 10px;
  }

  @media (min-width: 1024px) {
    font-size: 20px;
  }
`

const InfoSection: React.FC<InfoSectionProps> = ({
  address = {
    city: "Cidade",
    country: "País",
    state: "Estado",
    street: "Rua",
    zipCode: "CEP",
    streetNumber: "506",
  },
  contact = {
    email: "email@email.com",
    phone: "(51) 9-9477-5764",
    whatsapp: "(51) 9-9999-9999",
  },
  socials = {
    facebookURL: "#",
    instagramURL: "#",
    whatsappURL: "#",
  },
}) => {
  return (
    <InfoSectionBase>
      <InfoContact>
        <div className="location">
          {`${address.city} - ${address.state}, ${address.country}`}
        </div>

        <div className="phone1">{`${contact.phone}`}</div>

        {contact.phone2 ? <div className="phone2">{contact.phone2}</div> : null}

        <div className="email">E-mail: {contact.email}</div>
      </InfoContact>

      <InfoSocials>
        <div>
          <a href={socials.facebookURL}>
            <SvgIcon className="socialIcon" component={Facebook}></SvgIcon>
          </a>
        </div>

        <div>
          <a href={socials.instagramURL}>
            <SvgIcon className="socialIcon" component={Instagram}></SvgIcon>
          </a>
        </div>
        <div>
          <a href={socials.whatsappURL}>
            <SvgIcon className="socialIcon" component={WhatsApp}></SvgIcon>
          </a>
        </div>
      </InfoSocials>
    </InfoSectionBase>
  )
}

export default InfoSection
