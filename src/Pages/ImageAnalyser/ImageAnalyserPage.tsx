import ImageAnalyserTool from './ImageAnalyserTool';
import style from './index.module.css';
import SideBar from '../../Component/SideBar/SideBar';

export const ImageAnalyserPage = () => {
  return (
    <div className={style.Flex}>
      <SideBar />
      <ImageAnalyserTool />
    </div>
  );
};
