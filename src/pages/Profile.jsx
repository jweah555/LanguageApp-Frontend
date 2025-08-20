import "../pages/Profile.css";

import "../pages/CreateDeck.css";

function Profile() {
  return (
    <main>
      <div className="profile-container">
        <h1>Your Profile</h1>
        <form className="profile-page">
          <input value="Sam"></input>
          <input value="Johnson"></input>
          <input value="English"></input>
          <input value=" Role: User"></input>
          <input value=" Deck Count: 3"></input>
        </form>
        <button className="profile-button">Update Profile</button>
      </div>
    </main>
  );
}

export default Profile;
