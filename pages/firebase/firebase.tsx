import firebase from "./fbConfig";

export default function firebaseTest(){
    const db = firebase.firestore();
    // index.tsx 
    const addVoteDocument = async (vote: string) => {
        await db.collection("votes").doc("1123123").set({
        vote,
        });
    };
    return null;
}
