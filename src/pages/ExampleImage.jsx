import React from 'react';
import ReactDOM from 'react-dom';
import { Image } from 'semantic-ui-react';

import diagram from "./OurModelFlowChartDiagram.png";
import aria from "./aria.jpg";
import tanner from "./tanner.png";
import amy from "./amy.png";
import carter from "./carter.jpg";
import background from "./background_image.jpg";

console.log(diagram);

// const ExampleImage = () => (
//     <Image src="./images/OurModelFlowChartDiagram.png"/>
// )

export class ExampleImage extends React.Component{
    render(){
        return (
            <Image src={diagram} />
            )
    }
}

export class AriaImage extends React.Component{
    render() {
        return (
            <Image circular centered size="small" src={aria}  />
        )
    }
}

export class TannerImage extends React.Component{
    render() {
        return (
            <Image circular centered size="small" src={tanner}  />
        )
    }
}

export class AmyImage extends React.Component{
    render() {
        return (
            <Image circular centered size="small" src={amy}  />
        )
    }
}
export class CarterImage extends React.Component{
    render() {
        return (
            <Image circular centered size="small" src={carter}  />
        )
    }
}

export class BackgroundImage extends React.Component{
    render() {
        return (
            <Image backgrounded centered fluid dimmer src={background} />
        )
    }
}
// function ModelDiagram() {
//   // Import result is the URL of your image
//   return <img src={exPicture} alt="Diagram" />;
// }

// export default ModelDiagram;