import { Route, Routes } from 'react-router-dom';
import { Sales } from './sales';

export const SalesRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Sales />} />
    </Routes>
  );
};
