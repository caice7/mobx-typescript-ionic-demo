import { IonContent, IonHeader, IonPage, IonToolbar } from "@ionic/react";
import React from "react";

const Trade: React.FC = (props: any) => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          页面2
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        页面2
      </IonContent>
    </IonPage>
  );
};

export default Trade;