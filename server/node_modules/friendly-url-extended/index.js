module.exports = function (title, maxlen) {
  if (!title) return ''

  maxlen = maxlen || 80
  var len = title.length
  var prevdash = false
  var sb = [ ]
  var c

  for (var i = 0; i < len; ++i) {
    c = title[i]
    if ((c >= 'a' && c <= 'z') || (c >= '0' && c <= '9')) {
      sb.push(c)
      prevdash = false
    } else if (c >= 'A' && c <= 'Z') {
      sb.push(c.toLowerCase())
      prevdash = false
    } else if (c === ' ' || c === ',' || c === '.' || c === '/' ||
      c === '\\' || c === '-' || c === '_' || c === '=') {
      if (!prevdash && sb.length > 0) {
        sb.push('-')
        prevdash = true
      }
    } else if (c.charCodeAt(0) >= 128) {
      var remapped = remapInternationalCharToAscii(c)
      if (remapped) {
        sb.push(remapped)
        prevdash = false
      }
    }
    if (sb.length === maxlen) break
  }

  if (prevdash) return sb.join('').substring(0, sb.length - 1)
  else return sb.join('')
}

function remapInternationalCharToAscii (c) {

  // Vowels //
  if ('àåáâãåaÆæÅÄα'.indexOf(c) !== -1) return 'a'
  else if ('èéêe'.indexOf(c) !== -1) return 'e'
  else if ('ìíîïiÏ'.indexOf(c) !== -1) return 'i'
  else if ('òóôõøoðΩωΟοŒ'.indexOf(c) !== -1) return 'o'
  else if ('ùúûuuΥυ'.indexOf(c) !== -1) return 'u'

  // Consanants //
  else if ('Ββ'.indexOf(c) !== -1) return 'b'
  else if ('çcccÇ'.indexOf(c) !== -1) return 'c'
  else if ('Δδ'.indexOf(c) !== -1) return 'd'
  else if ('ƒ'.indexOf(c) !== -1) return 'f'
  else if ('ggΓγ'.indexOf(c) !== -1) return 'g'
  else if ('Ιι'.indexOf(c) !== -1) return 'i'
  else if ('Κκ'.indexOf(c) !== -1) return 'k'
  else if ('Λλ'.indexOf(c) !== -1) return 'l'
  else if ('Μμ'.indexOf(c) !== -1) return 'm'
  else if ('ñnΝνÑ'.indexOf(c) !== -1) return 'n'
  else if ('Ρρ'.indexOf(c) !== -1) return 'r'
  else if ('ssšsΣσςŠ'.indexOf(c) !== -1) return 's'
  else if ('Ττ'.indexOf(c) !== -1) return 's'
  else if ('Ξξ'.indexOf(c) !== -1) return 'x'
  else if ('ýÿŸ'.indexOf(c) !== -1) return 'y'
  else if ('zzžΖζß'.indexOf(c) !== -1) return 'z'

  // Sounds //
  else if ('Ππ'.indexOf(c) !== -1) return 'pi'
  else if ('Ψψ'.indexOf(c) !== -1) return 'ps'
  else if ('Χχ'.indexOf(c) !== -1) return 'ch'
  else if ('Χχ'.indexOf(c) !== -1) return 'ph'
  else if ('Θθþ'.indexOf(c) !== -1) return 'th'
  else if ('Ð'.indexOf(c) !== -1) return 'eth'

  // Single One-offs //
  else if (c === 'r') return 'r'
  else if (c === 'l') return 'l'
  else if (c === 'd') return 'd'
  else if (c === 'ä') return 'ae'
  else if (c === 'ö') return 'oe'
  else if (c === 'ü') return 'ue'
  else if (c === 'ß') return 'ss'
  else if (c === 'Þ') return 'th'
  else if (c === 'h') return 'h'
  else if (c === 'j') return 'j'
  else return ''
}
