import React, { useContext } from 'react'
import styled from 'styled-components'

import { AuthContext } from 'contexts/auth'

const Login = () => {
  const { login } = useContext(AuthContext)

  return (
    <Container>
      <h1>Login</h1>
      <button onClick={login}>Login</button>
    </Container>
  )
}

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export default Login
