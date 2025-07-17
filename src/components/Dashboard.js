import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://backend:5000/api/book-visits', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBookings(response.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
      if (error.response && error.response.status === 401) {
        alert('Unauthorized! Please login again.');
        navigate('/login');
      }
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this booking?")) return;
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://backend:5000/api/book-visits/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBookings(bookings.filter((b) => b._id !== id));
    } catch (error) {
      console.error('Error deleting booking:', error);
    }
  };

  const handleToggleVisited = async (id, visited) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.patch(
        `http://backend:5000/api/book-visits/${id}`,
        { visited: !visited },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setBookings(
        bookings.map((b) => (b._id === id ? response.data : b))
      );
    } catch (error) {
      console.error('Error updating visited status:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login'); 
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.href = '/login';
    } else {
      fetchBookings();
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Navigation Bar */}
      <div className="bg-white shadow-md rounded-lg mb-6 p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Dashboard</h1>
        <div className="flex gap-4">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            onClick={() => navigate('/')}
          >
            Home
          </button>
          <button
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookings.length === 0 ? (
          <p className="text-center text-gray-500 col-span-full">
            No booking requests found.
          </p>
        ) : (
          bookings.map((booking) => (
            <div key={booking._id} className="bg-white shadow-md rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-blue-600">
                  {booking.first_name} {booking.last_name}
                </h2>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    booking.visited
                      ? 'bg-green-100 text-green-600'
                      : 'bg-yellow-100 text-yellow-600'
                  }`}
                >
                  {booking.visited ? 'Visited' : 'Pending'}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-2">
                <strong>Email:</strong> {booking.email}
              </p>
               <p className="text-gray-600 text-sm mb-2">
                <strong>Address:</strong> {booking.address}
              </p>
               <p className="text-gray-600 text-sm mb-2">
                <strong>Phone no:</strong> {booking.phone}
              </p>
              <p className="text-gray-600 text-sm mb-2">
                <strong>Services:</strong> {booking.service.join(', ')}
              </p>
              <p className="text-gray-600 text-sm mb-2">
                <strong>Brief info:</strong> {booking.message}
              </p>
              <p className="text-gray-500 text-xs">
                <strong>Booked on:</strong>{' '}
                {new Date(booking.created_at).toLocaleString()}
              </p>
              <div className="flex justify-between items-center mt-4">
                <button
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                  onClick={() => handleDelete(booking._id)}
                >
                  Delete
                </button>
                <div className="flex items-center gap-2">
                  <label className="text-sm text-gray-600">Mark as visited</label>
                  <input
                    type="checkbox"
                    checked={booking.visited}
                    onChange={() =>
                      handleToggleVisited(booking._id, booking.visited)
                    }
                    className="w-5 h-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;
