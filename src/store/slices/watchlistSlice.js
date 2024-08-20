import { createSlice } from "@reduxjs/toolkit";

const Initial_State = {
    watchlist: [],
};

const watchlistSlice = createSlice({
    name: "watchlistSlice",
    initialState: Initial_State,
    reducers: {
        toggleWatchList: (state, action) => {
            const new_watchlist = action.payload;
            if (
                !state.watchlist.find((watch) => watch.id === new_watchlist.id)
            ) {
                state.watchlist.push(new_watchlist);
            } else {
                state.watchlist = state.watchlist.filter(
                    (watch) => watch.id !== new_watchlist.id
                );
            }
        },

        clearwatchlist: (state, action) => {
            state.watchlist = [];
        },
    },
});

export const { toggleWatchList, clearwatchlist } = watchlistSlice.actions;
export default watchlistSlice.reducer;
