import React, { useEffect, useState } from "react";
import { auth, db } from "../Firebase/firebaseSdk";
import { getDoc, doc } from 'firebase/firestore';

const  Home1 = () => {
  const [userDetails, setUserDetails] = useState(null);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);

      const docRef = doc(db, "Users", user?.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
        return
      } else {
        console.log("User is not logged in");
      }
      setUserDetails(user)

    });
  };



  useEffect(() => {

    fetchUserData();
    // fetchUserUsingGoogle();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/signin";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }
  return (
    <div>
      {userDetails ? (
        <>
          <div style={{ display: "flex", justifyContent: "center" }}>
             
          </div>
          <h3>Welcome {userDetails.fullName} 🙏🙏</h3>
          <div>
            <p>Email: {userDetails.email}</p>
            <p>First Name: {userDetails.fullName}</p>
             
          </div>
          <button className="btn btn-primary" onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
export default Home1