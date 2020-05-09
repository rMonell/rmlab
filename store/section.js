export const state = () => ({
    index: 0,
    tree: ['/', '/about', '/projects', '/contact']
})

export const mutations = {
    increment (state) {
        state.index++
    },
    decrement (state) {
        state.index--
    },
    set (state, index) {
        state.index = index
    }
}