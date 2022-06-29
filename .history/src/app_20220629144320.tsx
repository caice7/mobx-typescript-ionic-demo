
import { IonApp, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from '@ionic/react';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Main from './layout/main';
import { IonReactRouter } from '@ionic/react-router';

import { getSVG } from './util/tool';
import Trade from './layout/trade';
import Service from './layout/service';
import My from './layout/my';
import Recommend from './layout/main/recommend';

declare global {
  interface Window { SYSTEM_CONFIGS: any, user: any }
}

setupIonicReact();

export default function APP() {
  document.title = window.SYSTEM_CONFIGS.title;
  return <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/main">
            <Main />
          </Route>
          <Route exact path="/trade">
            <Trade />
          </Route>
          <Route exact path="/service">
            <Service />
          </Route>
          <Route exact path="/my">
            <My />
          </Route>
          <Route exact path="/">
            <Redirect to="/main" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="main" href="/main">
            {getSVG('svg/home.svg', 'on')}
            {getSVG('svg/homeOutline.svg', 'off')}
            <IonLabel>首页</IonLabel>
          </IonTabButton>
          <IonTabButton tab="trade" href="/trade">
            {getSVG('svg/trade.svg', 'on')}
            {getSVG('svg/tradeOutline.svg', 'off')}
            <IonLabel>商机</IonLabel>
          </IonTabButton>
          <IonTabButton tab="service" href="/service">
            {getSVG('svg/service.svg', 'on')}
            {getSVG('svg/serviceOutline.svg', 'off')}
            <IonLabel>服务</IonLabel>
          </IonTabButton>
          <IonTabButton tab="my" href="/my">
            {getSVG('svg/my.svg', 'on')}
            {getSVG('svg/myOutline.svg', 'off')}
            <IonLabel>我</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
      <Route exact path="/recommend">
        <Recommend />
      </Route>
    </IonReactRouter>
  </IonApp>
}
