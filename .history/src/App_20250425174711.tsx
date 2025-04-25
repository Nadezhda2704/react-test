import { useState } from 'react';
import { MainCarousel } from './components/MainCarousel';
import "./styles/global.scss";
import { InfoDateCarousel } from './components/InfoDateCarousel';
import css from "./app.module.scss";
import { Period } from './components/Period';
import { IndexSelector } from './components/IndexSelector';
import { useMediaQuery } from 'react-responsive';
import { MainCarouselMobile } from './components/MainCarouselMobile';
import { InfoDateCarouselMobile } from './components/InfoDateCarouselMobile';
import { data } from './mocs/data';

function App() {

  const [mainIndex, setMainIndex] = useState(0);

  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 1439px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <div className={css.mainContainer}>
      <h2 className={css.title}>Исторические даты</h2>
      <Period
        firstDate={data[mainIndex].firstDate}
        secondDate={data[mainIndex].secondDate}
      />

      {isMobile ? null : (
        <IndexSelector
          title={data[mainIndex].title}
          mainIndex={mainIndex}
          total={data.length}
          onIndexChange={setMainIndex}
        />
      )}

      {isMobile ? null : (
        <MainCarousel
          data={data}
          mainIndex={mainIndex}
          onIndexChange={setMainIndex}
        />
      )}

      {/* <MainCarouselMobile data={data} /> */}
      {isMobile ? (
        <InfoDateCarouselMobile dates={data[mainIndex].children}/>
      ) : (
        <InfoDateCarousel dates={data[mainIndex].children} />
      )}

      {isMobile ? (
        <MainCarouselMobile
          data={data}
          mainIndex={mainIndex}
          onIndexChange={setMainIndex}
        />
      ) : null}
    </div>
  );
}

export default App
