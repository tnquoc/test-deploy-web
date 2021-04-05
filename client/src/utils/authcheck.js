import React, { useEffect, useContext } from 'react';
import history from 'src/utils/history';
import Context from 'src/utils/context';

import axios from 'axios';

const AuthCheck = () => {
  const context = useContext(Context)


  useEffect(() => {
    if (context.authObj.isAuthenticated()) {
      const profile = context.authObj.userProfile
      context.handleUserLogin()
      context.handleUserAddProfile(profile)
      axios.post('/api/posts/userprofiletodb', profile)
        .then(axios.get('/api/get/userprofilefromdb', { params: { email: profile.profile.email } })
          .then(res => context.handleAddDBProfile(res.data)))
        .then(history.replace('/'))
    }
    else {
      context.handleUserLogout()
      context.handleUserRemoveProfile()
      context.handleUserRemoveProfile()
      history.replace('/')
    }
  }, [context.authObj.userProfile, context])

  return (
    <div>
    </div>
  )
}

export default AuthCheck;