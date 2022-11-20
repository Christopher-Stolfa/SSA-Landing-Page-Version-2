import React from 'react';
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
}

const IconButton = ({ href, variant }: IIconButtonProps) => {
  return (
    <a target="_blank" rel="noreferrer" href={href}>
      <img alt={variant} src={iconVariants[variant]} />
    </a>
  );
};

export default IconButton;
