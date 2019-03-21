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

//==============================================================
// END Enums and Input Objects
//==============================================================
