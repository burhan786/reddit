import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { BsBookmarkFill } from 'react-icons/bs'
import { BsBookmark } from 'react-icons/bs'
import 'bootstrap/dist/css/bootstrap.min.css';

function SaveButton() {

    const [save, setSave] = useState(false)

    return (
        <div>
            {save ? (<Button variant="light" style={{ backgroundColor: 'transparent', border:'none'}} onClick={() => { setSave(!save) }}><BsBookmarkFill />saved</Button>) : 
            (<Button variant="light" onClick={() => { setSave(!save) } } style={{ backgroundColor: 'transparent', border:'none'}}><BsBookmark />save</Button>)}
        </div>
    )
}

export default SaveButton
