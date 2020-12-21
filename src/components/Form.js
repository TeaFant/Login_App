import React from 'react';

function Form({login, user, setUser, checked, checkbox, errors}) {
    const condition = !user.name || !user.email || !user.password;
    
    return (
      <div className="box">
        <h1>Welcome to my App</h1>
        <p className="box-p">Please login to continue</p>
        <form className="form" onSubmit={login}>
          <input 
            type="text" 
            value={user.name}
            name="name" 
            placeholder="Your name"
            onChange={e=> setUser({...user, name: e.target.value})}
          />
          <input 
            type="email" 
            value={user.email}
            name="email" 
            placeholder="Your email" 
            onChange={e=> setUser({...user, email: e.target.value})}
          />
          {errors.email && <p className="message">{errors.email}</p>}
          <input 
            type="password" 
            value={user.password} 
            name="password" 
            placeholder="Your password" 
            onChange={e=> setUser({...user, password: e.target.value})}
          />
          {errors.password && <p className="message">{errors.password}</p>}
          <div className="checkbox">
            <input
              type="checkbox"
              checked={checked} 
              onChange={checkbox}
              disabled={condition}
              id="checkbox"
            />
            <label htmlFor="checkbox">Remember me</label>
          </div>
          <input className="btn" type="submit" value="Login" disabled={condition} />
        </form>
      </div>
    );
  }
  
  export default Form;