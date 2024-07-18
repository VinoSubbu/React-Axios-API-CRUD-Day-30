import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CreateUser from './CreateUser';
import Modal from './Modal';
import '../assets/styles/common.css';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching the data', error);
      }
    };
    fetchData();
  }, []);

  const addUser = async (user) => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', user);
      setUsers([...users, response.data]);
      setShowModal(false); // Close the modal after adding user
    } catch (error) {
      console.error('Error adding user', error);
    }
  };

  const editUser = async (user) => {
    try {
      const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${user.id}`, user);
      setUsers(users.map((u) => (u.id === user.id ? response.data : u)));
      setIsEditing(false);
      setCurrentUser(null);
      setShowModal(false); // Close the modal after editing user
    } catch (error) {
      console.error('Error editing user', error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error('Error deleting user', error);
    }
  };

  const handleEditClick = (user) => {
    setIsEditing(true);
    setCurrentUser(user);
    setShowModal(true); // Open the modal for editing user
  };

  const handleAddUserClick = () => {
    setIsEditing(false);
    setCurrentUser(null);
    setShowModal(true); // Open the modal for adding user
  };

  return (
    <div>
      <div className='dashboard-head'>
        <div>
        <h1 className='user-table'>User Table</h1>
        </div>
        <div>
        <button className="add-user-btn" onClick={handleAddUserClick}>Add User</button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
              <td>{user.company.name}</td>
              <td>
                <button className="edit" onClick={() => handleEditClick(user)}>Edit</button>
                <button className="delete" onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && (
        <Modal show={showModal} handleClose={() => setShowModal(false)}>
          <CreateUser
            addUser={addUser}
            editUser={editUser}
            currentUser={currentUser}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
          />
        </Modal>
      )}
    </div>
  );
};

export default Dashboard;
