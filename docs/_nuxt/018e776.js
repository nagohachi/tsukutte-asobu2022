;(window.webpackJsonp = window.webpackJsonp || []).push([
  [5, 3, 4],
  {
    275(e, t, n) {
      let content = n(278)
      content.__esModule && (content = content.default),
        typeof content === 'string' && (content = [[e.i, content, '']]),
        content.locals && (e.exports = content.locals)
      ;(0, n(133).default)('80a0ca22', content, !0, { sourceMap: !1 })
    },
    276(e, t, n) {
      let content = n(280)
      content.__esModule && (content = content.default),
        typeof content === 'string' && (content = [[e.i, content, '']]),
        content.locals && (e.exports = content.locals)
      ;(0, n(133).default)('3cc870f4', content, !0, { sourceMap: !1 })
    },
    277(e, t, n) {
      'use strict'
      n(275)
    },
    278(e, t, n) {
      const o = n(132)(!1)
      o.push([
        e.i,
        '.img-container[data-v-d7adb0ba]{width:100%;text-align:center;padding-top:4rem}.img-container .neko-img[data-v-d7adb0ba]{margin:auto;height:50vw;z-index:10}',
        '',
      ]),
        (e.exports = o)
    },
    279(e, t, n) {
      'use strict'
      n(276)
    },
    280(e, t, n) {
      const o = n(132)(!1)
      o.push([
        e.i,
        '.neko-page-speech-container[data-v-573acd32]{position:absolute;width:100%;bottom:10px;display:flex}.neko-name[data-v-573acd32],.neko-speech[data-v-573acd32]{font-size:2vw;font-family:"Source Sans Pro","ヒラギノ角ゴシック Pro","Hiragino Kaku Gothic Pro",sans-serif}.hukidashi[data-v-573acd32]{width:90%;bottom:10px;margin:10px auto;z-index:99999;background-color:hsla(0,0%,94.1%,.85);padding:1em;border-radius:10px}',
        '',
      ]),
        (e.exports = o)
    },
    281(e, t, n) {
      'use strict'
      n.r(t)
      const o = n(1).a.extend({
        name: 'NekoPageMain',
        props: { mode: { type: String, default: 'normal' } },
        computed: {
          nekoImage() {
            return this.mode === 'angry' ? 'https://github.com/yukihira-pot/tsukutte-asobu2022/blob/main/docs/gorogoroneko.png?raw=true' : 'https://github.com/yukihira-pot/tsukutte-asobu2022/blob/main/docs/neko.png?raw=true'
          },
        },
      })
      const r = (n(277), n(46))
      const component = Object(r.a)(
        o,
        function () {
          const e = this
          const t = e._self._c
          e._self._setupProxy
          return t('div', { staticClass: 'img-container' }, [
            t('img', {
              staticClass: 'neko-img',
              attrs: { src: e.nekoImage, alt: '' },
            }),
          ])
        },
        [],
        !1,
        null,
        'd7adb0ba',
        null
      )
      t.default = component.exports
    },
    282(e, t, n) {
      'use strict'
      n.r(t)
      const o = n(1).a.extend({ name: 'NekoPageSpeech' })
      const r = (n(279), n(46))
      const component = Object(r.a)(
        o,
        function () {
          const e = this
          e._self._c, e._self._setupProxy
          return e._m(0)
        },
        [
          function () {
            const e = this
            const t = e._self._c
            e._self._setupProxy
            return t('div', { staticClass: 'neko-page-speech-container' }, [
              t('div', { staticClass: 'hukidashi' }, [
                t('div', { staticClass: 'neko-name' }, [e._v('猫八さん')]),
                e._v(' '),
                t('p', { staticClass: 'neko-speech' }, [e._v('なんやおまえ')]),
              ]),
            ])
          },
        ],
        !1,
        null,
        '573acd32',
        null
      )
      t.default = component.exports
    },
    283(e, t, n) {
      let content = n(286)
      content.__esModule && (content = content.default),
        typeof content === 'string' && (content = [[e.i, content, '']]),
        content.locals && (e.exports = content.locals)
      ;(0, n(133).default)('3b4859a8', content, !0, { sourceMap: !1 })
    },
    285(e, t, n) {
      'use strict'
      n(283)
    },
    286(e, t, n) {
      const o = n(132)
      const r = n(287)
      const c = n(288)
      const d = o(!1)
      const l = r(c)
      d.push([
        e.i,
        'header{position:fixed;background-color:#bfbfbf;height:2em;width:100vw}#container{position:relative;background:url(' +
          l +
          ');background-size:cover;padding-bottom:30px}.feed-btn-container{position:absolute;top:50%;right:5%;width:12vw;height:12vw}.feed-btn-container .feed-btn{position:relative;width:100%;height:100%;border:.5vw solid #212121;border-radius:50%;background-color:#fcf300;font-size:2vw;font-weight:700;cursor:pointer}.feed-btn-container .feed-btn:hover{background-color:#fff}',
        '',
      ]),
        (e.exports = d)
    },
    287(e, t, n) {
      'use strict'
      e.exports = function (e, t) {
        return (
          t || (t = {}),
          typeof (e = e && e.__esModule ? e.default : e) !== 'string'
            ? e
            : (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
              t.hash && (e += t.hash),
              /["'() \t\n]/.test(e) || t.needQuotes
                ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, '\\n'), '"')
                : e)
        )
      }
    },
    288(e, t, n) {
      e.exports = n.p + 'img/neko_room.3544a22.png'
    },
    291(e, t, n) {
      'use strict'
      n.r(t)
      n(76)
      const o = n(1)
      const r = n(281)
      const c = n(282)
      const d = ['hello', 'world', 'goodnight']
      const l = o.a.extend({
        name: 'IndexPage',
        components: { NekoPageMain: r.default, NekoPageSpeech: c.default },
        data() {
          return {
            scripts: d,
            scriptIndex: 0,
            hanseibun: '',
            yourAnswer: '',
            mode: 'normal',
            time: 0,
            timer: null,
          }
        },
        watch: {
          time() {
            this.time === 10 && (this.mode = 'angry')
          },
        },
        mounted() {
          const e = this
          this.timer = setInterval(function () {
            e.time++
          }, 1e3)
        },
        methods: {
          proceedScript() {
            ;(this.scriptIndex += 1),
              d.length <= this.scriptIndex && window.alert('finish')
          },
          submitHanseibun() {
            this.hanseibun === 'あいうえお'
              ? window.alert('正解!')
              : window.alert('不正解'),
              (this.hanseibun = '')
          },
          GiveQuestion() {
            window.alert('問題出題')
          },
          SendAnswer() {
            this.yourAnswer === '答え'
              ? window.alert('正解!')
              : window.alert('不正解'),
              (this.yourAnswer = '')
          },
        },
      })
      const f = (n(285), n(46))
      const component = Object(f.a)(
        l,
        function () {
          const e = this
          const t = e._self._c
          e._self._setupProxy
          return t(
            'div',
            { attrs: { id: 'container' } },
            [
              t('header', [e._v('ヘッダー')]),
              e._v(' '),
              t('NekoPageMain', { attrs: { mode: e.mode } }),
              e._v(' '),
              e._m(0),
              e._v(' '),
              t('NekoPageSpeech'),
            ],
            1
          )
        },
        [
          function () {
            const e = this
            const t = e._self._c
            e._self._setupProxy
            return t('div', { staticClass: 'feed-btn-container' }, [
              t('button', { staticClass: 'feed-btn' }, [
                e._v('餌やり'),
                t('br'),
                e._v('ボタン'),
              ]),
            ])
          },
        ],
        !1,
        null,
        null,
        null
      )
      t.default = component.exports
      installComponents(component, {
        NekoPageMain: n(281).default,
        NekoPageSpeech: n(282).default,
      })
    },
  },
])
