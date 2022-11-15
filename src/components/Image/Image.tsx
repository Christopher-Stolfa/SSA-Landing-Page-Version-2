import React from 'react';
import styles from './Image.module.scss';

interface Props {
  src: string;
  alt: string;
}
const Image = ({ src, alt }: Props) => (
  <>
    <img alt={alt} className={styles['root']} src={src} />
  </>
);

export default Image;
