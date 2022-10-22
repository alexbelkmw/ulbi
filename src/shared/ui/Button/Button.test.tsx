import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

describe('classNames', () => {
  test('InDocument', () => {
    render(<Button>Text</Button>);
    expect(screen.getByText('Text')).toBeInTheDocument();
  });
  test('HaveClass', () => {
    render(<Button theme={ThemeButton.CLEAR}>Text</Button>);
    expect(screen.getByText('Text')).toHaveClass('clear');
    screen.debug();
  });
});
