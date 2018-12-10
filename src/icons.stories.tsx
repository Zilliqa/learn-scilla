import * as React from 'react';
import { storiesOf } from '@storybook/react';

import {
  FaGoogle,
  FaGithub,
  FaArrowLeft,
  FaArrowRight,
  FaCheck,
  FaRegLightbulb,
  FaRegEye,
  FaRegEyeSlash,
  FaRegComments,
  FaTimes,
  FaGitter,
  FaTwitter,
  FaMedal
} from 'react-icons/fa';

const icons = {
  FaGoogle: <FaGoogle />,
  FaGithub: <FaGithub />,
  FaGitter: <FaGitter />,
  FaTwitter: <FaTwitter />,
  FaArrowLeft: <FaArrowLeft />,
  FaArrowRight: <FaArrowRight />,
  FaCheck: <FaCheck />,
  FaRegLightbulb: <FaRegLightbulb />,
  FaRegEye: <FaRegEye />,
  FaRegEyeSlash: <FaRegEyeSlash />,
  FaRegComments: <FaRegComments />,
  FaTimes: <FaTimes />,
  FaMedal: <FaMedal />
};
const keyList = Object.keys(icons);

storiesOf('Icons', module).add('All Icons', () => (
  <div>
    {keyList.map((key) => {
      return (
        <div className="p-2" key={key}>
          {icons[key]} <small>{key}</small>
        </div>
      );
    })}
  </div>
));
