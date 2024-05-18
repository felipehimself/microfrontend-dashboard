import { Route, Routes, Navigate } from 'react-router-dom';
import { Stock } from './stock';

export const StockRoutes = () => {
  return (
    <Routes>
      <Route path="/stock" element={<Stock />} />
      <Route path="*" element={<Navigate to="/stock" />} />
    </Routes>
  );
};
