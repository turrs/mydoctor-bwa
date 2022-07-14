import { getDatabase, ref, child, get } from "firebase/database";
import { getAuth } from "firebase/auth";

const GetData = async (uid) => {
  let data = null;
  const dbRef = ref(getDatabase());
  await get(child(dbRef, `users/${uid}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const dataUser = snapshot.val();
        console.log("return bgst", dataUser);
        data = dataUser;
      } else {
        return console.log("No data availableeeeeeeeeeeeeeeeeeeeeeee");
      }
    })
    .catch((error) => {
      console.error(error);
    });
  console.log("return bgsteeeee", data);
  return data;
};

export default GetData;
