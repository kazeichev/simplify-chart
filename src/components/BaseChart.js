import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

class BaseChart extends React.Component {
  static DEFAULT_PADDING = 15

  static propTypes = {
    padding: PropTypes.object,
    children: PropTypes.node
  }

  static defaultProps = {
    padding: {
      top: BaseChart.DEFAULT_PADDING,
      right: BaseChart.DEFAULT_PADDING,
      bottom: BaseChart.DEFAULT_PADDING,
      left: BaseChart.DEFAULT_PADDING
    }
  }

  render() {
    const { children } = this.props
    const padding = _.merge(BaseChart.defaultProps.padding, this.props.padding)

    return (
      <div
        style={{
          paddingTop: padding.top,
          paddingRight: padding.right,
          paddingBottom: padding.bottom,
          paddingLeft: padding.left
        }}
      >
        {children}
      </div>
    )
  }
}

export default BaseChart
