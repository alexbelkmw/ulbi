import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}
export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const onToggle = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.link}
        onClick={onToggle}
      >
        {t('Login')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggle}>
        {t('dhdhdbdbdbh h hch hh h h hhsbsx')}
      </Modal>
    </div>
  );
};
