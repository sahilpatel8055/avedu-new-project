import { useState } from "react";
import SimpleCounselingForm from "@/components/ui/simple-counseling-form";

export const useSimpleForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openForm = () => setIsOpen(true);
  const closeForm = () => setIsOpen(false);

  const FormComponent = () => (
    <SimpleCounselingForm open={isOpen} onOpenChange={setIsOpen} />
  );

  return {
    openForm,
    closeForm,
    isOpen,
    FormComponent
  };
};