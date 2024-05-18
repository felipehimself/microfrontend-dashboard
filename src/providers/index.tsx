import React, { Suspense } from 'react';
import { Fallback } from '@/componentes/shared/fallback';
import { ErrorBoundary } from 'react-error-boundary';
import { FallbackError } from '@/componentes/shared/fallback-error';
import { BrowserRouter } from 'react-router-dom';
import { MicrofrontendTheme } from '@mfe-lib/styleguide';
import { ThemeProvider } from '@mui/material';

export const AppProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <ThemeProvider theme={MicrofrontendTheme}>
      <Suspense fallback={<Fallback />}>
        <ErrorBoundary FallbackComponent={FallbackError}>
          <BrowserRouter>{children}</BrowserRouter>
        </ErrorBoundary>
      </Suspense>
    </ThemeProvider>
  );
};
