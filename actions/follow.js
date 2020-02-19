'use strict'

const UserError = require('../lib/user-error')
const log = require('../lib/log')
const create = require('./create')

module.exports = {
  title: 'Follow a profile',
  input: [
    {
      name: 'profileUrl',
      resolve: async () => {
        throw new UserError('Profile url required')
      }
    }
  ],
  handler: async ({ p2p, profileUrl }) => {
    let writableProfiles = []
    while (!writableProfiles.length) {
      const profileMods = await p2p.listProfiles()
      writableProfiles = profileMods.filter(mod => mod.metadata.isWritable)
      if (!writableProfiles.length) {
        log.info('Please create your profile first')
        await create.handler({ p2p, type: 'profile' })
      }
    }

    await p2p.follow(writableProfiles[0].rawJSON.url, profileUrl)
    log.success(
      `${writableProfiles[0].rawJSON.title} now follows ${profileUrl}`
    )
  }
}
