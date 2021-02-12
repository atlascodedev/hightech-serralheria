import { SvgIcon, SvgIconTypeMap } from "@material-ui/core"
import { OverridableComponent } from "@material-ui/core/OverridableComponent"
import { Check, SvgIconComponent } from "@material-ui/icons"
import React, { ReactElement } from "react"
import styled from "styled-components"

type DefenseCardBaseProps = {
  height: string | React.ReactText
  width: string | React.ReactText
}

const DefenseCardBase = styled("div")<DefenseCardBaseProps>`
  background-color: #fff;
  height: ${props =>
    typeof props.height == "number" ? props.height + "px" : props.height};
  width: ${props =>
    typeof props.width == "number" ? props.width + "px" : props.width};

  font-family: ${props => props.theme.typography.fontFamily};
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 35px;
  margin-bottom: 35px;
  position: relative;

  @media (min-width: 1024px) {
    height: ${props =>
      typeof props.height == "number" ? props.height + "px" : props.height};
    width: ${props =>
      typeof props.width == "number" ? props.width + "px" : props.width};
  }
`

const DefenseCardIconContainer = styled("div")`
  border-radius: 50%;
  width: 61px;
  height: 61px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.palette.primary.main};
  position: absolute;
  top: 0;
  transform: translate(-15px, -15px);

  @media (min-width: 1024px) {
    width: 75px;
    height: 75px;
  }
`

const DefenseCardIcon = styled("div")`
  & .icon {
    fill: #fff;
    font-size: 40px;

    @media (min-width: 1024px) {
      font-size: 45px;
    }
  }
`

const DefenseCardInner = styled("div")`
  display: grid;
  grid-template-rows: 0.7fr 1.3fr;
  height: 100%;
  text-align: center;
  justify-items: center;
`

const DefenseCardTitle = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  color: #333;
  font-weight: 700;
  padding-top: 5px;
  width: 50%;

  @media (min-width: 1024px) {
    /* padding-left: 45px; */
  }
`

const DefenseCardText = styled("div")`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: fit-content;
  padding-left: 35px;
  padding-right: 35px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 16px;

  @media (min-width: 1024px) {
    font-size: 18px;
  }
`

interface DefenseCard {
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>
  title: string
  text: string
  cardHeight?: string | number
  cardWidth?: string | number
}

const DefenseCard: React.FC<DefenseCard> = ({
  icon = Check,
  title = "Placeholder title",
  text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio enim consequuntur ad inventore! Sapiente accusamus reiciendis tempore assumenda labore. Nobis, illo eaque. Debitis itaque natus, quasi nam culpa iure libero.",
  cardHeight = "250px",
  cardWidth = "300px",
}) => {
  return (
    <div>
      <DefenseCardBase width={cardWidth} height={cardHeight}>
        <DefenseCardIconContainer>
          <DefenseCardIcon>
            <SvgIcon fontSize="inherit" className={"icon"} component={icon} />
          </DefenseCardIcon>
        </DefenseCardIconContainer>

        <DefenseCardInner>
          <DefenseCardTitle>{title}</DefenseCardTitle>
          <DefenseCardText>{text}</DefenseCardText>
        </DefenseCardInner>
      </DefenseCardBase>
    </div>
  )
}

export default DefenseCard
