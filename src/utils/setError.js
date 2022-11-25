export const setError = (state) => {
  let errorMessage = '';
  let errorHeader = '';
  if (!state.auth.showError) {
    if (state.getSong.songsList[0]?.id === "API ERROREDd999999" || state.getNews.newsList[0]?.id === "API ERROREDd999999") {
      errorMessage = state.getSong.songsList[0]?.id === "API ERROREDd999999" ? state.getSong.songsList[0]?.name : state.getNews.newsList[0]?.name;
      errorHeader = 'API call failed';
    }
  } else {
    errorMessage = `Reason: ${state.auth.userId}, clear cache and refresh the page to retry`;
    errorHeader = 'Sign in failed';
  }
  return ({errorHeader, errorMessage});
}