import { Alert } from '@mui/material';

export const FallbackError = () => {
  return (
    <Alert severity="error">
      Ooops! Something happened, try reloading the page
    </Alert>
  );
};
