import { expect, it, vi } from 'vitest';
import { renderComponent, user } from 'testUtils';
import { Button } from '.';

it('renders a component', async () => {
  const handleClick = vi.fn(() => {});

  const { asFragment, findByText } = renderComponent(
    <Button onClick={handleClick}>Caption</Button>
  );

  expect(asFragment()).toMatchSnapshot();

  const button = await findByText('Caption');

  await user.click(button);

  expect(handleClick).toHaveBeenCalled();
  expect(handleClick).toHaveBeenCalledTimes(1);
});
