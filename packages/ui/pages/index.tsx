import { Layout } from '../components/Layout';
import TASKS_QUERY from '../graphql/tasks.graphql';
import { Query } from 'react-apollo';
import {
  TasksQuery as ITasksQuery,
  TasksQueryVariables
} from '../resources/gql-types';
import { Loader } from '../components/Loader';
import { Task } from '../components/Task';

class TasksQuery extends Query<ITasksQuery, TasksQueryVariables> {}

export default () => (
  <Layout>
    <TasksQuery query={TASKS_QUERY}>
      {({ error, loading, data }) => {
        if (error) {
          return <p>Something wrong happened</p>;
        }

        const tasks = data ? data.tasks : [];

        return (
          <div>
            {loading ? (
              <Loader />
            ) : (
              <ul>
                {tasks.map((task, i) => {
                  return <Task key={i} {...task} />;
                })}
              </ul>
            )}
          </div>
        );
      }}
    </TasksQuery>
  </Layout>
);
