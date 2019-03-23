import { NextStatelessComponent } from 'next';
import { Layout } from '../components/Layout';
import { UpdateTaskForm } from '../components/UpdateTaskForm';

interface Props {
  id: number;
}

const Edit: NextStatelessComponent<Props> = () => {
  return (
    <Layout>
      <UpdateTaskForm />
    </Layout>
  );
};

export default Edit;
