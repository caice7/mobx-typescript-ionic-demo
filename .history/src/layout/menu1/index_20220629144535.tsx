import { IonContent, IonHeader, IonInfiniteScroll, IonInfiniteScrollContent, IonList, IonPage, IonSearchbar, IonToolbar, useIonViewWillEnter } from "@ionic/react";
import React, { useState } from "react";
import Advertise from "../../components/Advertise";
import { getPic } from "../../util/tool";
import styles from './index.module.less';

const Main: React.FC = () => {
  const setSearchText = (value: string) => {
    console.log(value)
  }
  const menuList = [
    { name: '会员中心', img: 'hyzx.png' },
    { name: '供求信息', img: 'gqxx.png' },
    { name: '机械设备', img: 'jxsb.png' },
    { name: '客服中心', img: 'kfzx.png' },
    { name: '商机服务', img: 'sjfw.png' },
    { name: '新闻资讯', img: 'xwzx.png' },
    { name: '行情报价', img: 'hqbj.png' },
    { name: '企业认证', img: 'qyrz.png' },
  ]
  const commandList = [
    { img: 'http://192.168.1.138:8089/h5/v1.01/images/%E9%A6%96%E9%A1%B5/u1188.png', url: '/recommend' },
    { img: 'http://192.168.1.138:8089/h5/v1.01/images/%E9%A6%96%E9%A1%B5/u1189.png', url: '/recommend' },
    { img: 'http://192.168.1.138:8089/h5/v1.01/images/%E9%A6%96%E9%A1%B5/u1190.png', url: '/recommend' },
    { img: 'http://192.168.1.138:8089/h5/v1.01/images/%E9%A6%96%E9%A1%B5/u1191.png', url: '/recommend' },
  ]

  const [data, setData] = useState<object[]>([]);
  const [isInfiniteDisabled, setInfiniteDisabled] = useState(false);

  const pushData = () => {
    const max = data.length + 20;
    const min = max - 20;
    const newData = [];
    for (let i = min; i < max; i++) {
      newData.push({
        name: '本公司专业生产大中小型塑料粉碎 清洗 甩干 打包设备',
        province: '河北省',
        city: '邯郸市',
        price: 123,
        priceUnit: '元',
        quotedPrice: 0,
        priceDescribe: '自定义价格内容',
      });
    }

    const total = [...data, ...newData];
    if (total.length > 30) {
      setInfiniteDisabled(true);
    }

    setData(total);
  }
  const loadData = (ev: any) => {
    setTimeout(() => {
      pushData();
      ev.target.complete();
    }, 500);
  }

  useIonViewWillEnter(() => {
    pushData();
  });
  return <IonPage>
    <IonHeader>
      <IonToolbar>
        <div className={styles.search}>
          <div>{getPic('logo-min.png', 'logo')}</div>
          <div>
            <IonSearchbar placeholder="废塑料" onClick={() => setSearchText}></IonSearchbar>
          </div>
        </div>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <div className={styles.main}>
        <Advertise />
        <div className={styles.menus}>
          {menuList.map((m: any, k: number) => <div key={k}>
            {getPic('menu/' + m.img)}
            <div>{m.name}</div>
          </div>)}
        </div>
        <div className={styles.card}>
          <a href="/recommend">
            <div className={styles.recommend}>
              <div>
                <span className={styles.bold}>今日推荐</span>
                <span className={styles.grey}>废纸优质商机推荐2021040234</span>
              </div>
              <div className={styles.grey}>＞</div>
            </div>
            <div className={styles.imgs}>
              {commandList.map((c: any, k: number) => <div key={k}>
                {getPic(c.img)}
              </div>)}
            </div>
          </a>
        </div>

        <IonList>
          {data.map((trade, index) => <div className={styles.card} key={index}>

          </div>
          )}
        </IonList>

        <IonInfiniteScroll
          onIonInfinite={loadData}
          threshold="100px"
          disabled={isInfiniteDisabled}
        >
          <IonInfiniteScrollContent
            loadingSpinner="bubbles"
            loadingText="正在请求更多商机……"
          />
        </IonInfiniteScroll>
      </div>
    </IonContent>
  </IonPage>;
};

export default Main;