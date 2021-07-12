import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom'
import AppContext, { data } from 'context'

import Web from './web'
import Login from './login'

const Router = () => {

  return (
    <AppContext.Provider value={data}>
      <BrowserRouter>
        <Switch>
          {/* <Route
            exact
            path="/"
            render={() => {
              if (!data.name) return <Redirect to="/login" />
            }}
          /> */}
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Web />
          </Route>
        </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default Router
