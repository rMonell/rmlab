export const state = () => ({
    items: [
        {
            name: 'Projet 1',
            role: 'Développeur Front-end',
            year: '2019',
            description: 'Lorem ipsum dolore sit amet'
        }
    ]
})

export const mutations = {
    toggle (state) {
        state.isOpen = state.isOpen ? false : true
    }
}