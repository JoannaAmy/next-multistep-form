import { FormProvider } from '../context/FormContext';
import './globals.css';

export const metadata = {
  title: 'My Multi-Step Form',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <FormProvider>
          {children}
        </FormProvider>
      </body>
    </html>
  );
}