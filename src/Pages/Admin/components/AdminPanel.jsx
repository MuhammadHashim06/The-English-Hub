import  { useState, useEffect } from "react";
import { Table, Button, Modal, Spin } from "antd";
import axios from "axios";

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [detailVisible, setDetailVisible] = useState(false);

  // Fetch user list
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:5000/list-users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  // Activate/Deactivate user
  const handleStatusChange = async (uid, action) => {
    try {
      const url =
        action === "activate"
          ? `http://localhost:5000/activate-user/${uid}`
          : `http://localhost:5000/deactivate-user/${uid}`;
      await axios.put(url);
      alert(`User ${action}d successfully!`);
      // Refresh user list
      const response = await axios.get("http://localhost:5000/list-users");
      setUsers(response.data);
      if (selectedUser?.uid === uid) {
        setSelectedUser({ ...selectedUser, active: action === "activate" });
      }
    } catch (error) {
      console.error(`Error ${action}ing user:`, error);
      alert(`Failed to ${action} user.`);
    }
  };

  // Show user details
  const handleRowClick = (user) => {
    setSelectedUser(user);
    setDetailVisible(true);
  };

  // Close details modal
  const handleCloseDetails = () => {
    setDetailVisible(false);
    setSelectedUser(null);
  };

  // Table columns
  const columns = [
    {
      title: "UID",
      dataIndex: "uid",
      key: "uid",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Status",
      dataIndex: "active",
      key: "active",
      render: (active) => (active ? "Active" : "Inactive"),
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <span>
          <Button
            type="primary"
            onClick={() =>
              handleStatusChange(record.uid, record.active ? "deactivate" : "activate")
            }
          >
            {record.active ? "Deactivate" : "Activate"}
          </Button>
        </span>
      ),
    },
  ];

  return (
    <div className="adminpanel"  style={{ padding: "20px" }}>
      <h1>User Management</h1>
      {loading ? (
        <Spin size="large" />
      ) : (
        <Table
          dataSource={users}
          columns={columns}
          rowKey="uid"
          onRow={(record) => ({
            onClick: () => handleRowClick(record),
          })}
          style={{ cursor: "pointer" }}
        />
      )}

      {/* User Details Modal */}
      <Modal
        title="User Details"
        visible={detailVisible}
        onCancel={handleCloseDetails}
        footer={null}
      >
        {selectedUser && (
          <div>
            <p><b>UID:</b> {selectedUser.uid}</p>
            <p><b>Email:</b> {selectedUser.email}</p>
            <p><b>Active:</b> {selectedUser.active ? "Yes" : "No"}</p>
            <p><b>Custom Claims:</b> {JSON.stringify(selectedUser.customClaims)}</p>
            <p><b>Firestore Data:</b> {JSON.stringify(selectedUser.firestoreData)}</p>
            <Button
              type="primary"
              onClick={() =>
                handleStatusChange(
                  selectedUser.uid,
                  selectedUser.active ? "deactivate" : "activate"
                )
              }
            >
              {selectedUser.active ? "Deactivate" : "Activate"}
            </Button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default AdminPanel;
