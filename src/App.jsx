import './App.css';
import { useState } from 'react';
import {nanoid} from 'nanoid';
import Table from './Table'


function App() {
  const [user, setUser] = useState([])

  const [addUser,setAddUser]=useState({
    especie:'',cantidad:'',precio:''
  })

  const handleChange=(e)=>{
    e.preventDefault();
    const fieldName=e.target.getAttribute('name');
    const fieldValue= e.target.value;
    const newFormData={...addUser};
    newFormData[fieldName]=fieldValue;
    setAddUser(newFormData)
  }

  const handleAddForm=(e)=>{
    e.preventDefault();
    const total=addUser.cantidad*addUser.precio
    const newUser={
      id:nanoid(),
      especie:addUser.especie,
      cantidad:addUser.cantidad,
      precio:addUser.precio,
      total,
    };
    const newFormData=[...user,newUser];
    setUser(newFormData);
  }
  console.log(user)

  return (
    <div className="App">
      <table className='table'>
        <thead>
          <tr>
            <th className='slot'>ESPECIE</th>
            <th className='slot'>CANTIDAD</th>
            <th className='slot'>PRECIO COMPRA</th>
            <th className='slot'>TOTAL VALORIZADO</th>
            <th className='slot'>ACCION</th>
          </tr>
        </thead>
        <tbody>
          <Table user={user} setUser={setUser}/>
        </tbody>
      </table>
      <h2>Add a User</h2>
      <form onSubmit={handleAddForm}>
        <label htmlFor="">ESPECIE</label>
        <input
          type="text"
          name="especie"
          placeholder="especie"
          required
          onChange={handleChange}
        />
        <label htmlFor="">CANTIDAD</label>
        <input
          type="number"
          name="cantidad"
          placeholder="cantidad"
          required
          onChange={handleChange}
        />
        <label htmlFor="">PRECIO</label>
        <input
          type="number"
          name="precio"
          placeholder="precio"
          required
          onChange={handleChange}
        />
        <label htmlFor="">TOTAL</label>
        <input
          name="total"
          placeholder="total"
          readOnly="readonly"
        />
        <button type="submit">+</button>
      </form>
    </div>
  );
}

export default App;
