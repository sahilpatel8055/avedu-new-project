import { useState } from "react";
import CounselingForm from "@/components/ui/counseling-form";

export const useCounselingForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openForm = () => setIsOpen(true);
  const closeForm = () => setIsOpen(false);

  const CounselingFormComponent = () => (
    <CounselingForm open={isOpen} onOpenChange={setIsOpen} />
  );

  return {
    openForm,
    closeForm,
    isOpen,
    CounselingFormComponent
  };
};