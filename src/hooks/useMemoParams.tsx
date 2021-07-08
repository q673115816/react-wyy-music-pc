import React, {FunctionComponent} from 'react'
import {  RouteComponentProps } from 'react-router-dom'

export default (Children: FunctionComponent) => ({ match: { params } }: RouteComponentProps) => <Children {...params} />;
