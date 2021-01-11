import Firebase from 'firebase/app';
import 'firebase/firestore';
import fsConfig from './config';

const config = fsConfig;

const App = Firebase.initializeApp(config);
const Firestore = App.firestore();
Firestore.settings({ timestampsInSnapshots: true }); //Pour transformer les dates en timestamp, check dans la doc de firestore

export default {

    create(ideas){
        return Firestore.collection('ideas').add(ideas); //retourne une promesse au moment où les donnnées sont lues avec succès
    },

    read(){
        return Firestore.collection('ideas').get(); //cela nous retourne une promesse au moment où les donnnées sont lues avec succès
    },
}

