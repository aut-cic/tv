const channels = require('../static/channels/irib.json')

module.exports.getChannels = () => channels

module.exports.getChannelByEpgId = epg_id => {
    const _epg_id = parseInt(epg_id)
    return channels.find(channel => channel.epg_id === _epg_id)
}

module.exports.getChannelBySlug = slug => {
    return channels.find(channel => channel.slug === slug)
}