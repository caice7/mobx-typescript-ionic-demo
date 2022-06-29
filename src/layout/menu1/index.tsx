import { IonContent, IonHeader, IonPage, IonToolbar } from "@ionic/react";
import React from "react";

const Menu1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          页面1
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        页面1
      </IonContent>
    </IonPage>
  );
};

export default Menu1;