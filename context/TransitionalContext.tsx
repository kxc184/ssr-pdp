"use client";
import useCustomRouter from "@/lib/hooks/useCustomRouter";
import React, { createContext, useContext, useTransition } from "react";

interface ITransitionContext {
  isPending: boolean;
  startTransition: (callback: () => void) => void;
  navTo: (path: string) => void;
}

const TransitionContext = createContext<ITransitionContext | null>(null);

export const TransitionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isPending, startTransition] = useTransition();
  const { router } = useCustomRouter();
  const navTo = (path: string) => {
    startTransition(() => router.push(path));
  };

  return (
    <TransitionContext.Provider value={{ isPending, startTransition, navTo }}>
      {children}
    </TransitionContext.Provider>
  );
};

export const useTransitionContext = () => {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error("useTransitionContext must be used in TransitionProvider");
  }
  return context;
};
