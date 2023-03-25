import React from 'react'
import styled from "styled-components"

const DropDownContainer = styled("div")``;
const DropDownHeader = styled("div")``;
const DropDownListContainer = styled("div")``;
const DropDownList = styled("ul")``;
const ListItem = styled("li")``;

export default function NumberOfEntries() {
  return (
    <div className='entry-wrapper'>
        <DropDownContainer>
        <DropDownHeader>Mangoes</DropDownHeader>
        <DropDownListContainer>
          <DropDownList>
            <ListItem>Mangoes</ListItem>
            <ListItem>Apples</ListItem>
            <ListItem>Oranges</ListItem>
          </DropDownList>
        </DropDownListContainer>
      </DropDownContainer>

    </div>
  )
}

