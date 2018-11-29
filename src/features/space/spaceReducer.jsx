import { createReducer } from '../../app/common/util/reducerUtil';
import { CREATE_SPACE, UPDATE_SPACE, DELETE_SPACE} from './spaceConstants';


export const initialState = [
    {
      id: '1',
      name: 'Nyama Mama',
      date: '2018-11-12',
      category: 'Restaurant',
      description:
        'Sankara Hotels & Resorts creates and operates luxury and upperect local culture, food, art and design.',
      city: '',
      location: "Nairobi, Kenya",
      hostedBy: 'Bob',
      thumbnailURL: 'https://nomadicfoxcom.files.wordpress.com/2017/09/the-terrace-at-nyama-mama-delta-photo-by-jan-fox.jpg?w=1500',
      Photos: [
        {
          id: '1',
          photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
        },
        {
          id: '2',
          photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
        }
      ]
    },
    {
      id: '2',
      name: 'Sankara',
      date: '2018-01-06',
      category: 'restaurant',
      description:
        'Sankara Hotels & Resorts creates and operates luxury and upperect local culture, food, art and design.',
      city: 'London, UK',
      location: 'Mombasa',
      hostedBy: 'Tom',
      thumbnailURL: 'http://www.travelstart.co.ke/blog/wp-content/uploads/2014/11/SetHeight800-Villa-Rosa-Kempinski-Swimming-Pool.jpg',
      Photos: [
        {
          id: '1',
          photoURL: 'http://www.sankara.com/d/sankararedesign/media/__thumbs_582_336_crop/RESTAURANTBARS_Sarabi5.jpg?1473132865'
        },
        {
          id: '2',
          photoURL: 'https://www.africanmeccasafaris.com/wp-content/uploads/sankaranairobi2.jpg'
        }
      ]
    }
  ];


  export const createSpace = (state, payload) => {
      return[...state, Object.assign({}, payload.space)]
  }

  export const updateSpace = (state, payload) => {
      return[
          ...state.filter(space => space.id !== payload.space.id),
          Object.assign({}, payload.space)
      ]
  }

  export const deleteSpace = (state, payload) => {
      return[
          ...state.filter(space => space.id !== payload.spaceId),

      ]
  }

  export default createReducer(initialState, {
      [CREATE_SPACE]: createSpace,
      [UPDATE_SPACE]: updateSpace,
      [DELETE_SPACE]: deleteSpace
  })