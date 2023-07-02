import { useCallback } from 'react';
import { decrementCount, incrementCount, selectCount } from 'store/counter';
import { useAppDispatch, useAppSelector } from 'store';
import { UIProvider } from 'components/UIProvider';
import { Box } from 'components/Box';
import { Button } from 'components/Button';
import { Typography } from 'components/Typography';

export const App = () => {
  const dispatch = useAppDispatch();

  const count = useAppSelector(selectCount);

  const handleClick = useCallback(
    (type: 'increment' | 'decrement') => () => {
      if (type === 'increment') {
        dispatch(incrementCount());
        return;
      }

      dispatch(decrementCount());
    },
    [dispatch]
  );

  return (
    <UIProvider>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        mt={25}
      >
        <Typography>Current count {count}</Typography>

        <Box display="flex" gap={2} mt={4}>
          <Button onClick={handleClick('increment')}>Increment</Button>
          <Button onClick={handleClick('decrement')}>Decrement</Button>
        </Box>
      </Box>
    </UIProvider>
  );
};
