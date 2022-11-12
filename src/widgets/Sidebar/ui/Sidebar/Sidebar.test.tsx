import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
// prettier-ignore
import {
  componentRender,
} from 'shared/lib/tests/componentRender/componentRender';

describe('Sidebar', () => {
  test('InDocument', () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId('test-id')).toBeInTheDocument();
  });
  test('test toggle', () => {
    componentRender(<Sidebar />);
    const toggleBnt = screen.getByTestId('test-id-button');
    expect(screen.getByTestId('test-id')).toBeInTheDocument();
    fireEvent.click(toggleBnt);
    expect(screen.getByTestId('test-id')).toHaveClass('collapsed');
  });
});
