
import Header from '@/components/Header'
import InfoCard from './InfoCard';


const bkHeaderimg = '/assets/colab.webp';
const profile_img = '/assets/unknownman.png';

const member_info = [
    {
        name: 'abcd',
        profileimg: profile_img,
        department: 'CSE',
        ResearchArea : 'not a defualt card this is place holder '

    },
    {
        name: 'efgh',
        profileimg:profile_img,
        department: 'EE',
        ResearchArea : 'not a defualt card this is another place holder '

    },
    
];

function About() {
    return (
        <>
        <Header title='Collaboration' backgroundImage={bkHeaderimg}/>
        <br/>
        {member_info.map((member, index) => (
                <InfoCard
                    key={index}
                    profileimg={member.profileimg}
                    name={member.name}
                    department={member.department}
                    ResearchArea={member.ResearchArea}
                />
            ))}
        </>
    );
}

export default About;
