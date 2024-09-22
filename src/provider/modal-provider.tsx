"use client";
import { createContext, useContext, useEffect, useState } from "react";

type ModalProviderProps = {
  children: React.ReactNode;
};

type ModalContextType = {
  isOpen: boolean;
  currentIndex: number;
  setOpen: (modal: React.ReactNode, index?: number) => void;
  setClose: () => void;
  setCurrentIndex: (index: number) => void;
};

export const ModalContext = createContext<ModalContextType>({
  isOpen: false,
  currentIndex: 0,
  setOpen: (modal: React.ReactNode, index?: number) => {},
  setClose: () => {},
  setCurrentIndex: (index: number) => {},
});

const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showingModal, setShowingModal] = useState<React.ReactNode>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const setOpen = (modal: React.ReactNode, index: number = 0) => {
    if (modal) {
      setShowingModal(modal);
      setCurrentIndex(index);
      setIsOpen(true);
    }
  };

  const setClose = () => {
    setIsOpen(false);
  };

  if (!isMounted) return null;

  return (
    <ModalContext.Provider
      value={{ setOpen, setClose, isOpen, currentIndex, setCurrentIndex }}
    >
      {children}
      {showingModal}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within the modal provider");
  }
  return context;
};

export default ModalProvider;
