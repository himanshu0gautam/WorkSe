import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { selectIsAuthenticated } from '@/store/slices/authSlice';
import { ROUTES } from './paths';

/**
 * Route guard component ensuring authenticated access
 */
export function ProtectedRoute({ children }) {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect unauthenticated users to login with return path saved
    return <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />;
  }

  return children;
}
