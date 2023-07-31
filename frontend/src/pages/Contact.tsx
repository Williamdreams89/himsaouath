import { Footer } from "../components/Footer"
import { Navigator } from "../components/Navigator"
import AnimatedBanner from "../components/ReusableAnimatedBanner"
import ContactLinks from "./ContactLinks"
import { createStyles } from "@mantine/core"


const useStyles = createStyles(theme=>({
  container:{
    backgroundColor: theme.colorScheme === 'dark'? 'rgba(0,0,0, .2)': 'white'
  },
}))
const Contact = () => {
  const {classes, theme} = useStyles()
  return (
    <div className={classes.container}>
      <Navigator />
      <AnimatedBanner />
      <ContactLinks />
      <Footer />
    </div>
  )
}

export default Contact