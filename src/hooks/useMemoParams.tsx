import React, {FC} from 'react'
import {  RouteComponentProps } from 'react-router-dom'

export default (Children: FC<{pathname?: string}>) => ({ match: { params } }: RouteComponentProps) => <Children {...params} />;
