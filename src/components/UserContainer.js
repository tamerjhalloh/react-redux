import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux";

function UserContainer({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
    // return () => {
    //     cleanup
    // }
  }, []);

  return userData.loading ? (
    <h3>loading...</h3>
  ) : userData.error ? (
    <h4>{userData.error}</h4>
  ) : (
    <div>
      <h2>User List</h2>
      <div>
        {userData && 
          userData.users &&
          userData.users.map((user) => <p key={user.id}>{user.name}</p>)}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.userData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
