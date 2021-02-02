import React from "react"
import DefenseCard from "../DefenseCard"
import styled from "styled-components"
import {
  AccountBalance,
  Assessment,
  Check,
  CreditCard,
  EmojiObjects,
  Facebook,
} from "@material-ui/icons"
import { Fade, Slide, useMediaQuery, useTheme } from "@material-ui/core"
import { Waypoint } from "react-waypoint"

type DefenseSectionRootProps = {
  fontFamily: string
}

const DefenseSectionRoot = styled("div")<DefenseSectionRootProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  overflow: hidden;
  margin-top: 5px;
  font-family: ${props => props.fontFamily};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.35);
`

type DefenseSectionTitleProps = {
  fontFamily: string
}

const DefenseSectionTitle = styled("h2")<DefenseSectionTitleProps>`
  font-family: ${props => props.fontFamily};
  margin-top: 10vh;
  color: #333;
  text-rendering: optimizeLegibility;
  font-size: 30px;
`

const DefenseSectionContainer = styled("div")`
  margin-top: 5vh;
  margin-bottom: 10vh;

  width: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  justify-items: center;

  @media (min-width: 1024px) {
    grid-template-rows: none;
    grid-template-columns: 1fr 1fr 1fr;
  }
`

interface Props {}

const DefenseSection = (props: Props) => {
  const [defenseAnimation, setDefenseAnimation] = React.useState<boolean>(false)
  const isBigDevice = useMediaQuery("(min-width: 1024px)")

  const deviceSize = isBigDevice ? 400 : 400

  const theme = useTheme()

  return (
    <div>
      <Waypoint
        bottomOffset={deviceSize}
        onEnter={() => setDefenseAnimation(true)}
      />
      <DefenseSectionRoot fontFamily={theme.typography.fontFamily as string}>
        {/* <DefenseSectionTitle fontFamily={theme.typography.fontFamily as string}>
          Por que escolher a <span>Consultoria Especializa</span>?
        </DefenseSectionTitle> */}
        <DefenseSectionContainer>
          <Slide
            in={defenseAnimation}
            direction={isBigDevice ? "up" : "left"}
            timeout={{ enter: 750 }}
          >
            <div>
              <DefenseCard icon={Assessment} />
            </div>
          </Slide>
          <Slide
            in={defenseAnimation}
            direction={isBigDevice ? "up" : "left"}
            timeout={{ enter: 950 }}
          >
            <div>
              <DefenseCard icon={EmojiObjects} />
            </div>
          </Slide>
          <Slide
            in={defenseAnimation}
            direction={isBigDevice ? "up" : "left"}
            timeout={{ enter: 1150 }}
          >
            <div>
              <DefenseCard icon={AccountBalance} />
            </div>
          </Slide>
        </DefenseSectionContainer>
      </DefenseSectionRoot>
    </div>
  )
}

export default DefenseSection
