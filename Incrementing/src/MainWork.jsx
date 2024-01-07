// import react from 'react';
import { useState } from 'react';
import Counter from './Counter';
function MainWork(){
    const [Linkefollowers, setLinkefollowers] = useState(0)
    const [Instafollowers, setInstafollowers] = useState(0)
    return(
      <>
         <Counter/>

      </>
    )
}
export default MainWork; 
