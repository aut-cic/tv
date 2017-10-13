const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')
const cheerio = require('cheerio')
const Keyv = require('keyv')
const { channels, getChannelBySlug } = require('../lib/channels')

// Initialize express app
const app = express()
app.use(bodyParser.json())

/**
 * /api/channels
 */
app.get('/channels', (req, res) => {
    res.json({
        channels
    })
})


/**
 * /api/channels/:slug
 */
const infoCache = new Keyv()
app.get('/channels/:slug', async (req, res) => {
    const channel = getChannelBySlug(req.params.slug)
    if (!channel) {
        return res.status(404).end()
    }

    const cacheKey = channel.epg_id
    let info = await infoCache.get(cacheKey)
    if (info) {
        return res.send({ info })
    }

    const { data } = await axios.post('https://www.irib.ir/include/pages/live-ajax-right-side.php', `EPG_id=${channel.epg_id}`, {
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })

    const $ = cheerio.load(data)

    const title = $('h4.firoozeyi').text().trim()
    const duration = $('h5.toosi>span').text().trim()
    const summary = $('h5').next().text().trim()

    info = {
        title,
        duration,
        summary
    }

    await infoCache.set(cacheKey, info, 3 * 60 * 1000)

    res.send({ info })
})

/**
 * /api/conductor
 */
const conductorCache = new Keyv()
app.get('/conductor/:slug', async (req, res) => {
    const channel = getChannelBySlug(req.params.slug)
    if (!channel) {
        return res.status(404).end()
    }

    const cacheKey = channel.epg_id
    let conductor = await conductorCache.get(cacheKey)
    if (conductor) {
        return res.send({ conductor })
    }

    const { data } = await axios.get(`https://www.irib.ir/conductor/${channel.epg_id}`)

    const $ = cheerio.load(data)
    conductor = $('.row.caption-box').find('.row.box').map((_, el) => {
        const row = $(el)

        const title = row.find('h4').text().trim()
        const summary = row.find('.cobox-description').text().trim()

        const time = row.find('.cobox-time li span').map((_, el) => $(el).text()).get()
        const start = time[0].trim()
        const end = time[1].trim()
        const duration = time[2].trim()

        return {
            title,
            summary,
            start,
            end,
            duration
        }
    }).get()

    await conductorCache.set(cacheKey, conductor, 15 * 60 * 1000)

    res.send({ conductor })
})

// Export app
module.exports = app

// Start server if directly called
if (require.main === module) {
    app.listen(3001, () => {
        console.log('API Listening on port 3001') // eslint-disable-line no-console
    })
}
