const channels = module.exports.channels = [
    {
        epg_id: 31,
        title: 'شبکه یک',
        slug: 'tv1',
    },
    {
        epg_id: 32,
        title: 'شبکه دو',
        slug: 'tv2',
    },
    {
        epg_id: 33,
        title: 'شبکه سه',
        slug: 'tv3',
    },
    {
        epg_id: 34,
        title: 'شبکه چهار',
        slug: 'tv4',
    },
    {
        epg_id: 35,
        title: 'شبکه پنج',
        slug: 'tv5',
    },
    {
        epg_id: 36,
        title: 'شبکه خبر',
        slug: 'irinn',
    },
    {
        epg_id: 37,
        title: 'شبکه آموزش',
        slug: 'amouzesh',
    },
    {
        epg_id: 38,
        title: 'شبکه قرآن',
        slug: 'quran',
    },
    {
        epg_id: 39,
        title: 'شبکه مستند',
        slug: 'mostanad'
    },
    {
        epg_id: 42,
        title: 'شبکه نمایش',
        slug: 'namayesh',
    },
    {
        epg_id: 43,
        title: 'شبکه افق',
        slug: 'ofogh',
    },
    {
        epg_id: 47,
        title: 'شبکه ورزش',
        slug: 'varzesh',
    },
    {
        epg_id: 29,
        title: 'شبکه پویا',
        slug: 'pouya',
    },
    {
        epg_id: 48,
        title: 'شبکه سلامت',
        slug: 'salamat',
    },
    {
        epg_id: 49,
        title: 'شبکه نسیم',
        slug: 'nasim',
    },
    {
        epg_id: 104,
        title: 'شبکه امید',
        slug: 'omid',
    },
    {
        epg_id: 69,
        title: 'شبکه تماشا',
        slug: 'tamasha',
    },
]

module.exports.getChannelByEpgId = epg_id => {
    const _epg_id = parseInt(epg_id)
    return channels.find(channel => channel.epg_id === _epg_id)
}

module.exports.getChannelBySlug = slug => {
    return channels.find(channel => channel.slug === slug)
}