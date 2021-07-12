import { Route, Switch, Redirect } from 'react-router-dom';
import { useContext } from 'react'

import DatosAuto from './Process/index'
import Gracias from './Gracias'
import Layout from 'layout/Main'

import  appCtx, { IContext } from 'context'


const NotFound = () => (<h1>NOT FOUND</h1>)

const Web = () => {
  const context = useContext<IContext>(appCtx)

  if (!context.name) return <Redirect to="/login" />

  return (
    <Layout>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <Redirect
              to={{
                pathname: '/datos-auto',
              }}
            />
          }}
        />
        <Route path="/datos-auto">
          <DatosAuto />
        </Route>
        <Route path="/gracias">
          <Gracias />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  )
}

export default Web
