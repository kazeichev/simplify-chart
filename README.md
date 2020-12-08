# simplify-chart ([demo](https://kazeichev.github.io/simplify-chart/))

> Simple horizontal bar chart. Simplify!

[![NPM](https://img.shields.io/npm/v/simplify-chart.svg)](https://www.npmjs.com/package/simplify-chart) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save simplify-chart
```

## Usage

```jsx
import React, { Component } from 'react'

import { HorizontalBarChart } from "simplify-chart"

class Example extends Component {
  render() {
    return <HorizontalBarChart
                data={{
                 'Championship winners in 2020': 24000,
                 'Number of purchased products per month': 13200,
                 'Empty data': 0,
                 'Car\'s count': 3600
                }}
                options={{
                    margin: {},
                    padding: {},
                    label: {},
                    tick: {},
                    tickLabel: {}
                }}
            />
  }
}
```

## Default Options

```
options = {
    margin: {
        top: 5,
        right: 5,
        bottom: 5,
        left: 5
    },
    padding: {
        top: 5,
        right: 5,
        bottom: 5,
        left: 5
    },
    label: {
        width: 200,
        font: {
            fontSize: 16,
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
            lineHeight: 'inherit',
            color: '#000000'
        }
    },
    tick: {
        backgroundColor: '#4c26e5',
        borderRadius: 5,
        height: 10,
        padding: {
            top: 5,
            right: 5,
            bottom: 5,
            left: 5
        }
    },
    tickLabel: {
        display: true,
        marginLeft: 10,
        font: {
            fontSize: 14,
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
            lineHeight: 'inherit',
            color: '#000000'
        }
    }
}
```

## Preview

![123](https://i.ibb.co/ZWMzjVy/simplify-chart-1.png)

## License

MIT © [Nikita Kazeichev](https://github.com/kazeichev)
