import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { useUser } from "../context/useUser";

export const AuthenticationMode = Object.freeze({
    Login: 'Login',
    Register: 'Register'
})

export default function Authentication({authenticationMode}) {
  const { user, setUser, signUp, signIn} = useUser();
  const navigate = useNavigate();

  const handleSubmit = async(e) =>{
    e.preventDefault();
    try {
      if (authenticationMode === AuthenticationMode.Register) {
        await signUp();
        navigate('/signin');
      } else {
        await signIn();
        navigate('/');
      }
    } catch (error) {
      const message = error.response && error.response.data ? error. response.data.error : error;
      alert(message);
    }
  }

    return(
        <div>
        <h3>{authenticationMode === AuthenticationMode.Login ? 'Sign in' : 'Sign up'}</h3>
        <form>
         <div>
            <label>Email</label>
            <input type="email" />
         </div>
        
        <div>
        <label>Password</label>
        <input type="password" />
      </div>
      <div>
        <button>{authenticationMode === AuthenticationMode.Login ? 'Sign in' : 'Sign up'}</button>
      </div>
      <div>
        <Link>
        {authenticationMode === AuthenticationMode.Login ? 'No account? Sign up' : 'Already signed up? Sign in'}
        </Link>
      </div>
      </form>
      </div>
    )
}
      
      
      


