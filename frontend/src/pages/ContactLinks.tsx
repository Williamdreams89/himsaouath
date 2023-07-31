import { Title, createStyles } from "@mantine/core"

const usestyles = createStyles((theme)=>({
    mainContainer: {
        width: '80vw',
        margin: 'auto',
        marginTop: '3rem',
    },
    LinksContainer: {
        width: '97%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 2fr))', 
        gap: '3rem'
    },
    contactLink:{
        width: '300px',
        height: '300px',
        boxShadow: "0px 6px 33px -3px rgba(0,0,0,0.2)",
    }
}))
const ContactLinks = () => {
    const {classes, theme} = usestyles()
    return (
        <div className={classes.mainContainer}>
            <Title className=' text-center text-4xl mb-[10px]'
        order={2}
        size="h1"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
        weight={900}
        align="center"
        >
            <h2 className=" text-center">Welcome to our Contact Page</h2>
            </Title>
            <hr className='w-[4rem] m-auto mb-[5rem]' style={{borderWidth:".15rem", border: ".15rem solid rgba(101, 233, 220, 0.99)"}} />

            <div className={classes.LinksContainer}>

            <div className={classes.contactLink}></div>
            <div className={classes.contactLink}></div>
            <div className={classes.contactLink}></div>
            <div className={classes.contactLink}></div>
            <div className={classes.contactLink}></div>
            <div className={classes.contactLink}></div>
            </div>
        </div>
    )
}

export default ContactLinks