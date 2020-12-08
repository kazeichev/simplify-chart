import React from 'react'
import BaseChart from './BaseChart'
import PropTypes from 'prop-types'
import HorizontalBar from './HorizontalBar'

class HorizontalBarChart extends React.Component {
  static propTypes = {
    data: PropTypes.object,
    options: PropTypes.object,
    padding: PropTypes.object
  }

  render() {
    const { data, options, padding } = this.props
    const maxValue = Math.max(...Object.values(data))

    return (
      <BaseChart padding={padding}>
        {Object.keys(data).map((label) => {
          const value = data[label]
          const percentage = (value * 100) / maxValue

          return (
            <HorizontalBar
              label={label}
              value={value}
              percentage={percentage}
              key={label + data}
              options={options}
            />
          )
        })}
      </BaseChart>
    )
  }
}

export default HorizontalBarChart
