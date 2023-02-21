
const initialState = {
    contentList: [
        {
          "shortId": 1,
          "title": "How to pass props to this.props.children",
          "content": "I'm trying to find the proper way to define some components which could be used in a generic",
          "tag": ["javascript", "react", "ERC"],
          "createdAt": "2023-02-10T15:00:37Z",
          "lastModifiedAt": "2023-02-19T13:58:37Z",
          "view": 1,
          "votes": 0,
          "isSelected": true,
          "comments": [
            {
              "shortId": 1,
              "author": "상원",
              "content": "자허블 맛있어요",
              "createdAt": "dateObject",
              "lastModifiedAt": "dateObject"
            }
          ]
        },
        
        {
          "shortId": 2,
          "title": "Embeddable JavaScript widget with React",
          "content": "Is it possible to create an embeddable JavaScript widget using the React JavaScript library ",
          "tag": ["javascript", "react"],
          "createdAt": "dateObject",
          "lastModifiedAt": "dateObject",
          "view": 10,
          "votes": 0,
          "isSelected": false,
          "comments": [
            {
              "shortId": 2,
              "author": "혜림",
              "content": "저도 좀 알려주세요",
              "createdAt": "dateObject",
              "lastModifiedAt": "dateObject"
            }
          ]
        },
        {
          "shortId": 3,
          "title": "React Javascript Array Object [closed]",
          "content": "I have a local constant like result = [] my map function in react js works",
          "tag": ["javascript", "react"],
          "createdAt": "dateObject",
          "lastModifiedAt": "dateObject",
          "view": 20,
          "votes": 0,
          "isSelected": false,
          "comments": [
            {
              "shortId": 3,
              "author": "윤혜",
              "content": "해결하시면 코드주세요~",
              "createdAt": "dateObject",
              "lastModifiedAt": "dateObject"
            }
          ]
        },
        {
          "shortId": 4,
          "title": "React/JavaScript preload small videos",
          "content": "How could we preload videos in React?",
          "tag": ["javascript", "react"],
          "createdAt": "dateObject",
          "lastModifiedAt": "dateObject",
          "view": 0,
          "votes": 0,
          "isSelected": true,
          "comments": [
            {
              "shortId": 4,
              "author": "민주",
              "content": "다른 방법 찾으시는걸 추천드려요",
              "createdAt": "dateObject",
              "lastModifiedAt": "dateObject"
            }
          ]
        },
        {
          "shortId": 5,
          "title": "Not Invoking SecurityFilterChain",
          "content": "I setup a springboot application and am trying to get basic user logins setup",
          "tag": ["spring", "security"],
          "createdAt": "dateObject",
          "lastModifiedAt": "dateObject",
          "view": 0,
          "votes": 0,
          "isSelected": true,
          "comments": [
            {
              "shortId": 5,
              "author": "도연",
              "content": "글쎄요 저도 몰라서 다른 방법으로 해보세여",
              "createdAt": "dateObject",
              "lastModifiedAt": "dateObject"
            }
          ]
        },
        {
          "shortId": 6,
          "title": "CommonsMultipartFile cannot be resolved to a type",
          "content": "After upgrading spring from older version, to Spring 6.0.4 I noticed this file has moved:",
          "tag": ["spring", "security"],
          "createdAt": "dateObject",
          "lastModifiedAt": "dateObject",
          "view": 11,
          "votes": 0,
          "isSelected": true,
          "comments": [
            {
              "shortId": 6,
              "author": "민혁",
              "content": "모르겠어서 답변을 드릴 수 없어요",
              "createdAt": "dateObject",
              "lastModifiedAt": "dateObject"
            }
          ]
        },
        {
          "shortId": 7,
          "title": "NextJS vs Express",
          "content": "I am quite new to nodeJS backend development, and am feeling a bit stuck in choosing between NextJS and ExpressJS which to learn and use in my next project",
          "tag": ["nextjs", "react"],
          "createdAt": "dateObject",
          "lastModifiedAt": "dateObject",
          "view": 11,
          "votes": 0,
          "isSelected": true,
          "comments": [
            {
              "shortId": 7,
              "author": "수민",
              "content": "아 모르겠어요",
              "createdAt": "dateObject",
              "lastModifiedAt": "dateObject"
            }
          ]
        },
        {
          "shortId": 8,
          "title": "NextJS component",
          "content": "I currently do it this way in reactJS but since moving to NextJS it does not work The issue is that the following work fine in my current ReactJS",
          "tag": ["react", "nextjs"],
          "createdAt": "dateObject",
          "lastModifiedAt": "dateObject",
          "view": 11,
          "votes": 0,
          "isSelected": false,
          "comments": [
            {
              "shortId": 8,
              "author": "민규",
              "content": "저도 커피를 좋아합니다.",
              "createdAt": "dateObject",
              "lastModifiedAt": "dateObject"
            }
          ]
        },
        {
          "shortId": 9,
          "title": "NextJS and Storybook",
          "content": "Does NextJS support NPM Modules in Storybook? ",
          "tag": ["nextjs", "react", "javascript"],
          "createdAt": "dateObject",
          "lastModifiedAt": "dateObject",
          "view": 0,
          "votes": 0,
          "isSelected": false,
          "comments": [
            {
              "shortId": 9,
              "author": "도욱",
              "content": "아바라 맛있나요?",
              "createdAt": "dateObject",
              "lastModifiedAt": "dateObject"
            }
          ]
        },
        {
          "shortId": 10,
          "title": "javascript map and reduce array list",
          "content": "it looks const totalData = data.length; for(var i =0 ; i < totalData ; i++)",
          "tag": ["javascript"],
          "createdAt": "dateObject",
          "lastModifiedAt": "dateObject",
          "view": 11,
          "votes": 0,
          "isSelected": false,
          "comments": [
            {
              "shortId": 10,
              "author": "재욱",
              "content": "알게되시면 저도 좀 알려주세요",
              "createdAt": "dateObject",
              "lastModifiedAt": "dateObject"
            }
          ]
        }
      ]
}

export const contentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_CONTENT' :
            return {
                ...action.payload
            }
            default : 
            return state
    }
}