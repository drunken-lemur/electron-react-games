/* eslint-disable @typescript-eslint/no-shadow,react/jsx-props-no-spreading */
import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  RouteProps,
  LinkProps,
} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import PhaserGame from './PhaserGame';

import { GameConfig as AsteroidConfig } from './games/asteroid/config';

import './App.global.css';

enum Path {
  Home = '/',
  Asteroid = '/asteroid',
  About = '/about',
}

const navigation: LinkProps[] = [
  {
    to: Path.Home,
    children: 'Home',
  },
  {
    to: Path.Asteroid,
    children: 'Asteroid',
  },
  {
    to: Path.About,
    children: 'About',
  },
];

const routes: RouteProps[] = [
  {
    path: Path.Asteroid,
    // eslint-disable-next-line react/display-name
    component: () => <PhaserGame config={AsteroidConfig} />,
  },
  {
    path: Path.About,
    component: About,
  },
  {
    path: Path.Home,
    component: Home,
  },
];

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            {navigation.map((link) => (
              <li key={`${link.to}`}>
                <Link {...link} />
              </li>
            ))}
          </ul>
        </nav>

        <Switch>
          {routes.map((route) => (
            <Route key={`${route.path}`} {...route} />
          ))}
        </Switch>
      </div>
    </Router>
  );
}
