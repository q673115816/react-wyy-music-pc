import React, { Suspense, lazy } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

const Home = lazy(() => import('@/pages/Home'))
const Play = lazy(() => import('@/pages/Play'))
const Local = lazy(() => import('@/pages/Local'))
const Download = lazy(() => import('@/pages/Download'))

const ToplistArtist = lazy(() => import('@/pages/ToplistArtist'))

export default () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route path="/play">
                    <Play />
                </Route>
                <Route path="/local">
                    <Local />
                </Route>
                <Route path="/download">
                    <Download />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/toplistartist/:type">
                    <ToplistArtist />
                </Route>
                <Redirect to="/home" />
            </Switch>
        </Suspense>
    )
}