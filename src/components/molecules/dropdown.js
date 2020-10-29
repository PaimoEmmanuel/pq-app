import React, { useState } from 'react';
import styled from "styled-components";
import { Body3 } from "../atoms/typography";
import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
} from 'styled-dropdown-component';
import { getColor, getColorRGB } from '../../utils/color';
import { DropDownArrow } from "../atoms/icons";

const DropdownButton = styled.button`
    height: 5.6rem;
    width: 100%;
    background-color: ${getColor("lightestGray")};
    border: none;
    padding: 0 2.3rem;
    &:focus {
        outline: none;
    }
    & svg {
        float: right
    }
`;
const FullWidth = styled.button`
    width: calc(35.6rem - 3.5rem);
    padding: 1rem;
    border: none;
    &:hover,
    &:focus {
        background-color: rgba(${getColorRGB("lightGray2")}, 0.12);
        outline: none;
    }    
`;
const MenuWrapper = styled.div`
    max-height: 30rem;
    overflow-y: scroll;
`;
// const ItemButton = styled.button`

// `;
export const SimpleDropdown = ({items}) => {
    const [hidden, setHidden] = useState(true);
    const [itemSelected, setItemSelected] = useState("");

    return (
        <Dropdown>
            <DropdownButton dropdownToggle onClick={() => setHidden(!hidden)}>
                <Body3>{itemSelected}</Body3>
                <DropDownArrow />
            </DropdownButton>
            <DropdownMenu hidden={hidden} toggle={() => setHidden(!hidden)}>
                <MenuWrapper>
                    {items.map(item => (
                    <DropdownItem>
                    <FullWidth onClick={() => {setItemSelected(item); setHidden(true)}}><Body3>{item}</Body3></FullWidth>
                </DropdownItem>
                ))}
                </MenuWrapper>
                
            </DropdownMenu>
        </Dropdown>
    );
}