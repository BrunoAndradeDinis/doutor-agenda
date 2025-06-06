import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ClinicForm from "./_components/form";

const ClinicFormPage = () => {
  return (
    <Dialog open>
      <form>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Adicionar clínica</DialogTitle>
            <DialogDescription>
              Adicione uma clínica para que você possa gerenciar seus pacientes.
            </DialogDescription>
          </DialogHeader>
          <ClinicForm />
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default ClinicFormPage;
