import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SubmitButton, LinkContent } from '../styles/styledcomponents';
import Content from '../components/Content';
import { useSelector, useDispatch } from 'react-redux';
import { getContentList } from '../redux/actions/contents';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PaginationBar from '../components/PaginationBar';
const Container = styled.main`
  display: flex;
  flex-direction: column;
  /* height: 100vh; */
  margin-top: 60px;
  /* margin-left: 165px; */
  min-height: 90vh;
`;
const HeadContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* width: 100%; */
  /* height: 8rem; */
  padding: 20px;
  border-bottom: 1px solid var(--tab__focus);
  > div {
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    margin-bottom: 20px;
  }
`;
const Title = styled.h1`
  font-weight: 500;
`;
const FilterWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direct || 'column'};
  border: 1px solid var(--black__100);
  border-radius: 5px;
  background: #f1f2f3;
`;
const FilterContainer = styled.div`
  width: 100%;
  height: 12rem;
  padding: 15px;
  display: flex;
  justify-content: space-around;
`;
const SubmitContainer = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid var(--black__100);
  > span {
    display: flex;
    align-items: center;
    color: var(--link__content);
    cursor: pointer;
  }
`;
const CustomList = styled.fieldset`
  font-size: var(--fs--mid);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: none;
  > div {
    /* height: 1.5rem; */
    display: flex;
    align-items: center;
    margin-top: 10px;
    > label {
      margin-left: 5px;
    }
    > input.the_following_tags {
      margin-left: 18px;
      height: 30px;
      border: 1px solid var(--black__100);
      border-radius: 3px;
      padding: 5px;
      ::placeholder {
        color: var(--black__100);
      }
    }
  }
  > legend {
    font-weight: 550;
  }
`;
const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  > p {
    font-size: var(--fs--caption);
    color: var(--black__400);
    > span {
      font-weight: 700;
    }
  }
`
const Contents = ({ isSearch, isHome }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showFilterField, setShowFilterField] = useState(false);
  const [sortType, setSortType] = useState('created_At')
  const [filterType, setFilterType] = useState(1)

  useEffect(() => {
    // console.log('여기 타니?');
    dispatch(getContentList());
  }, []);

  const contentList = useSelector((state) => state.contentsReducer.contentList);
  const pageInfo = useSelector(state => state.contentsReducer.pageInfo)
  const handleFilterField = () => {
    setShowFilterField(!showFilterField);
  };
  const closeFilterField = () => {
    setShowFilterField(false);
  };
  const handleFilter = (e) => {
    //sortType, filterType, tags 포함 질문 조회
    e.preventDefault()
    const filter = {
      sortType,
      filterType
    }
    // console.log('filter: ', filter)
    // 필터링 검색 api 요청 보내기 -> 받아서 스토어에 contentsList 업데이트 해주기.
    navigate('/questions')
  };
  const handleSortType = (e) => {
    setSortType(e.target.value)
  }

  const handleFilterType = (e) => {
    setFilterType(e.target.value)
  }
  const getContentPageList = (page) => {
    console.log(page)
  }
  console.log('filterType: ', filterType)
  const handleNewQuestion = () => {
    // store에 currentContent 비워야함
    navigate('/ask')
  }
  return contentList.length === 0 ? (
    <Container>
      <span>데이터가 없습니다.</span>
    </Container>
  ) : (
    <Container className='contents_container'>
      <HeadContainer>
        <div className='head_first'>
          <Title>{isSearch ? 'Search Results' : isHome ? 'Top Questions' : 'All Questions'}</Title>
          <SubmitButton onClick={handleNewQuestion}>Ask Question</SubmitButton>
        </div>
        {isHome 
        ? <></> 
        : 
      <ResultWrapper className='result_text'>
        <p>Results for {'검색어'}</p>
        <p>Search options <span>not deleted</span></p>
      </ResultWrapper>}
        <div className='head_second'>
          {isHome 
          ? <></> 
          : <span>{contentList.length} {isSearch ? 'results' : 'questions'}</span>
          }
          {isSearch || isHome
          ? null 
          : <SubmitButton
            bg={'var(--tag__back)'}
            color={'var(--tag__content)'}
            shadow={'white'}
            hover={'var(--button__light--hover)'}
            onClick={handleFilterField}
          >
            Filter
          </SubmitButton>}
        </div>
        {showFilterField ? (
          <FilterWrapper className='filter_wrapper'>
            <FilterContainer className='filter_container'>
              <CustomList className='filter_by'>
                <legend>Filter by</legend>
                <div>
                  <input type='checkbox' id='no_answers' value='2' onClick={handleFilterType} checked={filterType === '2'}/>
                  <label htmlFor='no_answers'>No answers</label>
                </div>
                <div>
                  <input type='checkbox' id='no_accepted_answer' value='3' onClick={handleFilterType} checked={filterType === '3'}/>
                  <label htmlFor='no_accepted_answer'>No accepted answer</label>
                </div>
              </CustomList>
              <CustomList className='sorted_by'>
                <legend>Sorted by</legend>
                <div>
                  <input type='radio' id='newest' name='sort' value='created_At' onChange={handleSortType} checked={sortType === 'created_At'} />
                  <label htmlFor='newest'>Newest</label>
                </div>
                <div>
                  <input type='radio' id='recent_activity' value='modified_At' onChange={handleSortType} checked={sortType === 'modified_At'} name='sort' />
                  <label htmlFor='recent_activity'>Recent activity</label>
                </div>
                <div>
                  <input type='radio' id='high_votes' value='total_Vote' onChange={handleSortType} checked={sortType === 'total_Vote'} name='sort' />
                  <label htmlFor='high_votes'>High Votes</label>
                </div>
                <div>
                  <input type='radio' id='high_views' value='view' onChange={handleSortType} checked={sortType === 'view'} name='sort' />
                  <label htmlFor='high_views'>High Views</label>
                </div>
              </CustomList>
              {/* <CustomList className='filter_by'>
                <legend>Tagged with</legend>
                <div>
                  <input type='radio' id='the_following_tags' />
                  <label htmlFor='the_following_tags'>
                    The following tags:
                  </label>
                </div>
                <div className='input_wrapper'>
                  <input
                    className='the_following_tags'
                    id='the_following_tags'
                    placeholder='e.g. javascript or python'
                  />
                </div>
              </CustomList> */}
            </FilterContainer>
            <SubmitContainer className='sumbit_container'>
              <SubmitButton onClick={handleFilter}>Apply filter</SubmitButton>
              <span onClick={closeFilterField}>Cancle</span>
            </SubmitContainer>
          </FilterWrapper>
        ) : null}
      </HeadContainer>
      {contentList.map((singleContent) => {
        return (
          <Content key={singleContent.questionId} singleContent={singleContent} />
        );
      })}
      <div className='pagination_wrapper'>
        <PaginationBar pageInfo={pageInfo} apiCallFunction={getContentPageList}/>
      </div>
    </Container>
  );
};

export default Contents;
