import React from 'react';

import { getMediaRemoteUrl } from '../../utils/media';
import { LOGOS, getShortAddress } from '../../utils/wallet';

import CardButton from './CardButton';

const CardButtonWallet = ({
  title,
  address,
  subtitle,
  chain,
  image,
  imageSize,
  selected,
  active,
  onPress,
  onSecondaryPress,
  buttonStyle,
  touchableStyles,
  ...props
}) => (
  <CardButton
    key={address}
    title={title}
    subtitle={subtitle}
    description={`${getShortAddress(address)}`}
    image={getMediaRemoteUrl(image || LOGOS[chain])}
    imageSize={imageSize ? imageSize : 'xl'}
    mask="lg"
    active={active}
    selected={selected}
    onPress={onPress}
    onSecondaryPress={onSecondaryPress}
    buttonStyle={buttonStyle}
    touchableStyles={touchableStyles}
    {...props}
  />
);

export default CardButtonWallet;
