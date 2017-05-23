// Resume! :D
import React from 'react'
import ReactDOM from 'react-dom'
import { IntlProvider } from 'react-intl'
import { Resume } from 'sections'
import 'jquery'
import data from 'data'

const locale = 'en'

ReactDOM.render(
  <IntlProvider locale={locale}>
    <Resume data={data} />
  </IntlProvider>,
  document.getElementById("root")
)


