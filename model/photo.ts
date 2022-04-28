import {ImageSourcePropType} from 'react-native';

interface IPhoto {
  id: number;
  src: ImageSourcePropType;
}

const photo: IPhoto[] = [
  {
    id: 1,
    src: require('../src/assets/images/IMG_5108.jpg'),
    //
  },
  {
    id: 2,
    src: require('../src/assets/images/IMG_7730.jpg'),
  },
];

export default photo;
