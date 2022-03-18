import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'

//removes cookie and signs user out, reroute to home page
export const UserSignOut = (props) => {
    const { context } = props;
    useEffect(() => {
        context.actions.signOut();
    },);
  
    return (
    <Redirect to='/' />
  )
}
