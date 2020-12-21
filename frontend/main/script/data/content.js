const list = []

export default {
  state: {
    poster: {
      ru: {},
      en: {}
    },
    video: {
      ru: getForRus(),
      en: getForEng()
    }
  },

  mutations: {
    'set-poster': setPoster
  }
}


// state
function getForRus () {
  return [
    '/video/rus/001-video.mp4', '/video/rus/002-video.mp4', '/video/rus/003-video.mp4',
    '/video/rus/004-video.mp4', '/video/rus/005-video.mp4', '/video/rus/006-video.mp4',
    '/video/rus/007-video.mp4', '/video/rus/008-video.mp4', '/video/rus/009-video.mp4',
    '/video/rus/010-video.mp4', '/video/rus/011-video.mp4', '/video/rus/012-video.mp4',
    '/video/rus/013-video.mp4', '/video/rus/014-video.mp4', '/video/rus/015-video.mp4',
    '/video/rus/016-video.mp4', '/video/rus/017-video.mp4', '/video/rus/018-video.mp4',
    '/video/rus/019-video.mp4', '/video/rus/020-video.mp4', '/video/rus/021-video.mp4',
    '/video/rus/022-video.mp4', '/video/rus/023-video.mp4', '/video/rus/024-video.mp4',
    '/video/rus/025-video.mp4', '/video/rus/026-video.mp4', '/video/rus/027-video.mp4',
    '/video/rus/028-video.mp4', '/video/rus/029-video.mp4', '/video/rus/030-video.mp4',
    '/video/rus/031-video.mp4', '/video/rus/032-video.mp4', '/video/rus/033-video.mp4',
    '/video/rus/034-video.mp4', '/video/rus/035-video.mp4', '/video/rus/036-video.mp4',
    '/video/rus/037-video.mp4', '/video/rus/038-video.mp4', '/video/rus/039-video.mp4',
    '/video/rus/040-video.mp4', '/video/rus/041-video.mp4', '/video/rus/042-video.mp4',
    '/video/rus/043-video.mp4', '/video/rus/044-video.mp4', '/video/rus/045-video.mp4',
    '/video/rus/046-video.mp4', '/video/rus/047-video.mp4', '/video/rus/048-video.mp4',
    '/video/rus/049-video.mp4', '/video/rus/050-video.mp4', '/video/rus/051-video.mp4',
    '/video/rus/052-video.mp4'
  ]
}

function getForEng () {
  return [
    '/video/eng/001-video.mp4', '/video/eng/002-video.mp4', '/video/eng/003-video.mp4',
    '/video/eng/004-video.mp4', '/video/eng/005-video.mp4', '/video/eng/006-video.mp4',
    '/video/eng/007-video.mp4', '/video/eng/008-video.mp4', '/video/eng/009-video.mp4',
    '/video/eng/010-video.mp4', '/video/eng/011-video.mp4', '/video/eng/012-video.mp4',
    '/video/eng/013-video.mp4', '/video/eng/014-video.mp4', '/video/eng/015-video.mp4',
    '/video/eng/016-video.mp4', '/video/eng/017-video.mp4', '/video/eng/018-video.mp4',
    '/video/eng/019-video.mp4', '/video/eng/020-video.mp4', '/video/eng/021-video.mp4',
    '/video/eng/022-video.mp4', '/video/eng/023-video.mp4', '/video/eng/024-video.mp4',
    '/video/eng/025-video.mp4', '/video/eng/026-video.mp4', '/video/eng/027-video.mp4',
    '/video/eng/028-video.mp4', '/video/eng/029-video.mp4', '/video/eng/030-video.mp4',
    '/video/eng/031-video.mp4', '/video/eng/032-video.mp4', '/video/eng/033-video.mp4',
    '/video/eng/034-video.mp4', '/video/eng/035-video.mp4', '/video/eng/036-video.mp4',
    '/video/eng/037-video.mp4', '/video/eng/038-video.mp4', '/video/eng/039-video.mp4',
    '/video/eng/040-video.mp4', '/video/eng/041-video.mp4', '/video/eng/042-video.mp4',
    '/video/eng/043-video.mp4', '/video/eng/044-video.mp4', '/video/eng/045-video.mp4',
    '/video/eng/046-video.mp4', '/video/eng/047-video.mp4', '/video/eng/048-video.mp4',
    '/video/eng/049-video.mp4', '/video/eng/050-video.mp4', '/video/eng/051-video.mp4',
    '/video/eng/052-video.mp4'
  ]
}

// mutations
function setPoster (state, {key, id, poster}) {
  state.poster[key][id] = poster
}