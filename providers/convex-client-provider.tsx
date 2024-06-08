"use client";
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import {
  AuthLoading,
  Authenticated,
  ConvexReactClient,
  Unauthenticated,
} from "convex/react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import React from "react";
import { Loading } from "@/components/auth/loading.";

interface ConvexClientProviderProps {
  children: React.ReactNode;
}

const convexUrl =
  process.env.NEXT_PUBLIC_CONVEX_URL ||
  "https://prestigious-peacock-213.convex.cloud";
const convex = new ConvexReactClient(convexUrl);

export const ConvexClientProvider = ({
  children,
}: ConvexClientProviderProps) => {
  return (
    <ClerkProvider>
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        {/*<Authenticated>{children}</Authenticated>*/}
        {/*<SignedOut>*/}
        {/*  <SignInButton />*/}
        {/*</SignedOut>*/}
        <Authenticated>{children}</Authenticated>
        <Unauthenticated>
          Logged out
          <SignInButton />
        </Unauthenticated>
        <AuthLoading>
          <Loading />
        </AuthLoading>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};
