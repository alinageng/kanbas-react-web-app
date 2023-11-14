import {useParams} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import React, { useEffect, useState } from "react";
import * as client from "./client";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "../Modules/modulesReducers";

function ModuleList() {
  const {courseId} = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };



  useEffect(() => {
    client.findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
      );
  }, [courseId]);


  return (
    <ul className="list-group">
      <li className="list-group-item">
        <div className="row">
          <div className="col">
            <div className="row mb-2">
              <div className="col">
                <input className="form-control"
                       value={module.name}
                       onChange={(e) =>
                         dispatch(setModule({...module, name: e.target.value}))
                       }/>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col">
            <textarea className="form-control"
                      value={module.description}
                      onChange={(e) =>
                        dispatch(setModule({...module, description: e.target.value}))
                      }/>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="float-end">
              <button className="btn btn-primary"
                      onClick={() => handleUpdateModule()}>
                Update
              </button>
              <button className="btn btn-success"
                      onClick={handleAddModule}>
                Add
              </button>
            </div>
          </div>
        </div>
      </li>

      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item">
            <div className="row">
              <div className="col">
                <h3>{module.name}</h3>
              </div>
              <div className="col-4">
                <div className="float-end">
                  <button className="btn btn-success"
                          onClick={() => dispatch(setModule(module))}>
                    Edit
                  </button>
                  <button className="btn btn-danger"
                          onClick={() => handleDeleteModule(module._id)}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
            <p>{module.description}</p>
            {module.lessons &&
              module.lessons.map((lesson, index) => (
                <div key={index}>
                  <h4>{lesson.name}</h4>
                  <p>{lesson.description}</p>
                </div>
              ))}
          </li>
        ))}
    </ul>
  );
}

export default ModuleList;
