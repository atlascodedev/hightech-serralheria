import React from "react"
import { makeStyles, Theme } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Box from "@material-ui/core/Box"
import styled from "styled-components"
import { motion } from "framer-motion"

interface TabPanelProps {
  children?: React.ReactNode
  index: any
  value: any
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  )
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#fff",
    // backgroundColor: theme.palette.background.paper,
  },
}))

interface ITabItem {
  label: string
  component: JSX.Element
}

interface ISimpleTabsProps {
  tabItems: ITabItem[]
}

export default function ServiceTabs({ tabItems = [] }: ISimpleTabsProps) {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  return (
    <AncestralRoot>
      <div className={classes.root}>
        <AppBar
          style={{
            color: "#333",
            boxShadow: "none",
            backgroundColor: "#fff",
            display: "flex",
            justifyContent: "center",
          }}
          position="static"
        >
          <Tabs
            id="tab-special"
            style={{
              width: global.window.innerWidth > 768 ? "50%" : "100%",
              marginRight: "auto",
              marginLeft: "auto",
              paddingTop: "25px",
              paddingBottom: "25px",
            }}
            value={value}
            onChange={handleChange}
            aria-label="Serviços"
          >
            {tabItems.map((tabItem, index) => {
              return <Tab label={tabItem.label} {...a11yProps(index)} />
            })}
          </Tabs>
        </AppBar>

        {tabItems.map((tabItem, index) => {
          return (
            <TabPanel value={value} index={index}>
              <motion.div
                initial={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                animate={{ opacity: 1 }}
              >
                {tabItem.component}
              </motion.div>
            </TabPanel>
          )
        })}
      </div>
    </AncestralRoot>
  )
}

const AncestralRoot = styled.div`
  #tab-special > div {
    display: flex !important;
    justify-content: center !important;
  }
`
