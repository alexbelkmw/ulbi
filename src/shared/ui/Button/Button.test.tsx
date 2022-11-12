import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

describe('classNames', () => {
  test('InDocument', () => {
    render(<Button>Text</Button>);
    expect(screen.getByText('Text')).toBeInTheDocument();
  });
  test('HaveClass', () => {
    render(<Button theme={ButtonTheme.CLEAR}>Text</Button>);
    expect(screen.getByText('Text')).toHaveClass('clear');
    screen.debug();
  });
});
