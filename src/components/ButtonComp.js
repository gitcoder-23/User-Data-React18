import React from 'react'
import { Button } from 'react-bootstrap'

const ButtonComp = ({onClickButton,variant,buttonName}) => {
  return (
    <>
    <Button variant={variant} onClick={onClickButton}>
    {buttonName}
    </Button>
    </>
  )
}

export default ButtonComp
