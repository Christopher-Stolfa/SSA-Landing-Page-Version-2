import React from 'react';
import styles from './IconButton.module.scss';
import { facebook, instagram, linkedin, twitter, youtube } from '../../assets/socialMedia';
import { mail } from '../../assets/svgs';

export type TIconVariant = 'facebook' | 'instagram' | 'linkedin' | 'mail' | 'twitter' | 'youtube';

const iconVariants = {
  facebook: facebook,
  instagram: instagram,
  linkedin: linkedin,
  twitter: twitter,
  youtube: youtube,
  mail: mail,
};
export interface IIconButtonProps {
  href: string;
  variant: TIconVariant;
  className?: string;
}

const IconButton = ({ href, variant, className }: IIconButtonProps) => {
  return (
    <a target="_blank" rel="noreferrer" href={href}>
      <img className={`${styles['root']} ${className}`} alt={variant} src={iconVariants[variant]} />
    </a>
  );
};

export default IconButton;
