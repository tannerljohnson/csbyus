import React from 'react';
import {Image} from 'semantic-ui-react';

import diagram from './OurModelFlowChartDiagram.png';
import aria from './aria.jpg';
import tanner from './tanner.png';
import amy from './amy.png';
import carter from './carter.jpg';
// Import background from './background_image.jpg';
import youtubePlaceholder from './youtubeImagePlaceholder.png';

console.log(diagram);

// Const ExampleImage = () => (
//     <Image src="./images/OurModelFlowChartDiagram.png"/>
// )

export class ExampleImage extends React.Component {
  render() {
    return (
      <Image src={diagram}/>
    );
  }
}

export class YoutubePlaceholder extends React.Component {
  render() {
    return (
      <Image src={youtubePlaceholder}/>
    );
  }
}

export class AriaImage extends React.Component {
  render() {
    return (
      <Image circular centered size="small" src={aria}/>
    );
  }
}

export class TannerImage extends React.Component {
  render() {
    return (
      <Image circular centered size="small" src={tanner}/>
    );
  }
}

export class AmyImage extends React.Component {
  render() {
    return (
      <Image circular centered size="small" src={amy}/>
    );
  }
}
export class CarterImage extends React.Component {
  render() {
    return (
      <Image circular centered size="small" src={carter}/>
    );
  }
}

export class BackgroundImage extends React.Component {
  render() {
    return (
      <Image backgrounded wrapped centered fluid dimmer src={'https://farm1.staticflickr.com/925/42589893674_f6494a86b0_b.jpg'}/>
    //   <Embed
    //   icon='right circle arrow'
    //   placeholder='https://farm1.staticflickr.com/925/42589893674_f6494a86b0_b.jpg'
    //   url='https://www.csbyus.org'
    // />
    );
  }
}
// Function ModelDiagram() {
//   // Import result is the URL of your image
//   return <img src={exPicture} alt="Diagram" />;
// }

// export default ModelDiagram;
