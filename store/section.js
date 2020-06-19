export const state = () => ({
    index: 0,
    sectionChanged: false,
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
    },
    setSectionChanged (state, value) {
        state.sectionChanged = value
    },
    toggleSectionChanged (state) {
        state.sectionChanged = !state.sectionChanged ? true : false
    }
}