import { AuthContextWrapper } from '@hooks/useAuth';
import MainLayout from '@layout/MainLayout';
import '@styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthContextWrapper>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </AuthContextWrapper>
    </>
  );
}

export default MyApp;
