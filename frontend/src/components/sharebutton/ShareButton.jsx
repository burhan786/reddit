import { Button } from 'react-bootstrap'
import React from 'react'
import {AiOutlineShareAlt} from 'react-icons/ai'
function ShareButton() {

    //This method will handle the event onclick for the button
    const handleClick = () => {
        console.log("Share button clicked");
    }


    return (
        <div>   
            <Button variant="light" 
            style={{ backgroundColor: 'transparent', border:'none'}}
            onClick = {handleClick}
            >
                <AiOutlineShareAlt/> share
            </Button>
        </div>
    )
}

export default ShareButton
