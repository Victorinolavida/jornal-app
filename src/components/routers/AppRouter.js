import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import JornalScreen from "../jornal/JornalScreen";
import AuthRouter from "./AuthRouter";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "../../actions/auth";

import PublicRoute from "../routers/PublicRoute";
import PrivateRoute from "../routers/PrivateRoute";
import { startLoadingNotes } from "../../actions/notes";

export default function AppRouter() {
  const dispatch = useDispatch();

  const [cheaking, setCheaking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      // console.log(user);
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
        setCheaking(false);

        dispatch(startLoadingNotes(user.uid));
      } else {
        setIsLoggedIn(false);
        setCheaking(false);
      }
    });
  }, [dispatch, setCheaking, setIsLoggedIn]);

  if (cheaking) {
    return <h1>wait......</h1>;
  }

  return (
    <div>
      <Router>
        <Switch>
          {/* <Route path="/auth" component={AuthRouter} /> */}

          <PublicRoute
            path="/auth"
            isAuthenticated={isLoggedIn}
            component={AuthRouter}
          />
          <PrivateRoute
            isAuthenticated={isLoggedIn}
            path="/"
            component={JornalScreen}
          />

          {/* <Route exact path="/" component={JornalScreen} /> */}

          {/* <Redirect to="/auth/login" /> */}
        </Switch>
      </Router>
    </div>
  );
}
