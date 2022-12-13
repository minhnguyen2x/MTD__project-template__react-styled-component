import { createAction } from '@reduxjs/toolkit';

export const createModuleAction = (moduleName: string, actionName: string) => {
  return {
    request: createAction<any>(`${moduleName}:${actionName}:REQUEST`),
    success: createAction<any>(`${moduleName}:${actionName}:SUCCESS`),
    error: createAction<any>(`${moduleName}:${actionName}:ERROR`),
  };
};

export const createSagaHandler = function (gf: any) {
  return gf;
};
