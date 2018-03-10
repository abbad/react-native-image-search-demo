const BASE_URL = `https://pixabay.com/api/`;
const KEY = '8319320-a61e024d72c121ff197725de7'; 

export function fetchImages(query, pageNumber=1) {
  return (dispatch) => {
    let url = `${BASE_URL}?key=${KEY}&q=${encodeURIComponent(query)}&page=${pageNumber}`;
    dispatch(startRequestingImages());
    fetch(url)
      .then((response) => response.json()
      .then((responseJson) => {
        dispatch(fetchImagesSuccessfull(responseJson, pageNumber));
      })
    )
    .catch((error) => {
      dispatch(fetchImagesFailed())
    });
  }
};

export const Set_Search_Text = 'Set_Search_Text';
export function setSearchText(text) {
  return {
    type: Set_Search_Text, 
    text
  }
}

export const Reset_Images = 'Reset_Images';
export function resetImagesStore() {
  return {
    type: Reset_Images,
  }
};

export const Start_Requesting_Images = 'Start_Requesting_Images'; 
function startRequestingImages() {
  return { 
    type: Start_Requesting_Images
  }
};

export const Fetch_Images_Successfull = 'Fetch_Images_Successfull'; 
function fetchImagesSuccessfull(payload, pageNumber) {
  return {
    payload: payload, 
    type: Fetch_Images_Successfull,
    page: pageNumber,
  }
};

export const Fetch_Images_Failed = 'Fetch_Images_Failed'; 
function fetchImagesFailed() {
  return {
    type: Fetch_Images_Failed,
  }
};
