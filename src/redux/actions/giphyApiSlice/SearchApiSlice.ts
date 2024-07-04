import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {config} from '../../../../config';

const apiKey = config.API_KEY;
const baseURL = config.BASE_URL;

interface GiphyResponse {
  data: any[];
  pagination: {
    totalCount: number;
  };
}

interface SearchParams {
  query: string;
}

const fetchGifs = createAsyncThunk(
  'gifs/fetchGifs',
  async (params: SearchParams, {rejectWithValue}) => {
    try {
      const response = await fetch(
        `${baseURL}?api_key=${apiKey}&q=${params.query}`,
      );

      if (!response.ok) {
        throw new Error('Failed to fetch GIFs');
      }

      const data: GiphyResponse = await response.json();
      return data.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

const giphySlice = createSlice({
  name: 'gifs',
  initialState: {
    gifs: [] as any[],
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchGifs.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchGifs.fulfilled, (state, action) => {
      state.loading = false;
      state.gifs = action.payload;
    });
    builder.addCase(fetchGifs.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default giphySlice.reducer;
export {fetchGifs};
