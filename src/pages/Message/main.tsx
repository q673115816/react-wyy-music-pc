import React, { memo, lazy, FC } from 'react'
import { Switch, Route, Redirect, NavLink } from 'react-router-dom'
import useMemoParams from '@/hooks/useMemoParams'

const Local = lazy(() => import(/* webpackChunkName: "Local" */'./Local'));
const Download = lazy(() => import(/* webpackChunkName: "Download" */'./Download'));

interface Nav {
  name: string,
  to: string,
  path: string,
  children: FC
}

const navs: Nav[] = [
  {
    name: '下载管理',
    to: '/message/download',
    path: '/message/download',
    children: Download,
  },
  {
    name: '本地音乐',
    to: '/message/local',
    path: '/message/local',
    children: Local,
  },
]

export default memo(() => {
  return (
    <div>
      <div className="px-8 py-5 space-x-4 text-base">
        {navs.map(({ path, name }) => (
          <NavLink
            key={path}
            to={path}
            className=""
            activeClassName="text-xl font-black ui_underline"
          >
            {name}
          </NavLink>
        ))}
      </div>
      <Switch>
        {
          navs.map(({ path, children }) => (
            <Route path={path} key={path}>
              {useMemoParams(children)}
            </Route>
          ))
        }
        <Redirect to={'/message/download'}></Redirect>
      </Switch>
    </div>
  )
})
