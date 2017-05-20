// Resume! :D
import React from 'react'
import ReactDOM from 'react-dom'
import { IntlProvider } from 'react-intl'
import { Resume } from 'sections'
import 'jquery'


const locale = 'en'

ReactDOM.render(
  <IntlProvider locale={locale}>
    <Resume />
  </IntlProvider>,
  document.getElementById("root")
)


