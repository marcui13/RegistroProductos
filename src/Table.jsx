import React from 'react'


function table(props) {
    const {user, setUser}=props
    const DeleteItem=(id)=>{
        setUser(user.filter(user => user.id !== id))
    }
    return (
        <>
        {user.map((user)=>
            <>
                <tr>
                    <td className='slot'>{user.especie}</td>
                    <td className='slot'>{user.cantidad}</td>
                    <td className='slot'>{user.precio}</td>
                    <td className='slot'>{user.total}</td>
                    <td><button className="closeButton"  onClick={() => DeleteItem(user.id) }>-</button></td>
                </tr>
            </>
        )}
        </>
    )
}

export default table