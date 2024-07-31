// app/layout.tsx
'use client';

import '../styles/globals.css';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="Real Time Data Technical Assessment" />
        <meta charSet="UTF-8" />
        <title>Real Time Data Technical Assessment</title>
      </head>
      <body>
        <Provider store={store}>
          <main>{children}</main>
        </Provider>
      </body>
    </html>
  );
}
