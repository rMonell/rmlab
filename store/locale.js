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
        error: {
            'fr-FR': {
                head: {
                    title: {
                        '404': 'Page introuvable',
                        error: "Erreur"
                    },
                    description: {
                        '404': "Le page demandé est introuvable",
                        error: "Une erreur s'est produite lors du chargement de la page."
                    }
                },
            },
            'en-US': {
                head: {
                    title: 'Page not found',
                    description: "The requested page could not be found"
                },
            }
        },
        index: {
            'fr-FR': {
                head: {
                    title: 'Renaud Monell - Développeur Front-end',
                    description: "Je m'appelle Renaud, j'ai 23 ans et actuellement développeur web front-end pour un éditeur de logiciels basé à Marseille."
                },
                custom_title: 'Accueil',
                specialization: 'Développeur Front-end',
                scrollIndication: 'Scollez vers le bas'
            },
            'en-US': {
                head: {
                    title: 'Renaud Monell - Front-end Developper',
                    description: "Je m'appelle Renaud, j'ai 23 ans et actuellement développeur web front-end pour un éditeur de logiciels basé à Marseille."
                },
                custom_title: 'Home',
                specialization: 'Front-end Developper',
                scrollIndication: 'Scroll down'
            }
        },
        about: {
            'fr-FR': {
                head: {
                    title: 'À propos',
                    desciption: "Je m'appelle Renaud, j'ai 23 ans et actuellement développeur web front-end pour un éditeur de logiciels basé à Marseille."
                },
            },
            'en-US': {
                head: {
                    title: 'About',
                    description: "My name is Renaud, I'm 23 years old and currently a front-end web developer for a software publisher based in Marseille."
                },
            }
        },
        projects: {
            'fr-FR': {
                head: {
                    title: 'Mes projets',
                    description: "Découvrez les projets sur lesquels j'ai eu l'occasion de travailler."
                },
                role: 'Rôle',
                year: 'Année',
                more: 'Voir le projet',
                next: 'Suivant',
                previous: 'Précedent'
            },
            'en-US': {
                head: {
                    title: 'My projects',
                    description: "Discover the projects I have had the opportunity to work on."
                },
                role: 'Role',
                year: 'year',
                more: 'View project',
                next: 'Next',
                previous: 'Previous'
            }
        },
        contact: {
            'fr-FR': {
                head: {
                    title: 'Me contacter',
                    description: "Une demande particulière ? n'hésitez pas à me contacter directement par formulaire."
                },
                fullname: 'Nom complet',
                email: 'Email',
                subject: 'Sujet',
                message: 'Message',
                send: 'Envoyer',
                error: 'Tous les champs doivent être remplis',
                success: 'Message envoyé'
            },
            'en-US': {
                head: {
                    title: 'Contact me',
                    description: "Any special request ? do not hesitate to contact me directly by form."
                },
                fullname: 'Full name',
                email: 'Email',
                subject: 'Subject',
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