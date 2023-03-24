import React, { useEffect , useState} from 'react';
import SingleBlog from './SingleBlog/SingleBlog';
import "./Blog.css"

const Blog = () => {
    const [users , setUsers] = useState([]);
    useEffect( ()=> {
        fetch ("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then (data => setUsers(data))
    } , [])

    function remove (id ){
        const emptyArr = [];
            users.filter(filterUser => {
            const data = filterUser.id;
            if (data != id) {
                emptyArr.push(filterUser);
                setUsers(emptyArr)
                // console.log(filterData);
                // console.log(filterUser)
                // console.log(users)
                
            }
        } )
        
    }
    return (
        <div>
            <h1 className='blogTitle'>Blog Article is here</h1>
            <div className='blogContainer'>
                {
                    users.map(user => <SingleBlog user = {user} key={user.id} remove ={remove}></SingleBlog>)
                }
            </div>
        </div>
    );
};

export default Blog;