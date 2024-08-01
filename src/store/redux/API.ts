export const getTemplateAPI = async (rejectWithValue: (data: any) => {}) => {
  const response = await fetch('api/test');
  //const response = await fetch('weatherforecast');
  //const response = await fetch('https://catfact.ninja/fact');
  const data = await response.json();
  if (!response.ok) {
    rejectWithValue(data);
  } else {
    return data;
  }
};

// {
//   text: ''
// }
