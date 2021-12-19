import {useEffect, useState} from 'react';

function Users() {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect (() =>{
       fetch('https://jsonplaceholder.typicode.com/users')
       .then((res) => res.json()) //önce json yapısına cevirmek gerekiyor. res fonk.
       .then((data) => setUsers(data)) //data değişken adı
       .finally(() => setIsLoading(false)); //veri çekince false döner loading yazısı kaybolur
    },[])


    return (
        <div>
           <h1>Users - Fetch</h1>
           {/* veri gelene kadar loading yazısını göstermek için */}
           { isLoading && <div>Loading..</div>} 

           {users.map((user , key) => (<div key={key}>{user.name}</div>))}
         
        </div>
    )
}

export default Users;
 