import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { SubmitButton, LinkContent } from '../styles/styledcomponents'
import Content from '../components/Content'
import { useSelector, useDispatch } from 'react-redux'
import { getContentList, getSingleContent } from '../redux/actions/contents'

const Container = styled.main`
  display: flex;
  flex-direction: column;
  /* height: 100vh; */
  margin-top: 60px;
  margin-left: 165px;
`
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
    align-items: center;
    margin-bottom: 20px;
  }
`
const Title = styled.h1`
  font-weight: 500;
`
const FilterWrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.direct || 'column'};
  border: 1px solid var(--black__100);
  border-radius: 5px;
  background: #F1F2F3;
`
const FilterContainer = styled.div`
  width: 100%;
  height: 10rem;
  padding: 15px;
  display: flex;
  justify-content: space-around;
`
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
`
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
const Contents = () => {
  const dispatch = useDispatch()
  const [ showFilterField, setShowFilterField ] = useState(false)
  useEffect(() => {
    console.log('여기 타니?')
    dispatch(getContentList())
  }, [])
  const contentList = useSelector(state => state.contentsReducer.contentList)
  console.log('contentList: ', contentList)
  const handleFilterField = () => {
    setShowFilterField(!showFilterField)
  }
  const closeFilterField = () => {
    setShowFilterField(false)
  }
  const handleFilter = () => {
    //필터링 검색 api 요청 보내기
  }
  return contentList.length === 0 ? (
    <></>
  ) : (
    <Container className="contents_container">
      <HeadContainer>
        <div className="head_first">
          <Title>All Questions</Title>
          <SubmitButton>Ask Question</SubmitButton>
        </div>
        <div className="head_second">
          <span>{contentList.length} questions</span>
          <SubmitButton
            bg={"var(--tag__back)"}
            color={"var(--tag__content)"}
            shadow={"white"}
            hover={"var(--button__light--hover)"}
            onClick={handleFilterField}
          >
            Filter
          </SubmitButton>
        </div>
        {showFilterField ? (
          <FilterWrapper className="filter_wrapper">
            <FilterContainer className="filter_container">
              <CustomList className="filter_by">
                <legend>Filter by</legend>
                <div>
                  <input type="checkbox" id="no_answers" />
                  <label htmlFor="no_answers">No answers</label>
                </div>
                <div>
                  <input type="checkbox" id="no_accepted_answer" />
                  <label htmlFor="no_accepted_answer">No accepted answer</label>
                </div>
              </CustomList>
              <CustomList className="sorted_by">
                <legend>Sorted by</legend>
                <div>
                  <input type="radio" id="newest" name="sort" checked/>
                  <label htmlFor="newest">Newest</label>
                </div>
                <div>
                  <input type="radio" id="recent_activity" name="sort" />
                  <label htmlFor="recent_activity">Recent activity</label>
                </div>
              </CustomList>
              <CustomList className="filter_by">
                <legend>Tagged with</legend>
                <div>
                  <input type="radio" id="the_following_tags" />
                  <label htmlFor="the_following_tags">
                    The following tags:
                  </label>
                </div>
                <div className="input_wrapper">
                  <input
                    className="the_following_tags"
                    id="the_following_tags"
                    placeholder="e.g. javascript or python"
                  />
                </div>
              </CustomList>
            </FilterContainer>
            <SubmitContainer className="sumbit_container">
              <SubmitButton
              onClick={handleFilter}
              >Apply filter</SubmitButton>
              <span onClick={closeFilterField}>Cancle</span>
            </SubmitContainer>
          </FilterWrapper>
        ) : null}
      </HeadContainer>
      {contentList.map((singleContent) => {
        return (
          <Content key={singleContent.shortId} singleContent={singleContent} />
        );
      })}
    </Container>
  );
}

export default Contents