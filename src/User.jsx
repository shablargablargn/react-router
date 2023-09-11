import { useParams, Link } from 'react-router-dom';

const User = ({users})=> {
    const params = useParams();
    const id = params.id*1;
  
    const user = users.find(user => user.id === id);
  
    if(!user) {
      return null;
    }
    
    return (
      <div>
        <h1>Detail for User {user.name}</h1>
      <Link to='/users'>Back to All Users
      </Link>
      </div>
    )
  };

export default User