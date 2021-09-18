import React, { useState, Component ,memo} from 'react';
import RocketCore from './RocketCore';

export const FunctionalRocket = memo(() => {
  const [initialLaunchTime] = useState(Date.now())
 

  return <RocketCore initialLaunchTime={initialLaunchTime} />;
})

export class ClassRocket extends Component {
  constructor() {
    super();

    this.state = {
      initialLaunchTime: Date.now()
    };
  }

  render() {
    const { initialLaunchTime } = this.state;

    return <RocketCore initialLaunchTime={initialLaunchTime} />;
  }
}
