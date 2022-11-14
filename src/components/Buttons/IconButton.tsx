import React from 'react';
import { facebook, instagram, linkedin, twitter, youtube } from '../../assets/socialMedia';
import { mail } from '../../assets/svgs';

type IconVariant = 'facebook' | 'instagram' | 'linkedin' | 'mail' | 'twitter' | 'youtube';

const iconVariants = [
  { facebook: facebook },
  { instagram: instagram },
  { linkedin: linkedin },
  { twitter: twitter },
  { youtube: youtube },
  { mail: mail },
];

interface Props {
  href: string;
  variant: IconVariant;
}

const IconButton = ({ href, variant }: Props) => {
  <a href={href}>
    <img alt={variant} src={iconVariants[variant]} />
  </a>;
};

export default IconButton;
