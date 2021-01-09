import React from "react";
import { Route } from "react-router-dom";
import TemplateShopping from "../TemplateShopping";
export default function RouterShopping(props) {
  const { component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(routerProps) => {
        return (
          <TemplateShopping>
            <Component {...routerProps} />
          </TemplateShopping>
        );
      }}
    />
  );
}
