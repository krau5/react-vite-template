import { createLazyFileRoute } from '@tanstack/react-router';
import { Box } from 'components/Box';
import { Counter } from 'features/Counter';

export const Route = createLazyFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      mt={25}
    >
      <Counter />
    </Box>
  );
}
