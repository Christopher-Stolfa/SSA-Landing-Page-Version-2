import React, { useMemo, useState } from 'react';
import styles from './Testimonials.module.scss';
import { useQuery } from '@apollo/client';
import GET_PAGE_DATA, { IPageData } from '../../data/get-data';
import { Header } from '../../components/Headers';
import { CardCarousel } from '../../components/CardCarousel';
import { uniqueId } from 'lodash';
import { PersonCard } from '../../components/Cards';
import { Button } from '../../components/Buttons';
import { makeNumArray } from '../../utils';

enum ELabels {
  'faculty',
  'students',
}

const Testimonials = () => {
  const { data, loading, error } = useQuery<IPageData>(GET_PAGE_DATA);
  const [toggle, setToggle] = useState<ELabels>(ELabels.faculty);
  const isActive = (label: ELabels) => label === toggle;
  const skeletonData = makeNumArray(4).map(() => ({
    loading,
    name: 'Loading Skelington...',
    testimonial: 'Hello! Hello! Hello! I am the loading skelington from outer space :)',
  }));
  const cardsData = useMemo(() => {
    if (toggle === ELabels.faculty) return data?.page?.landingPage?.testimonials?.faculty;
    if (toggle === ELabels.students) return data?.page?.landingPage?.testimonials?.students;
    return [];
  }, [data?.page?.landingPage?.testimonials, toggle]);
  const onFacultyClick = () => {
    setToggle(ELabels.faculty);
  };
  const onStudentsClick = () => {
    setToggle(ELabels.students);
  };
  return (
    <div>
      <div className={styles['container']}>
        <Header as="h2">TESTIMONIALS</Header>
        <div className={styles['content']}>
          <div className={styles['left-block']}>
            <div className={styles['toggle-wrapper']}>
              <div
                role="checkbox"
                aria-checked={isActive(ELabels.faculty)}
                className={
                  isActive(ELabels.faculty)
                    ? styles['toggle-button-active']
                    : styles['toggle-button']
                }
                onClick={onFacultyClick}>
                FACULTY & STAFF
              </div>
              <div
                role="checkbox"
                aria-checked={isActive(ELabels.students)}
                className={
                  isActive(ELabels.students)
                    ? styles['toggle-button-active']
                    : styles['toggle-button']
                }
                onClick={onStudentsClick}>
                STUDENTS
              </div>
            </div>
            {isActive(ELabels.faculty) && (
              <>
                <div className={styles['title']}>
                  We shape the students of the future.
                  <br />
                  In turn, they shape the future.
                </div>
                <div className={styles['summary']}>
                  Our faculty and staff are committed to continually evolve our teaching practice to
                  include more of the cultures and history of our student body; this diversity
                  shapes, refocuses, and tests tradition, emboldening new direction and purpose in
                  our field.
                </div>
                <Button
                  href={data?.page?.landingPage?.buttonUrls?.faculty}
                  className={styles['btn']}>
                  MEET THE FACULTY &amp; STAFF
                </Button>
              </>
            )}
            {isActive(ELabels.students) && (
              <>
                <div className={styles['title']}>
                  Designing for the betterment of our
                  <br />
                  shared global community.
                </div>
                <div className={styles['summary']}>
                  Our professional B.Arch. and M.Arch. programs are shaped by the diversity of our
                  students, the inventive research of our faculty, and by multidisciplinary
                  collaborations. We prepare students to become engaged designers and to apply an
                  expansive set of skills to address pressing social, cultural, environmental, and
                  professional challenges. With a rigorous foundation in the core competencies of
                  building design, history, theory, and technologies, and with an emphasis on agile
                  thinking, the Architecture programs aim to educate the next generation of
                  innovators redefining the role of the architect in the present and the future.
                </div>
              </>
            )}
          </div>
          <CardCarousel>
            {(loading || error) &&
              skeletonData?.map((dummyData) => (
                <PersonCard key={uniqueId(dummyData?.name)} {...dummyData} />
              ))}
            {cardsData?.map((person) => (
              <PersonCard
                loading={loading}
                key={uniqueId(person?.name)}
                name={person?.name}
                position={person?.position}
                src={person?.image?.link}
                alt={person?.image?.altText}
                testimonial={person?.testimonial}
              />
            ))}
          </CardCarousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
