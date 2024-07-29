import { Button, Frog, TextInput } from 'frog'
import { devtools } from 'frog/dev'
import { serveStatic } from 'frog/serve-static'
// import { neynar } from 'frog/hubs'
import { handle } from 'frog/vercel'

// Uncomment to use Edge Runtime.
// export const config = {
//   runtime: 'edge',
// }

export const app = new Frog({
  assetsPath: '/',
  basePath: '/api',
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
})

app.frame('/', (c) => {
  const { buttonValue, inputText, status } = c
  const sivar = inputText || buttonValue
  return c.res({
    image: (
      
      <div
        style={{
          alignItems: 'center',
          background:
            status === 'response'
              ? 'linear-gradient(to right, #432889, #17101F)'
              : 'black',
          backgroundSize: '100% 100%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          height: '100%',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <div
          style={{
            color: 'white',
            fontSize: 48,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 30,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          {status === 'response'
            ? `${sivar ? ` ${sivar.toUpperCase()}!!` : ''}`
            : 'GUESS'}
            
        </div>
      </div>
    ),
    intents: [
      
      <Button action='/start' value="GUESS?">start</Button>,
     
    ],
  })
})

app.frame('/start', (c) => {
  const { buttonValue, inputText, status } = c
    return c.res({
    image: (
      
      <div
        style={{
          alignItems: 'center',
          background:
            status === 'response'
              ? 'linear-gradient(to right, #432889, #17101F)'
              : 'black',
          backgroundSize: '100% 100%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          height: '100%',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <div
          style={{
            color: 'white',
            fontSize: 48,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 30,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
          }}
        >
         
            'WHICH ONE IS THE SAN SALVADOR VOLCANO?'
        </div>
      </div>
    ),



    intents: [
      <Button action='/izalco' value="izalco">1</Button>,
      <Button action='/santa_ana' value="santa_ana">2</Button>,
      <Button action='/boqueron' value="san_salvador">3</Button>,
      <Button.Reset>Reset</Button.Reset>,
    ],
  })
})


app.frame('/izalco', (c) => {
  const { buttonValue, inputText, status } = c
    return c.res({
    image: "public/Volcán_de_Izalco_JR.png",



    intents: [
      
      <Button.Reset>Back</Button.Reset>,
    ],
  })
})

app.frame('/santa_ana', (c) => {
  const { buttonValue, inputText, status } = c
    return c.res({
    image: "public/santa ana.png",


    intents: [
      
      <Button.Reset>Back</Button.Reset>,
    ],
  })
})


app.frame('/boqueron', (c) => {
  const { buttonValue, inputText, status } = c
    return c.res({
    image: "public/boqueron.png",



    intents: [
      
      <Button.Link href='https://zora.co/collect/base:0x1795c993551ba7c9112fb4a52d10a33b268a69aa/7?referrer=0x00CB123EA62942bDa36aDf04f2E91Dc38D4Fd4Cc'>MINT</Button.Link>,
      <Button.Reset>Back</Button.Reset>,
    ],
  })
})



// @ts-ignore
const isEdgeFunction = typeof EdgeFunction !== 'undefined'
const isProduction = isEdgeFunction || import.meta.env?.MODE !== 'development'
devtools(app, isProduction ? { assetsPath: '/.frog' } : { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
