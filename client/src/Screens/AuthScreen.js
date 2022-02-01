import React from 'react'

const AuthScreen = () => {
  return (
    <div>
      <form>
        <h1>email</h1>
        <input type='email' placeholder='email'></input>
        <h2>password</h2>
        <input type='password' placeholder='password'></input>
        <button>Giriş yap</button>
      </form>
    </div>
  )
}

export default AuthScreen
