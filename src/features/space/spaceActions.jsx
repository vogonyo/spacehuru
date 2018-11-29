import {CREATE_SPACE, UPDATE_SPACE, DELETE_SPACE} from './spaceConstants';

export const createSpace = (space) => {
    return{
        type: CREATE_SPACE,
        payload: {
             space
        }
    }
}
export const updateSpace = (space) => {
    return{
        type: UPDATE_SPACE,
        payload: {
             space
        }
    }
}

export const deleteSpace = (spaceId) => {
    return{
        type: DELETE_SPACE,
        payload: {
             spaceId
        }
    }
}