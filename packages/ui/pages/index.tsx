import { Layout } from '../components/Layout';
import TASKS_QUERY from '../graphql/tasks.graphql';
import { Query } from 'react-apollo';
import {
  TasksQuery as ITasksQuery,
  TasksQueryVariables
} from '../resources/gql-types';
import { Loader } from '../components/Loader';
import { Task } from '../components/Task';
import { CreateTaskForm } from '../components/CreateTaskForm';

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
            <CreateTaskForm />
            {loading ? (
              <Loader />
            ) : (
              <ul className="tasks">
                {tasks.map((task, i) => {
                  return <Task key={i} {...task} />;
                })}
              </ul>
            )}
          </div>
        );
      }}
    </TasksQuery>
    <style jsx>{`
      .tasks {
        list-style: none;
        margin: 0 0 20px;
      }
    `}</style>
  </Layout>
);
