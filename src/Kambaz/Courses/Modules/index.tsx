import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { ListGroup, FormControl } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { addModule, editModule, updateModule, deleteModule, setModules } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import * as coursesClient from "../client";
import * as modulesClient from "./client";

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";
  const dispatch = useDispatch();
  
  const fetchModulesForCourse = async () => {
    const modules = await coursesClient.findModulesForCourse(cid!);
    dispatch(setModules(modules));
  };

  useEffect(() => {
    fetchModulesForCourse();
  }, [cid]);

  const addModuleHandler = async () => {
    const newModule = await modulesClient.createModuleForCourse(cid!, { 
      name: moduleName,
      course: cid,
    });
    dispatch(addModule(newModule));
    setModuleName("");
  };

  const deleteModuleHandler = async (moduleId: string) => {
    await modulesClient.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };

  const updateModuleHandler = async (module: any) => {
    try {
      await modulesClient.updateModule(module);
      dispatch(updateModule(module));
    } catch (error) {
      console.error("Server update failed, updating locally:", error);
      // 即使服务器失败，仍然更新本地
      dispatch(updateModule({ ...module, editing: false }));
    }
  };

  return (
    <div className="wd-modules">
      <ModulesControls 
        setModuleName={setModuleName} 
        moduleName={moduleName} 
        addModule={addModuleHandler}
        isFaculty={isFaculty}
      />
      <br /><br /><br /><br />
      <ListGroup className="rounded-0" id="wd-modules">
        {modules.map((module: any) => (
          <ListGroup.Item 
            key={module._id} 
            className="wd-module p-0 mb-5 fs-5 border-gray"
          >
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" /> 
              {!module.editing && module.name}
              {module.editing && isFaculty && (
                <FormControl 
                  className="w-50 d-inline-block"
                  value={module.name}
                  onChange={(e) => dispatch(updateModule({ ...module, name: e.target.value }))}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      updateModuleHandler({ ...module, editing: false });
                    }
                  }}
                />
              )}
              <ModuleControlButtons 
                moduleId={module._id}
                deleteModule={(moduleId) => deleteModuleHandler(moduleId)}
                editModule={(moduleId) => dispatch(editModule(moduleId))}
                isFaculty={isFaculty}
              />
            </div>
            {module.lessons && (
              <ListGroup className="wd-lessons rounded-0">
                {module.lessons.map((lesson: any, index: any) => (
                  <ListGroup.Item 
                    key={lesson._id || index} 
                    className="wd-lesson p-3 ps-1"
                  >
                    <BsGripVertical className="me-2 fs-3" /> 
                    {lesson.name} 
                    <LessonControlButtons />
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}