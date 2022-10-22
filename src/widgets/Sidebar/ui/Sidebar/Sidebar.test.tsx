import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
// prettier-ignore
import {
  renderWithTranslation,
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('Sidebar', () => {
  test('InDocument', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('test-id')).toBeInTheDocument();
  });
  test('test toggle', () => {
    renderWithTranslation(<Sidebar />);
    const toggleBnt = screen.getByTestId('test-id-button');
    expect(screen.getByTestId('test-id')).toBeInTheDocument();
    fireEvent.click(toggleBnt);
    expect(screen.getByTestId('test-id')).toHaveClass('collapsed');
  });
});
