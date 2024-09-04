import { ArrowBack, Close } from '@mui/icons-material';
import './index.css';
import image from '../../assets/x-ray.jpg';

function ImageLoader({ setDisplay, img }) {
  let images = document.getElementById('img-load');
  console.log(img);

  return (
    <div className="imageloader">
      <ArrowBack onClick={() => setDisplay(false)} />
      <p className="image-name">{img.type}</p>
      <img className="img-load" id="img-load" src={img.image} />
    </div>
  );
}

export default ImageLoader;
