class XboxServiceAbstract {
  constructor(url) {
    const {
      private: {
        api: {
          keys: { xbox }
        }
      }
    } = Meteor.settings;
    this.apiKey = xbox;
    this.url = url;
  }

  methods = {
    gamertag: {
      friends: ({ gamertag }) => {
        return {
          auth: { "X-AUTH": this.apiKey },
          endpoint: `${gamertag}/friends`
        };
      },
      "xuid.friends"({ xuid }) {
        return this.friends({ gamertag: xuid });
      }
    }
  };

  actions({ type, endpoint, options }) {
    const methodToCall = this.methods[type][endpoint](options);

    return this.request(methodToCall, options);
  }

  gamertag(endpoint, options) {
    return this.actions({ type: "gamertag", endpoint, options });
  }
}

class XboxService extends XboxServiceAbstract {
  async request({ auth: headers, endpoint }) {
    const url = `${this.url}/${endpoint}`;

    const data = await fetch(url, {
      headers
    });

    return data.json();
  }
}

export default new XboxService("https://xboxapi.com/v2");
