import './App.css';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonsList } from './components/PersonsList';
import { Status } from './components/Status';


function App() {

  const personNames = {
    first: "Aza",
    last: "Usup"
  }

  const personOfHeroice = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Aza",
      last: "Usup",
    },

  ]

  return (
    <div className="App">
      {/* 1 */}
      <Greet // messagesCount={30} 
        name="Jony" isLoggedIn={true} />
      <Person name={personNames} />
      <PersonsList names={personOfHeroice} />
      {/* 2 */}
      <Status status='error' />
      <Heading>PlaceHolder text </Heading>
      <Oscar><Heading>Oskar goes Leo-Plevradon</Heading></Oscar>
    </div>
  );
}

export default App;
