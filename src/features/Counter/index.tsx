import { useCallback } from 'react';
import { Typography } from 'components/Typography';
import { Box } from 'components/Box';
import { Button } from 'components/Button';
import { useAppDispatch, useAppSelector } from 'store';
import { decrementCount, incrementCount, selectCount } from 'store/counter';

export const Counter = () => {
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
    [dispatch],
  );
  return (
    <>
      <Typography>
        Current count <span data-testid="count">{count}</span>
      </Typography>

      <Box display="flex" gap={2} mt={4}>
        <Button onClick={handleClick('increment')}>Increment</Button>
        <Button onClick={handleClick('decrement')}>Decrement</Button>
      </Box>
    </>
  );
};
