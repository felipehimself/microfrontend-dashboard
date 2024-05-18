import { CircularProgress } from '@mui/material';
import Box from '@mui/material/Box';

export const Fallback = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100%',
      }}
    >
      <CircularProgress />
    </Box>
  );
};
