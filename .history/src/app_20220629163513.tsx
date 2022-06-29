
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from '@ionic/react';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';

import Menu1 from './layout/menu1';
import Menu2 from './layout/menu2';
import Menu3 from './layout/menu3';
import Page from './layout/menu1/page';
import { calendar, map, informationCircle } from 'ionicons/icons';

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
          <Route exact path="/menu1">
            <Menu1 />
          </Route>
          <Route exact path="/menu2">
            <Menu2 />
          </Route>
          <Route exact path="/menu3">
            <Menu3 />
          </Route>
          <Route exact path="/">
            <Redirect to="/menu1" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="menu1" href="/menu1">
            <IonIcon icon={calendar} />
            <IonLabel>菜单1</IonLabel>
          </IonTabButton>
          <IonTabButton tab="menu2" href="/menu2">
            <IonIcon icon={map} />
            <IonLabel>菜单2</IonLabel>
          </IonTabButton>
          <IonTabButton tab="menu3" href="/menu3">
            <IonIcon icon={informationCircle} />
            <IonLabel>菜单3</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
      <Route exact path="/page">
        <Page />
      </Route>
    </IonReactRouter>
  </IonApp>
}
