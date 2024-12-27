"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { ApolloProvider } from "@apollo/client";
import client from "@/lib/apolloClient";
import { Navigation } from "@/components/Navigation";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <Navigation />
        {children}
      </ThemeProvider>
    </ApolloProvider>
  );
}
