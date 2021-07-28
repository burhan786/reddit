import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { BsBookmarkFill } from 'react-icons/bs'
import { BsBookmark } from 'react-icons/bs'


function SaveButton() {

    const [save, setSave] = useState(false)

    const handleClick = () => {
        setSave(!save);
    }

    return (
        <div>
            {save ? (<Button variant="light" 
            style={{ backgroundColor: 'transparent', border:'none'}} 
            onClick={handleClick}
            >
                <BsBookmarkFill />saved
            </Button>) : 
            (<Button variant="light" 
            onClick={handleClick } 
            style={{ backgroundColor: 'transparent', border:'none'}}
            >
                <BsBookmark />save
            </Button>)}
        </div>
    )
}

export default SaveButton
