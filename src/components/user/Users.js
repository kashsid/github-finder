import React from "react";
import Useritem from './Useritem';


const Users=({users})=> {
  return (
     
      <div className="grid-3">
        {users.map(user => (
          <Useritem key={user.id} user={user}/>
        ))}
      </div>
    );
  }


export default Users;
