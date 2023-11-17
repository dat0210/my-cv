import styles from './CvProject.module.css'


type IContact = {
    name_contact: string;
    my_contact: string;
}

const MyContact = ( {name_contact, my_contact} : IContact) => {

    return(
        <li> {name_contact} <br /> {my_contact}</li>
    )
}

const ListContact = ({children} : {children : React.ReactNode}) => {
    return (
        <ul>
            {children}
        </ul>
    )
}

const Contact = () => {
    return(
        <>
        <h3 className={styles.contact_title}>CONTACT</h3>
        <div className={styles.contact_content}>
        <ListContact>
            <MyContact name_contact='Phone' my_contact='0707006521' />
            <MyContact name_contact='Email' my_contact='letandat.021001@gmail.com' />
            <MyContact name_contact='Address' my_contact='Tra Vinh - Viet Nam' />
        </ListContact>
        </div>
        </>
    )
}



const Expertise = ({label, score} : {label: string, score: number,}) => {
    const arrs = [1,2,3,4,5]
    return(
        <>
        <div className={styles.expertise_content}>
            <div className={styles.label}>{label}</div>
            <div>
                {
                    arrs.map((item) => {
                        return (
                            <>
                            {
                                item > score ? (<canvas className={styles.canvas_white}></canvas>) : (<canvas className={styles.canvas_orange}></canvas>)
                            }
                            </>
                        )
                    })
                }
            </div>

        </div>
        </>
    )
}
 
const PersonalSkill = () => {
    return(
        <>
        <h3 className={styles.contact_title}>PERSONAL SKILL</h3>
    <div className={styles.contact_content}>
    <ul>
        <li>Public Speaking</li>
        <li>Finacial Management</li>
        <li>Creative Idea</li>
        <li>Project Manager</li>
        <li>Directer</li>
    </ul>
    </div>
    </>
    )
}

type IAboutme ={
    title: string;
    content: string;
}
const Aboutme = ({title, content}: IAboutme ) => {
    return(
        <div className={styles.aboutme}>
        <h3>{title}</h3>
        <p className={styles.info_content}>{content}</p>
        </div>
    )
} 

type IEducation ={
    tag: string;
    desc: string;
    year: string;
}
const Education = ({tag, desc, year} : IEducation) => {
    return(
        <>
        <div className={styles.edu_content}>
            <div>
            <strong>{tag}</strong>
            <p>{desc}</p>
            </div>
            <div>{year}</div>
        </div>

        </>
    )
}

type IWork = {
    job: string;
    company: string;
    year: string;
    desc: string;
}

const WorkExperience = ({job, company, year, desc} : IWork) => {
    return(
        <>
            <div className={styles.work_content}>
                <div>
                <strong>{job}</strong>  <br />
                <strong>{company}</strong>
                </div>
                <div>{year}</div>
            </div>
            <p className={styles.info_content}>{desc}</p>
        </>
    )
} 


const CvProject = () => {
  return (
        <div className={styles.container}>
            <div className={styles.contact}>
                <div className={styles.avatar}>
                <img src="images/avatar.jpg" alt="" />
                </div>
                <div>
                    <Contact  />
                </div>
                <div>
                <h3 className={styles.contact_title}>EXPERTISE</h3>
                    <Expertise label='MS World' score={5} />
                    <Expertise label='MS Excel' score={3} />
                    <Expertise label='Photoshop' score={4} />
                    <Expertise label='Illustrator' score={3} />
                    <Expertise label='Corel Draw' score={4} />
                </div>
                <div>
                    <PersonalSkill />
                </div>
            </div>
            <div className={styles.profile}>
                <div className={styles.info}>
                    <p>LÊ TẤN ĐẠT</p>
                    <p>WEB DEVELOPER</p>
                </div>
                <div>
                        <Aboutme title='ABOUT ME' content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, minus. Optio dolores, modi rem veniam, officiis iste consequatur distinctio quae pariatur facere odit unde corrupti maxime aut cum sunt nulla.'/>
                </div>
                <div>
                    <h3>EDUCATION</h3>
                        <Education  tag='BACHELOR OF DESIGN' desc='University/Collage/Institute' year='2012-2015'/>
                        <Education  tag='BACHELOR OF DESIGN' desc='University/Collage/Institute' year='2012-2015'/>
                </div>
                <div>
                    <h3>WORK EXPERIENCE</h3>
                    <WorkExperience job='JOB TITLE' company='COMPANY NAME' year='2012-2015' desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis eius rerum repellendus enim reiciendis voluptas ipsam iure maxime dolor. Possimus dolore ducimus, optio excepturi rem odit modi doloremque ratione repellendus?'/>
                    <WorkExperience job='JOB TITLE' company='COMPANY NAME' year='2012-2015' desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis eius rerum repellendus enim reiciendis voluptas ipsam iure maxime dolor. Possimus dolore ducimus, optio excepturi rem odit modi doloremque ratione repellendus?'/>
                </div>
            </div>
        </div>
  )
}

export default CvProject