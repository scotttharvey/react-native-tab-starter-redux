export const UPDATE_COUNT = 'UPDATE_COUNT';

export function updateCount(update){
  return {
    type: UPDATE_COUNT,
    update: update,

  }
}
