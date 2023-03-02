import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SubmitButton } from '../styles/styledcomponents';
import Content from '../components/Content';
import { useSelector, useDispatch } from 'react-redux';
import { getContentList } from '../redux/actions/contents';
import { useLocation, useNavigate } from 'react-router-dom';
import PaginationBar from '../components/PaginationBar';
const Container = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  min-height: 90vh;
  width: calc(100% - 165px - 335px);
  /* width: calc(100% - 165px); */
  padding: 24px;
`;
const HeadContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 1px solid var(--tab__focus);
  > div {
    display: flex;
    justify-content: space-between;
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
  const location = useLocation();
  const queryParams = new URLSearchParams(window.location.search)
  const [showFilterField, setShowFilterField] = useState(false);
  const [sortType, setSortType] = useState('created_At')
  const [filterType, setFilterType] = useState(1)
  const contentList = useSelector((state) => state.contentsReducer.contentList);
  const pageInfo = useSelector(state => state.contentsReducer.pageInfo)
  const currentUser = useSelector(state => state.userDataReducer.currentUser)

  useEffect(() => {
    dispatch(getContentList(
      getParamValue(queryParams.get('page')), 
      getParamValue(queryParams.get('keyword')), 
      getParamValue(queryParams.get('sortType')), 
      getParamValue(queryParams.get('filterType'))
    ));
    if (location.pathname !== '/search') {
      setShowFilterField(false)
    }
  }, [location]);
  const getParamValue = (value) => {
    if (value === null) return undefined;
    return value;
  }
  const keyword = getParamValue(queryParams.get('keyword'))
  const handleFilterField = () => {
    setShowFilterField(!showFilterField);
  };
  const closeFilterField = () => {
    setShowFilterField(false);
  };
  const onClickFilter = (e) => {
    //sortType, filterType, tags 포함 질문 조회
    e.preventDefault()
    //keyword가 없을때
    dispatch(getContentList(1, '', sortType, filterType))
    // 필터링 검색 api 요청 보내기 -> 받아서 스토어에 contentsList 업데이트 해주기.
    navigate(`/search?page=${1}&keyword=${''}&sortType=${sortType}&filterType=${filterType}`)
  };
  const handleSortType = (e) => {
    setSortType(e.target.value)
  }
  const handleFilterType = (e) => {
    if (filterType === e.target.value) {
      setFilterType('')
      return
    }
    setFilterType(e.target.value)
  }
  const getContentPageList = (page) => {
    dispatch(getContentList(
      page, 
      getParamValue(queryParams.get('keyword')), 
      getParamValue(queryParams.get('sortType')), 
      getParamValue(queryParams.get('filterType'))
    ));
  }
  
  const handleNewQuestion = () => { 
    // store에 currentContent 비워야함 
    if(Object.keys(currentUser).length !== 0) { 
      navigate('/ask') 
    } 
    else {
      window.alert('You can write question after log-in')
    } 
  }
  
  return contentList.length === 0 ? (
    <Container>
      <HeadContainer>
        <div className='head_first'>
          <Title>{isSearch ? 'Search Results' : isHome ? 'Top Questions' : 'All Questions'}</Title>
          <SubmitButton onClick={handleNewQuestion}>Ask Question</SubmitButton>
        </div>
        {isSearch
        ?
      <ResultWrapper className='result_text'>
        <p>Results for {keyword}</p>
        <p>Search options <span>not deleted</span></p>
      </ResultWrapper>
        : <></> }
        <div className='head_second'>
          {isHome 
          ? <></> 
          : <span>{pageInfo.totalElements} {isSearch ? 'results' : 'questions'}</span>
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
                  <input type='checkbox' id='no_answers' value='2' onChange={handleFilterType} />
                  <label htmlFor='no_answers'>No answers</label>
                </div>
                <div>
                  <input type='checkbox' id='no_accepted_answer' value='3' onChange={handleFilterType} />
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
              <SubmitButton onClick={onClickFilter}>Apply filter</SubmitButton>
              <span onClick={closeFilterField}>Cancle</span>
            </SubmitContainer>
          </FilterWrapper>
        ) : null}
      </HeadContainer>
    </Container>
  ) : (
    <Container className='contents_container'>
      <HeadContainer>
        <div className='head_first'>
          <Title>{isSearch ? 'Search Results' : isHome ? 'Top Questions' : 'All Questions'}</Title>
          <SubmitButton onClick={handleNewQuestion}>Ask Question</SubmitButton>
        </div>
        {isSearch 
        ? <ResultWrapper className='result_text'>
            <p>Results for {keyword}</p>
            <p>Search options <span>not deleted</span></p>
          </ResultWrapper>
        : <></> 
        }
        <div className='head_second'>
          {isHome 
          ? <></> 
          : <span>{pageInfo.totalElements} {isSearch ? 'results' : 'questions'}</span>
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
                <input type='checkbox' id='no_answers' value='2' onChange={handleFilterType} />
                <label htmlFor='no_answers'>No answers</label>
              </div>
              <div>
                <input type='checkbox' id='no_accepted_answer' value='3' onChange={handleFilterType} />
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
            <SubmitButton onClick={onClickFilter}>Apply filter</SubmitButton>
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
