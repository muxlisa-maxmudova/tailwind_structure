import Nav from "./Navbar/Nav.tsx";
import UserContact from "./Lists/UserContact.tsx";
import {data, People} from './data.ts'
import { useState} from "react";
import Contact from "./Contact.tsx";


const App = () => {
    let foundContacts = data
    const [search, setSearch] = useState('');
    const handleInput = (e:{ target: { value: string; }; }) => {
        setSearch(e.target.value);
    }
    const findData = () => {
        if(search){
            foundContacts = data.filter((contact:People) => contact.name.toLowerCase().includes(search.toLowerCase()));
        }
        return foundContacts.map((product)=> (
            <Contact name={product.name}
            number={product.phoneNumber}/>

        ))
    }
    // const extractInfo = data.map((person) => person. === id );
    return (
        <div>
            <Nav search={search} handleInput={handleInput}/>
            <UserContact result={findData()}/>
        </div>
    )
}
export default App
