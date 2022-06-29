import { IonContent, IonHeader, IonPage, IonToolbar } from "@ionic/react";
import React from "react";

const Service: React.FC = (props: any) => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          页面3
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        页面3
      </IonContent>
    </IonPage>
  );
};

export default Service;