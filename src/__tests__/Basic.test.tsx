import { renderComponent, user } from 'testUtils';
import { App } from 'app';

test('should render the counter', async () => {
  const { findByText, findByTestId } = renderComponent(<App />);

  const count = await findByTestId('count');
  const incrementButton = await findByText('Increment');
  const decrementButton = await findByText('Decrement');

  expect(count).toBeInTheDocument();
  expect(count).toHaveTextContent('0');
  expect(incrementButton).toBeInTheDocument();
  expect(decrementButton).toBeInTheDocument();
});

test('should increment and decrement the value correctly', async () => {
  const { findByText, findByTestId } = renderComponent(<App />);

  const incrementButton = await findByText('Increment');
  const decrementButton = await findByText('Decrement');

  const value = await findByTestId('count');

  await user.click(incrementButton);
  expect(value).toHaveTextContent('1');

  await user.click(decrementButton);
  await user.click(decrementButton);
  expect(value).toHaveTextContent('-1');
});
