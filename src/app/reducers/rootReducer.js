
import { combineReducers} from 'redux';
import testReducer from '../../features/TestArea/testReducer';
import spaceReducer from '../../features/space/spaceReducer';

const rootReducer = combineReducers({
    test: testReducer,
    spaces: spaceReducer
});

export default rootReducer;