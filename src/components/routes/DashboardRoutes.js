import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import { HeroScreen } from '../pages/HeroScreen';
import { HomeScreen } from '../pages/HomeScreen'
import { SearchScreen } from '../pages/SearchScreen'
import { Navbar } from '../ui/Navbar';

export const DashboardRoutes = () => {
    return (

        <>
            <Navbar />

            <div className="container mt-3">
                <Switch>
                    <Route exact path="/search" component={ SearchScreen } />
                    <Route exact path="/hero/:heroeId" component={ HeroScreen } />
                    <Route exact path="/" component={ HomeScreen } />
                    <Redirect to="/" />
                </Switch>
            </div>
        </>

    )
}
