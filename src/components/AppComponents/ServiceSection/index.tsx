import React, { HTMLAttributes } from "react"
import ServiceCard from "./ServiceCard"
import styled from "styled-components"
import ServiceSlider from "./Slider"
import { useTheme, SvgIcon } from "@material-ui/core"
import { ServiceItemList } from "../../../types"
import { ArrowForward } from "@material-ui/icons"
import { motion } from "framer-motion"

type ServiceSectionRootProps = {
  contrast: boolean
}

const ServiceSectionRoot = styled("div")<ServiceSectionRootProps>`
  background-color: ${props => (props.contrast ? " #f3f3f3" : "#fff")};
  position: relative;
  /* padding-top: 5vh; */
  /* padding-bottom: 5vh; */

  @media (min-width: 1024px) {
    /* padding-top: 10vh; */
    padding-bottom: 5vh;
  }
`

const ServiceSectionTitle = styled("div")`
  text-align: center;
  font-size: 30px;
  font-family: ${props => props.theme.typography.fontFamily};
  color: ${props => props.theme.palette.primary.main};
  font-weight: 800;

  @media (min-width: 1024px) {
    font-size: 42px;
  }
`

interface Props extends ServiceItemList {
  serviceSectionTitle: string
  serviceSectionTitleColor?: string
  rootContrast?: boolean
  serviceCardActionRef?: React.RefObject<HTMLDivElement> | null
}

const ServiceSection = ({
  serviceList = [],
  serviceSectionTitle = "Título da seção",
  serviceSectionTitleColor,
  rootContrast = false,
  serviceCardActionRef = null,
}: Props) => {
  const theme = useTheme()

  return (
    <div>
      {serviceList.length ? (
        <ServiceSectionRoot contrast={rootContrast}>
          <ServiceSlider
            serviceCardActionRef={serviceCardActionRef}
            serviceList={serviceList}
          />
        </ServiceSectionRoot>
      ) : null}
    </div>
  )
}

export default ServiceSection

const ButtonRoot = styled.div`
  width: 57px;
  height: 57px;
  border-radius: 50%;
  background-color: #fff;
  border: ${props => `1px solid ${props.theme.palette.primary.main}`};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  .MuiSvgIcon-root {
    fill: ${props => props.theme.palette.primary.main};
    font-size: 1.85rem;
  }
`

const BackButtonContainer = styled.div`
  position: absolute;
  top: 40%;
  left: 2%;

  display: none;
  @media (min-width: 1024px) {
    display: block;
  }
`

const NextButtonContainer = styled.div`
  position: absolute;
  top: 40%;
  right: 2%;

  display: none;
  @media (min-width: 1024px) {
    display: block;
  }
`

export const ServiceNavigationBackButton = ({
  ...props
}: { rotate?: boolean } & Pick<
  HTMLAttributes<HTMLButtonElement>,
  "className" | "style" | "id"
>) => {
  return (
    <BackButtonContainer>
      <ServiceNavigationButton rotate {...props} />
    </BackButtonContainer>
  )
}

export const ServiceNavigationNextButton = ({
  ...props
}: { rotate?: boolean } & Pick<
  HTMLAttributes<HTMLButtonElement>,
  "className" | "style" | "id"
>) => {
  return (
    <NextButtonContainer>
      <ServiceNavigationButton {...props} />
    </NextButtonContainer>
  )
}

const ServiceNavigationButton = ({
  rotate = false,
  ...props
}: { rotate?: boolean } & Pick<
  HTMLAttributes<HTMLButtonElement>,
  "className" | "style" | "id"
>) => {
  return (
    <motion.div
      className={props.className}
      id={props.id}
      variants={{
        hover: { scale: 1.1 },
        tap: { scale: 0.9 },
      }}
      whileTap="tap"
      whileHover="hover"
    >
      <ButtonRoot>
        <SvgIcon
          component={ArrowForward}
          style={{ transform: rotate ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </ButtonRoot>
    </motion.div>
  )
}

const MobileNavigationContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 40px;
  transform: translateY(-40px);
  position: relative;
  z-index: 500;

  @media (min-width: 1024px) {
    display: none;
  }
`

export const ServiceNavigationMobile = () => {
  return (
    <MobileNavigationContainer>
      <ServiceNavigationButton rotate id="service-prev" />
      <ServiceNavigationButton id="service-next" />
    </MobileNavigationContainer>
  )
}
