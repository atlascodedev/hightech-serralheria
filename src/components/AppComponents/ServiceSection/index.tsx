import React from "react"
import ServiceCard from "./ServiceCard"
import styled from "styled-components"
import ServiceSlider from "./Slider"
import { useTheme } from "@material-ui/core"

type ServiceSectionRootProps = {
  contrast: boolean
}

const ServiceSectionRoot = styled("div")<ServiceSectionRootProps>`
  background-color: ${props => (props.contrast ? " #f3f3f3" : "#fff")};
  padding-top: 5vh;
  padding-bottom: 5vh;

  @media (min-width: 1024px) {
    padding-top: 10vh;
    padding-bottom: 10vh;
  }
`

type ServiceSectionTitleProps = {
  titleFontFamily: string
  titleColor: string
}

const ServiceSectionTitle = styled("div")<ServiceSectionTitleProps>`
  text-align: center;
  font-size: 30px;
  font-family: ${props => props.titleFontFamily};
  color: ${props => props.titleColor};
  font-weight: 800;

  @media (min-width: 1024px) {
    font-size: 42px;
  }
`

type Props = {
  services: Array<any>
  serviceSectionTitle: string
  serviceSectionTitleColor?: string
  rootContrast?: boolean
}

const ServiceSection = ({
  services = [],
  serviceSectionTitle = "Título da seção",
  serviceSectionTitleColor,
  rootContrast = false,
}: Props) => {
  const theme = useTheme()

  return (
    <ServiceSectionRoot contrast={rootContrast}>
      <ServiceSectionTitle
        titleColor={
          serviceSectionTitleColor
            ? serviceSectionTitleColor
            : theme.palette.primary.main
        }
        titleFontFamily={theme.typography.fontFamily as string}
      >
        {serviceSectionTitle}
      </ServiceSectionTitle>

      <ServiceSlider services={services} />
    </ServiceSectionRoot>
  )
}

export default ServiceSection
