import { AppProvider } from './providers';
import { MfeDashboardRoutes } from './routes';

const App = () => {
  return (
    <AppProvider>
      <MfeDashboardRoutes />
    </AppProvider>
  );
};

export default App;
