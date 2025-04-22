import { useState } from 'react';
import { MainCarouselDesktop } from './components/MainCarouselDesktop';
import { MainCarouselMobile } from './components/MainCarouselMobile';
import { Period } from './components/Period';
import "./styles/global.scss";
import { InfoDateCarousel } from './components/InfoDateCarousel';
import css from "./app.module.scss";

function App() {
  const data = [
    {
      title: "Технологии",
      id: 1,
      firstDate: 1980,
      secondDate: 1998,
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
      firstDate: 1977,
      secondDate: 2005,
      children: [
        {
          id: 11,
          date: 1977,
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
          date: 2005,
          text: "Произошёл очередной прорыв в научной сфере",
        },
      ],
    },
    {
      title: "Кино",
      id: 3,
      firstDate: 1985,
      secondDate: 2015,
      children: [
        {
          id: 31,
          date: 1985,
          text: "Свершилось чудо в сфере технологий",
        },
        {
          id: 32,
          date: 1988,
          text: "Произошёл внеочередной прорыв в сфере технологий",
        },
        {
          id: 33,
          date: 1992,
          text: "Технологии вышли на качественно новый уровень",
        },
        {
          id: 34,
          date: 1994,
          text: "Рекорд компании A был побит компанией B, это подверждают инженеры компании C",
        },
        {
          id: 35,
          date: 1997,
          text: "Технологии снова вышли на качественно новый уровень",
        },
        {
          id: 36,
          date: 2015,
          text: "Произошёл очередной прорыв в сфере технологий",
        },
      ],
    },
    {
      title: "Литература",
      id: 4,
      firstDate: 1975,
      secondDate: 1988,
      children: [
        {
          id: 41,
          date: 1975,
          text: "Свершилось чудо в научной сфере",
        },
        {
          id: 42,
          date: 1988,
          text: "Произошёл внеочередной прорыв в научной сфере",
        },
        {
          id: 43,
          date: 1992,
          text: "Наука вышла на качественно новый уровень",
        },
        {
          id: 44,
          date: 1994,
          text: "Рекорд компании A был побит компанией B, это подверждают учёные компании C",
        },
        {
          id: 45,
          date: 1988,
          text: "Произошёл очередной прорыв в научной сфере",
        },
      ],
    },
    {
      title: "Спорт",
      id: 5,
      firstDate: 1980,
      secondDate: 2003,
      children: [
        {
          id: 51,
          date: 1980,
          text: "Свершилось чудо в сфере технологий",
        },
        {
          id: 52,
          date: 1988,
          text: "Произошёл внеочередной прорыв в сфере технологий",
        },
        {
          id: 53,
          date: 1992,
          text: "Технологии вышли на качественно новый уровень",
        },
        {
          id: 54,
          date: 1994,
          text: "Рекорд компании A был побит компанией B, это подверждают инженеры компании C",
        },
        {
          id: 55,
          date: 1997,
          text: "Технологии снова вышли на качественно новый уровень",
        },
        {
          id: 56,
          date: 2003,
          text: "Произошёл очередной прорыв в сфере технологий",
        },
      ],
    },
    {
      title: "Наука 2.0",
      id: 6,
      firstDate: 1977,
      secondDate: 1998,
      children: [
        {
          id: 61,
          date: 1977,
          text: "Свершилось чудо в научной сфере",
        },
        {
          id: 62,
          date: 1988,
          text: "Произошёл внеочередной прорыв в научной сфере",
        },
        {
          id: 63,
          date: 1992,
          text: "Наука вышла на качественно новый уровень",
        },
        {
          id: 64,
          date: 1994,
          text: "Рекорд компании A был побит компанией B, это подверждают учёные компании C",
        },
        {
          id: 65,
          date: 1998,
          text: "Произошёл очередной прорыв в научной сфере",
        },
      ],
    },
  ];

  const [mainIndex, setMainIndex] = useState(0);

  return (
    <>
      <h2 className={css.title}>Исторические даты</h2>
      <p>Circle</p>
      <p>mainIndex {mainIndex}</p>
      <Period />
      <MainCarouselDesktop
        data={data}
        mainIndex={mainIndex}
        onIndexChange={setMainIndex}
      />
      {/* <MainCarouselMobile data={data} /> */}
      <InfoDateCarousel dates={data[mainIndex].children} />
    </>
  );
}

export default App
