import { IntlProvider } from 'react-intl';
import { useStates, useActions } from './store/model/intl';
import { useEffect } from 'react';

console.log('ConnectedIntl.tsx outside');

const ConnectedIntlProvider = ({
  children,
  locale,
}: {
  children: JSX.Element;
  locale: string;
}) => {
  console.log('ConnectedIntl.tsx inside');
  const { language, translations } = useStates();
  const { saveLang } = useActions();

  useEffect(() => {
    if (locale !== language) {
      saveLang(locale);
    }
  }, []);

  return (
    <IntlProvider locale={language} messages={translations}>
      {children}
    </IntlProvider>
  );
};

export default ConnectedIntlProvider;
