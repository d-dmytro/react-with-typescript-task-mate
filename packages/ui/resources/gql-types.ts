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

//==============================================================
// END Enums and Input Objects
//==============================================================
