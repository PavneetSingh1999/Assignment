import React, { useState } from 'react';
import './App.css';
import Card from './Card'

function App() {

  const [cards,setCards]=useState([{id:'1',name:'Leanne Graham',email:'Sincere@april.biz',phone:'1-770-736-8031 x56442',
web:'http://hildegard.org'},{id:2,name:'Ervin Howell',email:'Shanna@melissa.tv',phone:'010-692-6593 x09125',
web:'http://anastasia.net'},{id:3,name:'Clementine Bauch',email:'Nathan@yesenia.net',phone:'1-463-123-4447',
web:'http://ramiro.info'},{id:4,name:'Patricia Lebsack',email:'Julianne.OConner@kory.org',phone:'493-170-9623 x156',
web:'http://kale.biz'},{id:5,name:'Chelsey Dietrich',email:'Lucio_Hettinger@annie.ca',phone:'(254)954-1289',
web:'http://demarco.info'},{id:6,name:'Mrs. Dennis Schulist',email:'Karley_Dach@jasper.info',phone:'1-477-935-8478 x6430',
web:'http://ola.org'},{id:7,name:'Kurtis Weissnat',email:'Telly.Hoeger@billy.biz',phone:'210.067.6132',
web:'http://elvis.io'},{id:8,name:'Nicholas Runolfsdottir V',email:'Sherwood@rosamond.me',phone:'586.493.6943 x140',
web:'http://jacynthe.com'},{id:9,name:'Glenna Reichert',email:'Chaim_McDermott@dana.io',phone:'(775)976-6794 x41206',
web:'http://conrad.com'},{id:10,name:'Clementina DuBuque',email:'Rey.Padberg@karina.biz',phone:'024-648-3804',
web:'http://ambrose.net'},
])
const [newName,setNewName]=useState('');
const [newEmail,setNewEmail]=useState('');
const [newPhone,setNewPhone]=useState('');
const [newWeb,setNewWeb]=useState('');

const deleteCard=(cardId)=>{
  const updatedCards=cards.filter(card=>card.id!==cardId);
  setCards(updatedCards)
};

const updateData=(ID)=>{
  setCards((prevData)=>prevData.map((item)=>
  item.id===ID?{...item,name:newName,email:newEmail,phone:newPhone,web:newWeb}:item))

}
console.log(newName)

  return (
    <div className="container">
     {cards.map((card)=>(
     <Card id={card.id} name={card.name} mail={card.email} phone={card.phone} web={card.web} 
     onDelete={deleteCard}
     handleUpdate={updateData}
     setName={setNewName}
     setEmail={setNewEmail}
     setPhone={setNewPhone}
     setWeb={setNewWeb}
     newName={newName}
     newEmail={newEmail}
     newPhone={newPhone}
     newWeb={newWeb}
     />
     ))}
    </div>
  );
}



export default App;
