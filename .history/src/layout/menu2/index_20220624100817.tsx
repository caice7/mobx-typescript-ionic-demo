import { IonContent, IonHeader, IonPage, IonToolbar } from "@ionic/react";
import React from "react";

const Trade: React.FC = (props: any) => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          商机
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        商机
      </IonContent>
    </IonPage>
  );
};

export default Trade;