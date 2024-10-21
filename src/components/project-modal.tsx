"use client";

import { useModal } from "@/provider/modal-provider";
import { DialogDescription } from "@radix-ui/react-dialog";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

type Props = {
  children?: React.ReactNode;
  defaultOpen?: boolean;
  setCurrentIndex?: (index: number) => void;
  isMobile: () => boolean;
  carouselRef: React.RefObject<HTMLDivElement>;
};
const ProjectModal = ({
  children,
  defaultOpen,
  carouselRef,
  isMobile,
  setCurrentIndex,
}: Props) => {
  const {
    isOpen,
    setClose,
    currentIndex,
    setCurrentIndex: setModalCurrentIndex,
  } = useModal();

  // Handle close event
  const handleClose = (open: boolean) => {
    if (!open) {
      // Scroll to the next item
      handleScrollToNextItem();
      // Close the modal
      setClose();
      setModalCurrentIndex(undefined);
    }
  };

  // Function to handle scrolling to the next item in the carousel
  const handleScrollToNextItem = () => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
      const gap = isMobile() ? 4 : 8;

      // Scroll to the next index
      const nextIndex = currentIndex + 1;

      const scrollPosition = (cardWidth + gap) * nextIndex;
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });

      // Update the current index
      setCurrentIndex(nextIndex);
    }
  };

  return (
    <Dialog open={isOpen || defaultOpen} onOpenChange={handleClose}>
      <DialogContent className="overflow-auto md:max-h-[700px] md:h-fit h-screen bg-card">
        <DialogHeader className="pt-8 text-left">
          <DialogTitle className="text-2xl font-bold">
            Project Title
          </DialogTitle>
          <DialogDescription>Project description</DialogDescription>
        </DialogHeader>
        hii
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
