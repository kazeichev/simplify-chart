import React from 'react'

import { HorizontalBarChart } from "simplify-chart";
import 'simplify-chart/dist/index.css'

const App = () => {
  return <div>
    <h1 style={{textAlign: 'center'}}>Horizontal bar chart</h1>
    <HorizontalBarChart data={{
      'Championship winners in 2020': 24000,
      'Number of purchased products per month': 13200,
      'Empty data': 0,
      'Car\'s count': 3600
    }} />
  </div>
}

export default App
