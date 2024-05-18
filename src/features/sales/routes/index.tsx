import { Route, Routes, Navigate } from 'react-router-dom';
import { Sales } from './sales';

export const SalesRoutes = () => {
  return (
    <Routes>
      <Route path="/sales" element={<Sales />} />
      <Route path="*" element={<Navigate to="/sales" />} />
    </Routes>
  );
};
