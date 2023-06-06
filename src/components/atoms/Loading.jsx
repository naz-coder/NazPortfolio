import React from 'react'
import styled from 'styled-components'

const Loading = () => {
  return (
    <LoadingStyle>
        <div>
            <h3>THIS SITE IS CURRENTLY BEING UPDATED: use the Email or Phone contacts</h3>
        </div>
    </LoadingStyle>
  )
}

export default Loading

export const LoadingStyle = styled.div`
    background-color: #000000;
    color: #ffffff;
    text-align: center;
    padding: 0.2rem 2rem;
    font-size: 0.8rem;
`