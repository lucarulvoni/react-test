import React from 'react'
import './users.css';



function Users() {

    const shoot = () => {
        alert("Sballo");
    }

    const calcola = () => {
        document.write("risultato di: ", 1 + 1);
    }

    
    return (
        <>
        <div className="Utenti">
            <h1>Utenti</h1>
        </div>
        <div className="Acquisti">
            <h2>Acquisti Utenti</h2>
        </div>
        <div className="modello">
        <button onClick={shoot}>spara</button>
        </div>

        <div className="calcola">
        <button onClick={calcola}>calcola</button>
        </div>
        </>
    )
}






export default Users
