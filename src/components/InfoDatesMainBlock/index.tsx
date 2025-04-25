import { useMediaQuery } from 'react-responsive';
import css from './index.module.scss';
import { useState } from 'react';
import { Period } from '../Period';
import { IndexSelector } from '../IndexSelector';
import { MainCarousel } from '../MainCarousel';
import { InfoDateCarouselMobile } from '../InfoDateCarouselMobile';
import { InfoDateCarousel } from '../InfoDateCarousel';
import { MainCarouselMobile } from '../MainCarouselMobile';

export const InfoDatesMainBlock = ({ data }) => {
  const [mainIndex, setMainIndex] = useState(0);

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <div className={css.mainContainer}>
      <h2 className={css.title}>Исторические даты</h2>

      <Period firstDate={data[mainIndex].firstDate} secondDate={data[mainIndex].secondDate} />

      {isMobile ? null : (
        <IndexSelector
          title={data[mainIndex].title}
          mainIndex={mainIndex}
          total={data.length}
          onIndexChange={setMainIndex}
        />
      )}

      {isMobile ? null : <MainCarousel data={data} mainIndex={mainIndex} onIndexChange={setMainIndex} />}

      {isMobile ? (
        <InfoDateCarouselMobile dates={data[mainIndex].children} />
      ) : (
        <InfoDateCarousel dates={data[mainIndex].children} />
      )}

      {isMobile ? <MainCarouselMobile data={data} mainIndex={mainIndex} onIndexChange={setMainIndex} /> : null}
    </div>
  );
};
