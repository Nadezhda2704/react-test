import './App.css'
import { DateInfo } from './components/DateInfo';
import { Period } from './components/Period';

function App() {
  const data = [
    {
      title: "Технологии",
      id: 1,
      children: [
        {
          id: 11,
          date: 1980,
          text: "Свершилось чудо в сфере технологий",
        },
        {
          id: 12,
          date: 1988,
          text: "Произошёл внеочередной прорыв в сфере технологий",
        },
        {
          id: 13,
          date: 1992,
          text: "Технологии вышли на качественно новый уровень",
        },
        {
          id: 14,
          date: 1994,
          text: "Рекорд компании A был побит компанией B, это подверждают инженеры компании C",
        },
        {
          id: 15,
          date: 1997,
          text: "Технологии снова вышли на качественно новый уровень",
        },
        {
          id: 16,
          date: 1988,
          text: "Произошёл очередной прорыв в сфере технологий",
        },
      ],
    },
    {
      title: "Наука",
      id: 2,
      children: [
        {
          id: 11,
          date: 1980,
          text: "Свершилось чудо в научной сфере",
        },
        {
          id: 12,
          date: 1988,
          text: "Произошёл внеочередной прорыв в научной сфере",
        },
        {
          id: 13,
          date: 1992,
          text: "Наука вышла на качественно новый уровень",
        },
        {
          id: 14,
          date: 1994,
          text: "Рекорд компании A был побит компанией B, это подверждают учёные компании C",
        },
        {
          id: 16,
          date: 1988,
          text: "Произошёл очередной прорыв в научной сфере",
        },
      ],
    },
  ];

  return (
    <>
      <h2>Заголовок блока</h2>
      <p>виджет circle</p>
      <Period />  
      <DateInfo />
    </>
  );
}

export default App
