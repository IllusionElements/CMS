/** @format */

class Friend {
  constructor(
    { id, Gamertag, Gamerscore, GameDisplayPicRaw, AccountTier, XboxOneRep },
    XboxService
  ) {
    this.id = id
    this.Gamertag = Gamertag
    this.Gamerscore = Gamerscore
    this.GameDisplayPicRaw = GameDisplayPicRaw
    this.AccountTier = AccountTier
    this.XboxOneRep = XboxOneRep
    if (!Friend.XboxService) {
      Friend.XboxService = XboxService
    }
  }

  gamertag = ({ Gamertag }) => Gamertag

  gamerscore = ({ Gamerscore }) => Gamerscore

  friends = async (gamertag = this.Gamertag) =>
    Friend.XboxService.gamertag('friends', { gamertag })
}
const allowedIds = [
  '2533274832341319',
  '2533274843945512',
  '2533274922216660',
  '2533275004348486',
  '2535464615046027',
]
const cache = new Map()
export default (XboxService, BlacklistService) => ({
  Friend: {
    blacklist: ({ Gamertag }) => BlacklistService.isBlacklisted(Gamertag),
    friends: async target => {
      const friend = new Friend(target, XboxService)
      if (allowedIds.includes(friend.id)) {
        return friend.friends()
      }

      return {
        id: 123,
        name: 'null',
      }
    },
  },
  Query: {
    friendsList: async (root, args) => {
      const {
        xuid,
        member: { gamertag },
      } = args
      if (cache.has(gamertag)) {
        return cache.get(gamertag).data
      }
      if (xuid) {
        return XboxService.gamertag('xuid.friends', { xuid })
      }
      const res = await XboxService.gamertag('friends', { gamertag })

      return res
    },
  },
})
