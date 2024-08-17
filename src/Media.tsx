import { Divider } from "./components/Divider";
import { VideoBox } from "./components/VideoBox";

export const Media = () => (
    <>
        <VideoBox
            title={`J'avois crû qu'en vous aimant`}
            link='https://www.youtube-nocookie.com/embed/b2XP8ch10rs?si=_bcuNsdbZ9fEMrTC'>
            Anna Bachleitner <Divider /> mezzo-soprano<br />
            Niels Pfeffer <Divider /> theorbo
        </VideoBox>

        <VideoBox
            title='À Florence'
            link='https://www.youtube-nocookie.com/embed/cpsBNwhWEzI?si=w1RZxGv4AfYEoHKP?controls=0'>
            Maya Webne-Behrmann <Divider /> violin<br />
            Niels Pfeffer <Divider /> baroque lute

            <p style={{
                fontSize: '0.8em'
            }}>
                Die Aufnahme entstand während einer zweiwöchigen Aufenthalts in Südfrankreich
                im Rahmen des Residenzprogramms der <a
                    style={{ color: 'inherit' }}
                    href='https://www.accr-europe.org/en/network/Members/les-amis-de-lesparrou'>
                    Amis de l'Esparrou (ACCR)
                </a>.
            </p>
        </VideoBox>

        <VideoBox
            title='Johann Mattheson – Probstück 14'
            link='https://www.youtube-nocookie.com/embed/ae9xmAKeub8?si=mFn6SWjc-tOBlOpe'>

            Niels Pfeffer <Divider /> harpsichord<br />

            <p style={{
                fontSize: '0.8em'
            }}>
                Dieses und vier weitere Probstücke wurde im Rahmen des{' '}
                <a
                    style={{ color: 'inherit' }}
                    href='https://www.swr.de/swr2/musik-klassik/challenge-aus-dem-18-jahrhundert-niels-pfeffer-spielt-johann-matthesons-probstuecke-zusammenspielen-swr2-100.html'>
                    #zusammenspielen
                </a>
                {' '}vom SWR2 aufgenommen.
            </p>
        </VideoBox>
    </>
)
