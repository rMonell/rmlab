export const state = () => ({
    value: 'fr-FR',

    staticTrans: {
        components: {
            'fr-FR': {
                backButton: 'Retour',
            },
            'en-US': {
                backButton: 'Go back',
            }
        },
        index: {
            'fr-FR': {
                title: 'Accueil',
                specialization: 'Développeur Front-end',
                scrollIndication: 'Scrollez pour naviguer'
            },
            'en-US': {
                title: 'Home',
                specialization: 'Front-end Developper',
                scrollIndication: 'Scroll to navigate'
            }
        },
        about: {
            'fr-FR': {
                title: 'À propos',
            },
            'en-US': {
                title: 'About',
            }
        },
        projects: {
            'fr-FR': {
                title: 'Mes projets',
                role: 'Role',
                year: 'Année'
            },
            'en-US': {
                title: 'My projects',
                role: 'Role',
                year: 'year'
            }
        },
        contact: {
            'fr-FR': {
                title: 'Me contacter',
            },
            'en-US': {
                title: 'Contact me',
            }
        }
    }
})

export const mutations = {
    set (state, value) {
        state.value = value
    },
    getTrans(state, locale, page, target) {
        return state.staticTrans[page][locale][target]
    }
}