import { 
    ADD_MESSAGE 
} from '../actions/types'

const initialState = [
    {
        id: 1,
        title: 'feed',
        messages: [
            { user: 'Golubok', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit', date: '22/05/2020 22:00'},
            { user: 'Antonio', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit consectetur adipisicing elit', date: '22/06/2020 22:00'}
        ]
    },
    {
        id: 2,
        title: 'important',
        messages: [
            { user: 'Golubok', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Lorem ipsum dolor, sit amet consectetur adipisicing elit', date: '22/05/2020 22:00'},
            { user: 'Antonio', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit', date: '22/06/2020 22:00'}
        ]
    }
]

export default function roomsReducer(state = initialState, {type, payload}) {
    switch (type) {
        case ADD_MESSAGE:            
            return;
    
        default:
            return state;
    }
}