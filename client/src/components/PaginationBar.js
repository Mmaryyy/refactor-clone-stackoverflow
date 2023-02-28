import { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
`
const PageButton = styled.div`
    border: 1px solid var(--black__100);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3px;
    background: 'white';
    min-width: 30px;
    height: 30px;
    padding: 3px;
    cursor: pointer;
    &:hover {
        background: var(--black__100);
    }
    &.active {
        border: none;
        background: var(--point__color);
        color: white;
    }
`

const PaginationBar = ({ pageInfo }) => {
  const { page, size, totalElements, totalPages } = pageInfo
  const getMidPage = (currentPage, totalPages) => {
    const pre = currentPage > 2 ? 2 : currentPage === 1 ? 0 : 1
    const array = new Array(5).fill(currentPage - pre)
    for (let i = 0; i < array.length; i++) {
        array[i] += i
    }
    return array.filter(el => el >= 1 && el <= totalPages) 
  }
  const Button = ({ value}) => {
    return (
        <PageButton 
        className={value === String(page) ? 'active' : null} 
        >{value}</PageButton>
    )
  }
  return (
    <Container className='pagination_container'>
        {page === 1 ? null : <Button key='prev' value='Prev'/>}
        {page < 4 ? null : <Button key='0' value='1'/>}
        {page < 5 ? null : <span className='prev_compress'>...</span>}
        {getMidPage(page, totalPages).map((el, idx) => <Button key={idx} value={`${el}`}/>)}
        {page > totalPages - 4 ? null : <span className='next_compress'>...</span>}
        {page > totalPages - 3 ? null : <Button key='last_page' value={totalPages}/>}
        <Button key='next' value='Next'/>
    </Container>
  )
}

export default PaginationBar