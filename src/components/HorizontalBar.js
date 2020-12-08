import React from 'react'
import PropTypes from 'prop-types'

export default class HorizontalBar extends React.Component {
  static DEFAULT_BAR_PADDING = 5
  static DEFAULT_BAR_MARGIN = 5
  static DEFAULT_TICK_PADDING = 5
  static MEDIA_MOBILE_SIZE = 768

  static propTypes = {
    value: PropTypes.number,
    percentage: PropTypes.number,
    label: PropTypes.string,
    options: PropTypes.object
  }

  static defaultProps = {
    value: 0,
    label: '',
    percentage: 0,
    options: {
      margin: {
        top: HorizontalBar.DEFAULT_BAR_MARGIN,
        right: HorizontalBar.DEFAULT_BAR_MARGIN,
        bottom: HorizontalBar.DEFAULT_BAR_MARGIN,
        left: HorizontalBar.DEFAULT_BAR_MARGIN
      },
      padding: {
        top: HorizontalBar.DEFAULT_BAR_PADDING,
        right: HorizontalBar.DEFAULT_BAR_PADDING,
        bottom: HorizontalBar.DEFAULT_BAR_PADDING,
        left: HorizontalBar.DEFAULT_BAR_PADDING
      },
      label: {
        width: 200,
        font: {
          fontSize: 16,
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
          lineHeight: 'inherit',
          color: '#000000'
        }
      },
      tick: {
        backgroundColor: '#4c26e5',
        borderRadius: 5,
        height: 10,
        padding: {
          top: HorizontalBar.DEFAULT_TICK_PADDING,
          right: HorizontalBar.DEFAULT_TICK_PADDING,
          bottom: HorizontalBar.DEFAULT_TICK_PADDING,
          left: HorizontalBar.DEFAULT_TICK_PADDING
        }
      },
      tickLabel: {
        display: true,
        marginLeft: 10,
        font: {
          fontSize: 14,
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
          lineHeight: 'inherit',
          color: '#000000'
        }
      }
    }
  }

  state = {
    percentage: 0
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ percentage: this.props.percentage })
    }, 500)
  }

  render() {
    const { options, label, value } = this.props
    const { percentage } = this.state

    return (
      <div
        className='horizontal-bar'
        style={{
          display: 'flex',
          flexDirection:
            window.innerWidth > HorizontalBar.MEDIA_MOBILE_SIZE
              ? 'row'
              : 'column',
          paddingTop: options.padding.top,
          paddingRight: options.padding.right,
          paddingBottom: options.padding.bottom,
          paddingLeft: options.padding.left,
          marginTop: options.margin.top,
          marginRight: options.margin.right,
          marginBottom: options.margin.bottom,
          marginLeft: options.margin.left
        }}
      >
        <div
          className='horizontal-bar__label'
          style={{
            display: 'flex',
            alignItems: 'center',
            width: options.label.width
          }}
        >
          <span
            style={{
              fontFamily: options.label.font.fontFamily,
              fontSize: options.label.font.fontSize,
              color: options.label.font.color,
              lineHeight: options.label.font.lineHeight
            }}
          >
            {label}
          </span>
        </div>

        <div
          className='horizontal-bar__tick'
          style={{
            display: 'flex',
            alignItems: 'center',
            width:
              window.innerWidth > HorizontalBar.MEDIA_MOBILE_SIZE
                ? `calc(100% - ${options.label.width}px)`
                : '100%',
            paddingTop: options.tick.padding.top,
            paddingRight: options.tick.padding.right,
            paddingBottom: options.tick.padding.bottom,
            paddingLeft: window.innerWidth > HorizontalBar.MEDIA_MOBILE_SIZE ? options.tick.padding.left : 0
          }}
        >
          <div
            style={{
              width: value === 0 ? '1px' : `${percentage}%`,
              height: options.tick.height,
              backgroundColor: options.tick.backgroundColor,
              borderRadius: options.tick.borderRadius,
              transition: 'width 1s ease-in-out'
            }}
          />
          {options.tickLabel.display && (
            <span
              style={{
                marginLeft: options.tickLabel.marginLeft,
                fontFamily: options.tickLabel.font.fontFamily,
                fontSize: options.tickLabel.font.fontSize,
                color: options.tickLabel.font.color,
                lineHeight: options.tickLabel.font.lineHeight
              }}
            >
              {value}
            </span>
          )}
        </div>
      </div>
    )
  }
}
