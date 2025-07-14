import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider, useAuth } from './hooks/useAuth.tsx';
import Layout from './components/layout/Layout';
import ProtectedRoute from './components/shared/ProtectedRoute';
import HomePage from './pages/HomePage';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import ResourcesPage from './pages/ResourcesPage';
import EventsPage from './pages/EventsPage';
import ProfilePage from './pages/ProfilePage';

const queryClient = new QueryClient();

const AppRoutes = () => {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/login" element={!user ? <LoginForm /> : <Navigate to="/" />} />
      <Route path="/register" element={!user ? <RegisterForm /> : <Navigate to="/" />} />
      
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="resources" element={
          <ProtectedRoute>
            <ResourcesPage />
          </ProtectedRoute>
        } />
        <Route path="events" element={
          <ProtectedRoute>
            <EventsPage />
          </ProtectedRoute>
        } />
        <Route path="profile" element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        } />
      </Route>
    </Routes>
  );
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
