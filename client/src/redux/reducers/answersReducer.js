const initialState = {
    answers: [
        {
          "shortId": 1,
          "author": "혜림",
          "content": "저는 커피를 좋아합니다",
          "createdAt": "dateObject",
          "lastModifiedAt": "dateObject",
          "contentNumber": 1,
          "comments": [
            {
              "shortId": 1,
              "author": "상원",
              "content": "저도 커피를 좋아합니다.",
              "createdAt": "dateObject",
              "lastModifiedAt": "dateObject"
            }
          ]
        },
      
        {
          "shortId": 2,
          "author": "윤혜",
          "content": "저는 커피를 내려 먹습니다",
          "createdAt": "dateObject",
          "lastModifiedAt": "dateObject",
          "contentNumber": 1,
          "comments": [
            {
              "shortId": 1,
              "author": "상원",
              "content": "저도 커피를 좋아합니다.",
              "createdAt": "dateObject",
              "lastModifiedAt": "dateObject"
            }
          ]
        },
      
        {
          "shortId": 3,
          "author": "sagomungchi",
          "content": "Don't remove the repository",
          "createdAt": "dateObject",
          "lastModifiedAt": "dateObject",
          "contentNumber": 2,
          "comments": [
            {
              "shortId": 1,
              "author": "goawaymungchi",
              "content": "아무것도 하지 마세요",
              "createdAt": "dateObject",
              "lastModifiedAt": "dateObject"
            }
          ]
        },
        
        {
          "shortId": 4,
          "author": "홍재",
          "content": "피그마에서 하이파이브 하실 분",
          "createdAt": "dateObject",
          "lastModifiedAt": "dateObject",
          "contentNumber": 2,
          "comments": [
            {
              "shortId": 1,
              "author": "윤혜",
              "content": "저요저요",
              "createdAt": "dateObject",
              "lastModifiedAt": "dateObject"
            },
            {
              "shortId": 2,
              "author": "혜림",
              "content": "저요저요",
              "createdAt": "dateObject",
              "lastModifiedAt": "dateObject"
            },
            {
              "shortId": 3,
              "author": "민주",
              "content": "저요저요",
              "createdAt": "dateObject",
              "lastModifiedAt": "dateObject"
            },
            {
              "shortId": 4,
              "author": "준영",
              "content": "저요저요",
              "createdAt": "dateObject",
              "lastModifiedAt": "dateObject"
            },
            {
              "shortId": 5,
              "author": "상원",
              "content": "저요저요",
              "createdAt": "dateObject",
              "lastModifiedAt": "dateObject"
            }
          ]
        },
        {
          "shortId": 5,
          "author": "혜림",
          "content": "몬소린지 1도 몰릅니다",
          "createdAt": "dateObject",
          "lastModifiedAt": "dateObject",
          "contentNumber": 1,
          "comments": [
            {
              "shortId": 1,
              "author": "상원",
              "content": "저도 커피를 좋아합니다.",
              "createdAt": "dateObject",
              "lastModifiedAt": "dateObject"
            }
          ]
        },
        {
          "shortId": 5,
          "author": "준영",
          "content": "하늘 같은 부팀장님 지나갑니다",
          "createdAt": "dateObject",
          "lastModifiedAt": "dateObject",
          "contentNumber": 3,
          "comments": [
            {
              "shortId": 1,
              "author": "상원",
              "content": "엣헴",
              "createdAt": "dateObject",
              "lastModifiedAt": "dateObject"
            }
          ]
        },
        {
          "shortId": 7,
          "author": "민주",
          "content": "젭 풀장으로 오세요, 선착순 2분",
          "createdAt": "dateObject",
          "lastModifiedAt": "dateObject",
          "contentNumber": 7,
          "comments": [
            {
              "shortId": 1,
              "author": "민주",
              "content": "저요저요",
              "createdAt": "dateObject",
              "lastModifiedAt": "dateObject"
            },
            {
              "shortId": 2,
              "author": "민주",
              "content": "저요저요",
              "createdAt": "dateObject",
              "lastModifiedAt": "dateObject"
            },
            {
              "shortId": 3,
              "author": "민주",
              "content": "저요저요",
              "createdAt": "dateObject",
              "lastModifiedAt": "dateObject"
            }
          ]
        },
        {
          "shortId": 8,
          "author": "사고뭉치",
          "content": "몬소린지 1도 몰릅니다",
          "createdAt": "dateObject",
          "lastModifiedAt": "dateObject",
          "contentNumber": 10,
          "comments": [
            {
              "shortId": 1,
              "author": "상원",
              "content": "저도 커피를 좋아합니다.",
              "createdAt": "dateObject",
              "lastModifiedAt": "dateObject"
            }
          ]
        },
        {
          "shortId": 9,
          "author": "혜림",
          "content": "크로플, 커피, 절편, 딸기",
          "createdAt": "dateObject",
          "lastModifiedAt": "dateObject",
          "contentNumber": 1,
          "comments": [
            {
              "shortId": 1,
              "author": "사고뭉치",
              "content": "그만 드세요",
              "createdAt": "dateObject",
              "lastModifiedAt": "dateObject"
            }
          ]
        },
        {
          "shortId": 10,
          "author": "뭉치즈",
          "content": "모두들 팥팅입니다. 지금처럼만!",
          "createdAt": "dateObject",
          "lastModifiedAt": "dateObject",
          "contentNumber": 1,
          "comments": [
            {
              "shortId": 1,
              "author": "상원",
              "content": "💜",
              "createdAt": "dateObject",
              "lastModifiedAt": "dateObject"
            },
            {
              "shortId": 2,
              "author": "윤혜",
              "content": "💜",
              "createdAt": "dateObject",
              "lastModifiedAt": "dateObject"
            },
            {
              "shortId": 3,
              "author": "홍재",
              "content": "💜",
              "createdAt": "dateObject",
              "lastModifiedAt": "dateObject"
            },
            {
              "shortId": 4,
              "author": "민주",
              "content": "💜",
              "createdAt": "dateObject",
              "lastModifiedAt": "dateObject"
            },
            {
              "shortId": 5,
              "author": "준영",
              "content": "💜",
              "createdAt": "dateObject",
              "lastModifiedAt": "dateObject"
            },
            {
              "shortId": 6,
              "author": "혜림",
              "content": "💜",
              "createdAt": "dateObject",
              "lastModifiedAt": "dateObject"
            }
          ]
        }
      ]
}

export const answersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ACTION' : 
            return {}
            default : 
            return state
    }
}