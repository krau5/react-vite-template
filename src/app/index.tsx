import { useCallback } from 'react';
import { decrementCount, incrementCount, selectCount } from 'store/counter';
import { useAppDispatch, useAppSelector } from 'store';
import { UIProvider } from 'components/UIProvider';
import { Box } from 'components/Box';

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
      <p>Current count{count}</p>

      <Box display="flex" gap={2}>
        <button onClick={handleClick('increment')}>Increment</button>
        <button onClick={handleClick('decrement')}>Decrement</button>
      </Box>
    </UIProvider>
  );
};
