import React, { ReactNode, Suspense } from 'react';
import { PageError } from 'widgets/PageError';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundatyState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundatyState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  //   static getDerivedStateFromError(error: Error) {
  //     // Update state so the next render will show the fallback UI.
  //     return { hasError: true };
  //   }

  //   componentDidCatch(error: Error, errorInfo: ErrorInfo) {
  //     // You can also log the error to an error reporting service
  //     console.log(error, errorInfo);
  //   }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return (
        <Suspense fallback="">
          <PageError />
        </Suspense>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
