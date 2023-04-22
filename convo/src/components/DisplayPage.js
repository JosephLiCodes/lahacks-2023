import Container from 'react-bootstrap/Container';
import Chat from "@/components/Chat"
import Button from 'react-bootstrap/Button'

export default function DisplayPage(props) {
    return (
        <Container fluid style={{ maxHeight: '100vh', overflowY: 'auto' }}>
            <div className="row" style={{ borderBottom: '2px solid black', position: 'absolute', backgroundColor: 'white', height: '10vh', width: '100%' }}>
                <h1>Convo</h1>

            </div>
            <div className="row align-items-start">
                <div className="col" style={{ paddingTop: '10vh', overflowY: 'scroll', height: '100vh', borderRight: '2px solid black' }}>
                    {props.paragraphs.map((string, index) => (
                        <p key={index}>{string}</p>
                    ))}
                </div>

                <div className="col" style={{ paddingTop: '10vh', maxHeight: '100vh'}}>
                    <div className="row" style={{ borderBottom: '2px solid black', overflowY: 'scroll', height: '30vh' }}>
                        {props.paragraphs.map((string, index) => (
                            <p key={index}>{string}</p>
                        ))}
                        <Button>next</Button>
                    </div>
                    <div className="row" style={{ height: "58vh" }}>
                        <Chat questions={props.questions} />
                    </div>
                </div>
            </div>
        </Container>

    );
}

