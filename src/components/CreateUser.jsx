import React, { useState, useEffect } from 'react';
import '../assets/styles/common.css';

const CreateUser = ({ addUser, editUser, currentUser, isEditing, setIsEditing }) => {
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    address: { street: '', suite: '', city: '', zipcode: '' },
    phone: '',
    website: '',
    company: { name: '' },
  });

  useEffect(() => {
    if (isEditing && currentUser) {
      setUser(currentUser);
    } else {
      setUser({
        name: '',
        username: '',
        email: '',
        address: { street: '', suite: '', city: '', zipcode: '' },
        phone: '',
        website: '',
        company: { name: '' },
      });
    }
  }, [isEditing, currentUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      address: {
        ...prevUser.address,
        [name]: value,
      },
    }));
  };

  const handleCompanyChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      company: {
        ...prevUser.company,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      editUser(user);
    } else {
      addUser(user);
    }
    setUser({
      name: '',
      username: '',
      email: '',
      address: { street: '', suite: '', city: '', zipcode: '' },
      phone: '',
      website: '',
      company: { name: '' },
    });
    setIsEditing(false);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>{isEditing ? 'Edit User' : 'Add User'}</h2>
      <div className="form-group">
        <label>Name:</label>
        <input type="text" name="name" value={user.name} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Username:</label>
        <input type="text" name="username" value={user.username} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input type="email" name="email" value={user.email} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Street:</label>
        <input type="text" name="street" value={user.address.street} onChange={handleAddressChange} required />
      </div>
      <div className="form-group">
        <label>Suite:</label>
        <input type="text" name="suite" value={user.address.suite} onChange={handleAddressChange} />
      </div>
      <div className="form-group">
        <label>City:</label>
        <input type="text" name="city" value={user.address.city} onChange={handleAddressChange} required />
      </div>
      <div className="form-group">
        <label>Zipcode:</label>
        <input type="text" name="zipcode" value={user.address.zipcode} onChange={handleAddressChange} required />
      </div>
      <div className="form-group">
        <label>Phone:</label>
        <input type="text" name="phone" value={user.phone} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Website:</label>
        <input type="text" name="website" value={user.website} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Company Name:</label>
        <input type="text" name="name" value={user.company.name} onChange={handleCompanyChange} required />
      </div>
      <button type="submit" className="submit-btn">{isEditing ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default CreateUser;