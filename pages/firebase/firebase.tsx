import { collection, addDoc } from "firebase/firestore"; 

const TodoList = () => {
    console.log("----------------------");
    const sendData = async () => {
        
        try {
            const docRef = await addDoc(collection(db, "users"), {
                first: "Ada",
                last: "Lovelace",
                born: 1815
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
    sendData();
    return <div>124</div>;
}

export default TodoList;

