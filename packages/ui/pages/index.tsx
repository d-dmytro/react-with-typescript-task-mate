import { Layout } from '../components/Layout';
import TASKS_QUERY from '../graphql/tasks.graphql';
import { Query, withApollo, WithApolloClient } from 'react-apollo';
import {
  TasksQuery,
  TasksQueryVariables,
  DeleteTaskMutation,
  DeleteTaskMutationVariables,
  TaskStatus,
  ChangeStatusMutation,
  ChangeStatusMutationVariables
} from '../resources/gql-types';
import { Loader } from '../components/Loader';
import { Task } from '../components/Task';
import { WrappedCreateTaskForm } from '../components/CreateTaskForm';
import { ApolloClient } from 'apollo-boost';
import DELETE_TASK_MUTATION from '../graphql/delete-task.graphql';
import { useCallback } from 'react';
import CHANGE_STATUS_MUTATION from '../graphql/change-status.graphql';
import { TaskFilter } from '../components/TaskFilter';
import { NextFunctionComponent } from 'next';

class ApolloTasksQuery extends Query<TasksQuery, TasksQueryVariables> {}

const deleteTask = async (id: number, apollo: ApolloClient<any>) => {
  const result = await apollo.mutate<
    DeleteTaskMutation,
    DeleteTaskMutationVariables
  >({
    mutation: DELETE_TASK_MUTATION,
    variables: { id }
  });
  if (result && result.data && result.data.deleteTask) {
    const tasksCache = apollo.readQuery<TasksQuery, TasksQueryVariables>({
      query: TASKS_QUERY
    });
    if (tasksCache) {
      apollo.writeQuery({
        query: TASKS_QUERY,
        data: { tasks: tasksCache.tasks.filter(task => task.id !== id) }
      });
    }
  }
};

const changeTaskStatus = async (
  id: number,
  status: TaskStatus,
  taskFilter: TaskFilter,
  apollo: ApolloClient<any>
) => {
  await apollo.mutate<ChangeStatusMutation, ChangeStatusMutationVariables>({
    mutation: CHANGE_STATUS_MUTATION,
    variables: { id, status },
    update: cache => {
      const tasksCache = cache.readQuery<TasksQuery, TasksQueryVariables>({
        query: TASKS_QUERY,
        variables: { status: taskFilter.status }
      });
      if (tasksCache) {
        cache.writeQuery<TasksQuery, TasksQueryVariables>({
          query: TASKS_QUERY,
          variables: { status: taskFilter.status },
          data: {
            tasks: tasksCache.tasks.filter(
              task => task.status === taskFilter.status
            )
          }
        });
      }
    }
  });
};

interface InitialProps {
  taskFilter: TaskFilter;
}

interface Props extends InitialProps {}

const IndexPage: NextFunctionComponent<
  WithApolloClient<Props>,
  InitialProps
> = ({ client, taskFilter }) => {
  const deleteTaskCallback = useCallback(
    (id: number) => deleteTask(id, client),
    []
  );
  const changeTaskStatusCallback = useCallback(
    (id: number, status: TaskStatus) =>
      changeTaskStatus(id, status, taskFilter, client),
    [taskFilter]
  );
  return (
    <Layout>
      <ApolloTasksQuery
        query={TASKS_QUERY}
        variables={taskFilter}
        fetchPolicy="cache-and-network"
      >
        {({ error, loading, data, refetch }) => {
          if (error) {
            return <p>Something wrong happened</p>;
          }

          const tasks = data ? data.tasks : [];

          return (
            <div>
              <WrappedCreateTaskForm onCreateTask={refetch} />
              {loading ? (
                <Loader />
              ) : (
                <ul className="tasks">
                  {tasks.map((task, i) => {
                    return (
                      <Task
                        key={i}
                        onDeleteTask={deleteTaskCallback}
                        onTaskStatusChange={changeTaskStatusCallback}
                        {...task}
                      />
                    );
                  })}
                </ul>
              )}
              <TaskFilter filter={taskFilter} />
            </div>
          );
        }}
      </ApolloTasksQuery>
      <style jsx>{`
        .tasks {
          list-style: none;
          margin: 0 0 20px;
        }
      `}</style>
    </Layout>
  );
};

IndexPage.getInitialProps = ctx => {
  const { status } = ctx.query;
  return {
    taskFilter: {
      status: Array.isArray(status)
        ? (status[0] as TaskStatus)
        : status
        ? (status as TaskStatus)
        : undefined
    }
  };
};

export default withApollo(IndexPage);
