import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = (props: LoginFormProps) => {
  const { t } = useTranslation();
  const { className } = props;
  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input
        autofocus
        placeholder={t('Enter login')}
        type="text"
        className={cls.input}
      />
      <Input
        placeholder={t('Enter password')}
        type="text"
        className={cls.input}
      />
      <Button className={cls.loginBtn}>{t('Login')}</Button>
    </div>
  );
};
