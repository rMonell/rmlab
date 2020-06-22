export const state = () => ({
    value: 'fr-FR',

    staticTrans: {
        global: {
            'fr-FR': {
                goBack: 'Retour',
            },
            'en-US': {
                goBack: 'Go back',
            }
        },
        index: {
            'fr-FR': {
                title: 'Accueil',
                specialization: 'Développeur Front-end',
                scrollIndication: 'Scollez vers le bas'
            },
            'en-US': {
                title: 'Home',
                specialization: 'Front-end Developper',
                scrollIndication: 'Scroll down'
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
                role: 'Rôle',
                year: 'Année',
                next: 'Suivant',
                previous: 'Précedent'
            },
            'en-US': {
                title: 'My projects',
                role: 'Role',
                year: 'year',
                next: 'Next',
                previous: 'Previous'
            }
        },
        contact: {
            'fr-FR': {
                title: 'Me contacter',
                fullname: 'Nom complet',
                email: 'Email',
                message: 'Message',
                send: 'Envoyer',
                error: 'Tous les champs doivent être remplis',
                success: 'Message envoyé'
            },
            'en-US': {
                title: 'Contact me',
                fullname: 'Full name',
                email: 'Email',
                message: 'Message',
                send: 'Send',
                error: 'All the fields are required.',
                success: 'Message sent'
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