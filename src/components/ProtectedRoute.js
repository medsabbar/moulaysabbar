import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from './UserContext';

function ProtectedRoute({ children }) {
	const { user } = useUser();
	if (!user) {
		return <Navigate to="/login" />;
	}
	return children;
}

export default ProtectedRoute;
