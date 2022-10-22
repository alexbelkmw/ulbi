import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';

interface ErrorButtonProps {
  className?: string;
}

export const ErrorButton = ({ className }: ErrorButtonProps) => {
  const [error, setError] = useState(false);
  const onThrow = () => setError(true);
  const { t } = useTranslation();
  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);
  return (
    <Button onClick={onThrow} className={classNames('', {}, [className])}>
      {t('Throw')}
    </Button>
  );
};
