import React, { FC, memo } from "react";
import { Route, Navigate } from "react-router-dom";

interface iProps {}

const PrivateRoute: FC<iProps> = ({ children, ...rest }) => {
  const user = true;
  return (
    <Route
      {...rest}
      element={({ location }: { location: any }) =>
        user ? children : <Navigate to={"/login"} state={{ from: location }} />
      }
    />
  );
};

export default memo(PrivateRoute);
