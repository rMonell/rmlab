export const state = () => ({
    index: 0
})

export const mutations = {
    increment (state) {
        state.index++
    },
    decrement (state) {
        state.index--
    }
}