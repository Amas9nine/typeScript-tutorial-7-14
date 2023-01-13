import './App.css';
// import { Button } from './component2/Button';
import { Input } from './component2/Input';
// import { Container } from './styles/Container';
// import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
// import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
// import { PersonsList } from './components/PersonsList';
// import { Status } from './components/Status';


function App() {

  const personNames = {
    first: "Aza",
    last: "Usup"
  }

  // const personOfHeroice = [
  //   {
  //     first: "Bruce",
  //     last: "Wayne",
  //   },
  //   {
  //     first: "Clark",
  //     last: "Kent",
  //   },
  //   {
  //     first: "Aza",
  //     last: "Usup",
  //   },

  // ]



  return (
    <div className="App">
      {/* 1 */}
      {/* <Greet // messagesCount={30}  */}
        {/* name="Jony" isLoggedIn={true} /> */}
      <Person name={personNames} />
      {/* <PersonsList names={personOfHeroice} /> */}
      {/* 2 */}
      {/* <Status status='error' /> */}
      {/* <Heading children='PlaceHolder text' number={10} btn={() => { */}
        {/* alert(": BTN: "); */}
      {/* }} /> */}
      {/* <Oscar><Heading>Oskar goes Leo-Plevradon</Heading></Oscar> */}


      {/* <Button handClick={() => {
        console.log("Button");
      }} /> */}

      {/* <Input value='' handleChange={(e) => console.log(e)} /> */}

      {/* <Container style={{ border: "1px solid blue", padding: "1rem" }} /> */}
    </div>
  );
}

export default App;
