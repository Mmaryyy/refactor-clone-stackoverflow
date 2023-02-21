const initialState = {
    userData: [
        {
            "shortId": 1,
            "nickname": "sagomungchi",
            "email": "sagomungchi@github.com",
            "password": 1234,
            "joinDate": "dateObject",
            "isSocial": true,
            "avatarUrl": "./images/Avatar1.png",
            "authority": true,
            "contents" : [ 1 ]
        },
        {
            "shortId": 2,
            "nickname": "yoonae",
            "email": "yoonae7@github.com",
            "password": 1234,
            "joinDate": "dateObject",
            "isSocial": false,
            "avatarUrl": "./images/Avatar2.png",
            "authority": false,
            "contents" : [ 2 ]
        },
        {
            "shortId": 3,
            "nickname": "hyerim",
            "email": "hyerimonae7@github.com",
            "password": 1234,
            "joinDate": "dateObject",
            "isSocial": true,
            "avatarUrl": "./images/Avatar3.png",
            "authority": false,
            "contents" : [ 3 ]
        },
        {
            "shortId": 4,
            "nickname": "sangwon",
            "email": "sangwon@github.com",
            "password": 1234,
            "joinDate": "dateObject",
            "isSocial": false,
            "avatarUrl": "./images/Avatar4.png",
            "authority": false,
            "contents" : [ 4 ]
        },
        {
            "shortId": 5,
            "nickname": "hongjae",
            "email": "hongjae@github.com",
            "password": 1234,
            "joinDate": "dateObject",
            "isSocial": false,
            "avatarUrl": "./images/Avatar5.png",
            "authority": false,
            "contents" : [ 5 ]
        },
        {
            "shortId": 6,
            "nickname": "minju",
            "email": "minju@github.com",
            "password": 1234,
            "joinDate": "dateObject",
            "isSocial": true,
            "avatarUrl": "./images/Avatar6.png",
            "authority": false,
            "contents" : [ 6 ]
        },
        {
            "shortId": 7,
            "nickname": "junyoung",
            "email": "junyoung@github.com",
            "password": 1234,
            "joinDate": "dateObject",
            "isSocial": true,
            "avatarUrl": "./images/Avatar7.png",
            "authority": false,
            "contents" : [ 7 ]
        },
        {
            "shortId": 8,
            "nickname": "codestates",
            "email": "codestates@github.com",
            "password": 1234,
            "joinDate": "dateObject",
            "isSocial": true,
            "avatarUrl": "./images/Avatar8.png",
            "authority": false,
            "contents" : [ 8 ]
    
        },
        {
            "shortId": 9,
            "nickname": "coco",
            "email": "coco@github.com",
            "password": 1234,
            "joinDate": "dateObject",
            "isSocial": false,
            "avatarUrl": "./images/Avatar9.png",
            "authority": false,
            "contents" : [ 9 ]
    
        },
        {
            "shortId": 10,
            "nickname": "ccomeng",
            "email": "ccomeng@github.com",
            "password": 1234,
            "joinDate": "dateObject",
            "isSocial": true,
            "avatarUrl": "./images/Avatar10.png",
            "authority": false,
            "contents" : [ 10 ]
    
        }
    ]
}

export const userDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ACTION' : 
            return {}
            default : 
            return state
    }
}