export const state = () => ({
    value: 'dark'
})

export const mutations = {
    set (state, value) {
        state.value = value
    }
}