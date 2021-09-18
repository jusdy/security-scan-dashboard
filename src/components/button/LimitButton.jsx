import React from "react"
import { DropdownButton, Dropdown } from "react-bootstrap"
import './Button.scss'

const PaginationButton = (props) => {

    return (
        <>
            <DropdownButton id={props.id} className="dropdown-limit" title="5">
                <Dropdown.Item>5</Dropdown.Item>
                <Dropdown.Item>10</Dropdown.Item>
                <Dropdown.Item>15</Dropdown.Item>
            </DropdownButton>
        </>
    )
}

export default PaginationButton