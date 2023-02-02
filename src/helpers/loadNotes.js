import { collection, getDocs } from "firebase/firestore/lite";
import { useDispatch } from "react-redux";
import { FirebaseDB } from "../firebase/config";
import { setNotes } from "../store/journal";

export const loadNotes = async (uid = "") => {
  // const dispatch = useDispatch();

  if (!uid) throw new Error("El UID del usuario no existe");

  const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`);
  const docs = await getDocs(collectionRef);

  const notes = [];
  docs.forEach((doc) => {
    notes.push({ id: doc.id, ...doc.data() });
  });

  return notes;
};
