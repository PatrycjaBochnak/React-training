import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

const permission = true;

const AdminPage = () => {
  return (
    <Routes>
      <Route
        render={() =>
          permission ? (
            <h3>Panel admina - dzień dobry</h3>
          ) : (
            <Route path="/login" replace />
          )
        }
      />
      <Route path="/login" element={<h3>Strona logowania</h3>} />
    </Routes>
  );
};

export default AdminPage;
