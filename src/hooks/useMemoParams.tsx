import React, {FC} from 'react'
import {  RouteComponentProps } from 'react-router-dom'

export default (Children: FC) => ({ match: { params } }: RouteComponentProps) => <Children {...params} />;
