/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Metadata } from 'next';
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import { theme } from '../../theme';

export const metadata: Metadata = {
    title: 'Invitatie',
    description: 'Invitatie la'
};

import '@mantine/core/styles.css';

import React from 'react';

export default function RootLayout({ children }: { children: any }) {
    return (
        <html lang="en" {...mantineHtmlProps}>
            <head>
                <ColorSchemeScript />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Arapey:ital@0;1&family=Lavishly+Yours&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body>
                <MantineProvider theme={theme}>{children}</MantineProvider>
            </body>
        </html>
    );
}
