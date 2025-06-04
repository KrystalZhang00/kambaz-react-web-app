import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import GreenCheckmark from "./GreenCheckmark";

export default function ModuleControlButtons(
  { moduleId, deleteModule, editModule, isFaculty }: {  // CHANGE 1: Add isFaculty to props
    moduleId: string; 
    deleteModule: (moduleId: string) => void; 
    editModule: (moduleId: string) => void;
    isFaculty: boolean;  // Add type definition for isFaculty
  }
) {
  return (
    <div className="float-end">
      {/* CHANGE 2: Only show edit and delete buttons for faculty */}
      {isFaculty && (
        <>
          <FaPencil 
            onClick={() => editModule(moduleId)} 
            className="text-primary me-3" 
          />
          <FaTrash 
            className="text-danger me-2 mb-1" 
            onClick={() => deleteModule(moduleId)}
          />
        </>
      )}
      <GreenCheckmark />
      <BsPlus className="fs-4 me-2" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}