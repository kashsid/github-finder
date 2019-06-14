import React, { Component } from "react";
import Useritem from './Useritem';


export class Users extends Component {
  
  render() {
    return (
      <div className="grid-3">
        {this.props.users.map(user => (
          <Useritem key={user.id} user={user}/>
        ))}
      </div>
    );
  }
}

export default Users;
