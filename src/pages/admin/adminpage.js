import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import String from '../../utils';

const AdminPage =() =>{
  const {adminHeading} = String
    const {logout,productheading}= String
    const Navigate = useNavigate();

    const handleLogout = async () =>{
        try{
            await signOut(auth);
            Navigate('/');
        }catch(error){
            console.log(error.message);
        }
    };
    return(
        <div>
            <h1 className="text-black">{adminHeading}</h1>
            <nav className="navbar">
      <div className="nav-content">
        <button
          onClick={handleLogout}
          className="logout-button"
        >
          {logout}
        </button>
      </div>
    </nav>
        </div>
    )
}

export default AdminPage