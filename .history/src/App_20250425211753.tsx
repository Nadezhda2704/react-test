import './styles/global.scss';

import { data } from './mocs/data';
import { InfoDatesMainBlock } from './components/InfoDatesMainBlock';

function App() {
  return (
    <>
      <InfoDatesMainBlock data={data} />
      <InfoDatesMainBlock data={data} />
    </>
  )
}

export default App;
