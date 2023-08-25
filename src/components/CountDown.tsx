
'use client'

import React, { useState,  } from 'react'
import Countdown from 'react-countdown'

const CountDown = () => {
  const [endingDate, setEndingDate] = useState(new Date(Date.now() + 10 * 60 * 1000)) // Current time + 10 minutes

  return (
    <Countdown className='font-bold text-5xl text-yellow-300' date={endingDate}/>
  )
}

export default CountDown
