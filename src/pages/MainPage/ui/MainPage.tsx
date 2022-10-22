import { ErrorButton } from 'app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <ErrorButton />
      {t('MainPage')}
    </div>
  );
};

export default MainPage;
