import { Title, createStyles } from "@mantine/core"

const data = [
    { linkName: 'Official Website', description: 'I want to visit our official website for more information about the Department of Health Information Management.', url: '', icon: '' },
    { linkName: 'Account Issues', description: 'Lets Address any issue pertaining to your account now', url: '', icon: '' },
    { linkName: 'Report a problem', description: 'Anything regarding academic health', url: '', icon: '' },
    { linkName: 'Counselling & Guidance', description: 'I want to book an appointment for counselling session', url: '', icon: '' },
    { linkName: 'Academic Programs', description: 'I want to explore the various academic programs offered by our department to shape my career in healthcare and information management.', url: '', icon: '' },
    { linkName: 'Faculty and Staff', description: 'I want to meet our dedicated team of faculty and staff who are committed to providing quality education and research in health information management.', url: '', icon: '' },
    { linkName: 'Admissions', description: "I want to find out the admission process and requirements to join our department's programs.", url: '', icon: '' },
    { linkName: 'Research and Publications', description: "I want to explore our research initiatives and access published works in health information management.", url: '', icon: '' },
    { linkName: 'Contact Directoies', description: "I want to get direct contact information for specific individuals or departments within our department.", url: '', icon: '' },
]

const usestyles = createStyles((theme) => ({
    mainContainer: {
        width: '80vw',
        margin: 'auto',
        marginTop: '3rem',
    },
    linkParent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
    },
    LinksContainer: {
        width: '97%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 2fr))',
        gap: '3rem'
    },
    contactLinkImage: {
        width: '200px',
        height: '200px',
        boxShadow: "0px 6px 33px -3px rgba(0,0,0,0.2)",
        borderRadius: '50%'
    },
    linkInfo: {
        textAlign: 'center',

        '& h2': {
            fontWeight: 'bold',
            color: 'rgba(101, 233, 220, 0.99)'
        }
    }
}))
const ContactLinks = () => {
    const { classes, theme } = usestyles()
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
            <hr className='w-[4rem] m-auto mb-[5rem]' style={{ borderWidth: ".15rem", border: ".15rem solid rgba(101, 233, 220, 0.99)" }} />

            <div className={classes.LinksContainer}>
                {data.map(linkItem => <div className={classes.linkParent}>
                    <div className={classes.contactLinkImage}></div>
                    <div className={classes.linkInfo}>
                        <h2>{linkItem.linkName}</h2>
                        <p>{linkItem.description}</p>
                        <button>button</button>
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default ContactLinks