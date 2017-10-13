import Vue from 'vue'

export default {
    state() {
        return {
            channels: {}, // slug => channel
        }
    },
    mutations: {
        SET_CHANNELS(state, channels) {
            state.channels = {}
            channels.forEach(channel => {
                state.channels[channel.slug] = channel
            })
        },
        SET_CHANNEL(state, { slug, info }) {
            if (!state.channels[slug]) {
                return
            }
            Vue.set(state.channels[slug], 'info', info)
        }
    },
    actions: {
        async FETCH_CHANNELS({ commit }) {
            const { channels } = await this.$axios.$get('channels')
            commit('SET_CHANNELS', channels)
        },
        async FETCH_CHANNEL({ commit }, slug) {
            const { info } = await this.$axios.$get('channels/' + slug)
            commit('SET_CHANNEL', { slug, info })
        }
    }
}