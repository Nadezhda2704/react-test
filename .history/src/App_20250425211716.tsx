import './styles/global.scss';

import { data } from './mocs/data';
import { InfoDatesMainBlock } from './components/InfoDatesMainBlock';

function App() {
  return (
    <>
    <InfoDatesMainBlock data={data} />
    <p>hhh</p>
    </>


  )
}

export default App;
