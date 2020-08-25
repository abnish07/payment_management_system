import {ADD_USER} from './actionType'
import user from '../user.json'
import category from '../category.json'
import type from '../type.json'

const initState= {
    user: [...user],
    category: [...category],
    type: [...type]
} 

const reducer=(state= initState(type, payload))=>{
    switch(type){
        case ADD_USER:
            return{
                ...state,
                data: [...state, payload]
            }
       default:
           return state
    }
}