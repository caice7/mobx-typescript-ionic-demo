import { IonContent, IonHeader, IonPage, IonToolbar } from "@ionic/react";
import React from "react";

const Service: React.FC = (props: any) => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          服务
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        服务
      </IonContent>
    </IonPage>
  );
};

export default Service;