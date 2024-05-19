import { Route, Routes } from 'react-router-dom';
import { Stock } from './stock';

export const StockRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Stock />} />
    </Routes>
  );
};
