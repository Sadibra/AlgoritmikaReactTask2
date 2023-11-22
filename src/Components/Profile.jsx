import React from 'react'
import Name from './Name'
import Email from './Email'
import Address from './Address'
import PersonInfo from './PersonInfo'

const Profile = () => {
  return (
    <div className='container'> 
        <div>
          <Name />
          <Email />
          <Address />
          <PersonInfo />
        </div>
    </div>
  )
}

export default Profile