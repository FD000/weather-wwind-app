import * as React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import WeatherWrapper from "../components/Weather-Wrapper";
import Gallery from '../components/Gallery'
import Upload from '../components/Upload'

const Routes = () =>  {
    return (
    
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <WeatherWrapper />
                </Route>
                <Route path="/upload" exact>
                    <Gallery />
                </Route>
                <Route path="/gallery" exact>
                    <Upload />
                </Route>
            </Switch>
        </BrowserRouter>

    )
  }

  export default Routes