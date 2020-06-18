import Vue from 'vue'
import { TimelineLite, Expo } from 'gsap'

Vue.prototype.$Navigator = function (store, router) {
    this.store = store
    this.router = router

    this.tree = this.store.state.section.tree
    this.isPlayingTimeline = false

    this.routePusher = (route, index) => {
        store.commit('section/set', index)
        router.push(route)
    }

    this.timeline = (direction, route) => {
        const overlay = document.querySelector('#app-overlay')
        const timeline = new TimelineLite() 
        const easing = Expo.easeInOut

        const index = this.tree.indexOf(route)

        const oppositeDirection = direction === 'bottom' ? 'top' : 'bottom'

        overlay.style[oppositeDirection] = 0
        overlay.style[direction] = 'initial'
        
        timeline.to(overlay, .75, { height: '100%',  ease: easing, onComplete: () => this.routePusher(route, index) })
        timeline.to(overlay, .75, { height: '0', [direction]: 0, [oppositeDirection]: 'initial', ease: easing, onComplete: () =>  this.isPlayingTimeline = false })
    }

    this.playTimeline = (direction, route) => {
        this.timeline(direction, route)
        this.isPlayingTimeline = true
    } 

    this.next = (store) => {
        if (!this.isPlayingTimeline) {
            const index = store.state.section.index + 1

            index >= this.tree.length ? store.commit('section/set', 0) : store.commit('section/increment')
    
            this.playTimeline('bottom', this.tree[store.state.section.index])
        }
    }

    this.prev = (store) => {
        if (!this.isPlayingTimeline) {
            const index = store.state.section.index - 1

            index < 0 ? store.commit('section/set', this.tree.length - 1) : store.commit('section/decrement')

            this.playTimeline('top', this.tree[store.state.section.index])
        }
    }

    this.set = (route, currentRoute) => {
        if (currentRoute !== route) {
            !this.isPlayingTimeline && this.playTimeline(
                this.store.state.section.index > this.tree.indexOf(route) ? 'top' : 'bottom',
                route
            )
        }
    } 
}