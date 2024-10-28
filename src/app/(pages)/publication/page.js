
import Container from "./Container";
import Header from '@/components/Header';

const header_bkimg = '/assets/publication.jpg';


function Publication() {
    return(
        <>
        <Header title='Publication' backgroundImage={header_bkimg} />
        <br></br>
        <Container/>
        </>
    )
}
export default Publication;