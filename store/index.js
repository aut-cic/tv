import Vue from 'vue'

export default {
    state() {
        return {
            channels: {}, // slug => channel
            info: {},     // slug => channel info
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
            Vue.set(state.info, slug, info)
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