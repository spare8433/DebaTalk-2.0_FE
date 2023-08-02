import { axiosInstance } from '@api/index'
import axios from 'axios'
import getConfig from 'next/config'
import React from 'react'

const TestPage = () => {
  // const { publicRuntimeConfig } = getConfig()
  // const APISeverUrl = publicRuntimeConfig.API_SERVER_URL

  function axiosGet() {
    axios.get('port-0-debatalk-2-0-be-3zspi2nlg9csqcl.sel3.cloudtype.app/user/login')
  }

  function axiosInstanceGet() {
    axiosInstance('user').get('login')
  }

  return (
    <div>
      <button type="button" onClick={() => axiosGet()}>
        axios
      </button>
      <button type="button" onClick={() => axiosInstanceGet()}>
        axiosinstance
      </button>
    </div>
  )
}

export default TestPage
