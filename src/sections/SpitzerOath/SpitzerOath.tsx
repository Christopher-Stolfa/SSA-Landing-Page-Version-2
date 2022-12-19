import React from 'react';
import styles from './SpitzerOath.module.scss';
import { spitzerOathBackground } from '../../assets/svgs';

const SpitzerOath = () => (
  <div style={{ backgroundImage: `url(${spitzerOathBackground})` }} className={styles['root']}>
    <div className={styles['container']}>
      <div className={styles['text-block']}>
        The Spitzer School acts in the spirit of the City College of New York&apos;s historic
        Ephebic Oath:
      </div>
      <div className={styles['text-block-midline']}>
        “To transmit the city, not only not less, but greater, better, and more beautiful than it
        was transmitted to us.”
      </div>
      <div className={styles['text-block']}>
        At Spitzer, students are determined to imagine a future for New York City that addresses the
        climate crisis and is grounded in environmental and social justice.
      </div>
    </div>
  </div>
);

export default SpitzerOath;
