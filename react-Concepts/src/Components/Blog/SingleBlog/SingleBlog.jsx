import React from 'react';
import "./SingleBlog.css"

const SingleBlog = (props) => {
   const {id , name , email , address , phone, website} = props.user ;
   const {street, suite, city, zipcode} = address ;
    
           return (
        <div className='singleBlog'>
            <h4>Name is : {name}</h4>
            <h5>Email is : {email}</h5>
            <h5>Address : {street}, {suite} , {zipcode}, {city}</h5>
            <h6>Contact : {phone}</h6>
            <h6>Website : {website}</h6>
            <button onClick={()=> props.remove(id)} >Delete</button>
        </div>
    );
};

export default SingleBlog;