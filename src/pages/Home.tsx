import {useEffect} from "react";
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
const Home: React.FC = () => {
    // ===================== embed script start ===============
    // @ts-ignore
    const AvaamoChatBot=function(t){function o(t,o){var n=document.createElement("script");n.setAttribute("src",t),n.setAttribute("id","avm-web-channel"),n.onload=o,document.body.appendChild(n)}return this.options=t||{},this.load=function(t){o(this.options.url,function(){window.Avaamo.addFrame(),t&&"function"==typeof(t)&&t(window.Avaamo)})},this};
    // @ts-ignore
    const chatBox = new AvaamoChatBot({url: "https://c9.avaamo.com/web_channels/d75dc49d-f083-4b46-9257-191aea5ca339"});
    useEffect(()=>{
        chatBox.load();
    },[])
    // ===================== embed script end ===============
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Blank</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Blank</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <ExploreContainer/>
            </IonContent>
        </IonPage>
    );
};

export default Home;
