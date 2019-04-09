/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ChangeStatusMutation
// ====================================================

export interface ChangeStatusMutation_changeStatus {
  __typename: "Task";
  id: number;
  title: string;
  status: TaskStatus;
}

export interface ChangeStatusMutation {
  changeStatus: ChangeStatusMutation_changeStatus | null;
}

export interface ChangeStatusMutationVariables {
  id: number;
  status: TaskStatus;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateTaskMutation
// ====================================================

export interface CreateTaskMutation_createTask {
  __typename: "Task";
  id: number;
  title: string;
  status: TaskStatus;
}

export interface CreateTaskMutation {
  createTask: CreateTaskMutation_createTask | null;
}

export interface CreateTaskMutationVariables {
  input: CreateTaskInput;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteTaskMutation
// ====================================================

export interface DeleteTaskMutation_deleteTask {
  __typename: "Task";
  id: number;
  title: string;
  status: TaskStatus;
}

export interface DeleteTaskMutation {
  deleteTask: DeleteTaskMutation_deleteTask | null;
}

export interface DeleteTaskMutationVariables {
  id: number;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: TaskQuery
// ====================================================

export interface TaskQuery_task {
  __typename: "Task";
  id: number;
  title: string;
  status: TaskStatus;
}

export interface TaskQuery {
  task: TaskQuery_task | null;
}

export interface TaskQueryVariables {
  id: number;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: TasksQuery
// ====================================================

export interface TasksQuery_tasks {
  __typename: "Task";
  id: number;
  title: string;
  status: TaskStatus;
}

export interface TasksQuery {
  tasks: TasksQuery_tasks[];
}

export interface TasksQueryVariables {
  status?: TaskStatus | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateTaskMutation
// ====================================================

export interface UpdateTaskMutation_updateTask {
  __typename: "Task";
  id: number;
  title: string;
  status: TaskStatus;
}

export interface UpdateTaskMutation {
  updateTask: UpdateTaskMutation_updateTask | null;
}

export interface UpdateTaskMutationVariables {
  input: UpdateTaskInput;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum TaskStatus {
  active = "active",
  completed = "completed",
}

export interface CreateTaskInput {
  title?: string | null;
}

export interface UpdateTaskInput {
  id?: number | null;
  title?: string | null;
  status?: TaskStatus | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
