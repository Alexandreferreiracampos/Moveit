
import '../styles/global.css';
import { challengeContext } from '../context/ChallengesContext'
function MyApp({ Component, pageProps }) {
  return (
    <challengeContext.Provider value={'teste'}>
      <Component {...pageProps} />
    </challengeContext.Provider>
  )
}

export default MyApp
