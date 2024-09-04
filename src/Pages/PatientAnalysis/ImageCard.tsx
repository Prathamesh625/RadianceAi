import React, { useContext } from 'react';
import style from './index.module.css';
import x_ray from '../../assets/x-ray.jpg';
import { Theme } from '../../Context/ThemeContext';

const ImageCard: React.FC = (props) => {
  const { image, type, setShowModel, setModalImage } = props;

  const { darkMode } = useContext(Theme);

  const imageLoaderHandler = () => {
    setModalImage({ image, type });
    setShowModel(true);
  };

  return (
    <div
      className={darkMode ? style.imageCard : style.imageCardDark}
      onClick={imageLoaderHandler}
    >
      <p className={style.imageCardTitle}>{type}</p>
      <img src={image || x_ray} width="300px" />
    </div>
  );
};

export default ImageCard;
