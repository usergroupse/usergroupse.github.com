function showTwitter() {
  new TWTR.Widget({
    version: 2,
    type: 'list',
    rpp: 30,
    interval: 6000,
    title: 'Tweets from the usergroups',
    subject: '',
    width: 300,
    height: 300,
    theme: {
      shell: {
        background: '#D3FF82',
        color: '#363D52'
      },
      tweets: {
        background: '#D3FF82',
        color: '#363D52',
        links: '#121D28'
      }
    },
    features: {
      scrollbar: true,
      loop: false,
      live: true,
      hashtags: true,
      timestamp: true,
      avatars: true,
      behavior: 'all'
    }
  }).render().setList('xlson', 'stodev').start();
}
