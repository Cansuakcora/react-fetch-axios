import {useEffect, useState} from 'react';
import axios from 'axios';

function Axios() {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect (() =>{
       axios('https://jsonplaceholder.typicode.com/users')
       .then((res) => setUsers(res.data)) //fetch ile farkı json işlemini manuel yazmıyoruz
       .finally(() => setIsLoading(false)); //veri çekince false döner loading yazısı kaybolur
    },[])

    return (
         <div>
           <h1>Users - Axios</h1>
           {/* veri gelene kadar loading yazısını göstermek için */}
           { isLoading && <div>Loading..</div>} 

           {users.map((user , key) => (<div key={key}>{user.name}</div>))}
         
        </div>
    )
}

export default Axios;
