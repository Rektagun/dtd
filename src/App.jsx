import { BsSpotify } from 'react-icons/bs'
import { SiApplemusic, SiLinktree } from "react-icons/si";
import { ImSoundcloud2 } from "react-icons/im";
import { TbBrandFiverr } from 'react-icons/tb';
import { FaDiscord, FaInstagram, FaItchIo, FaReddit, FaYoutube } from "react-icons/fa";
import './index.css'
import { MdOutlineEmail } from 'react-icons/md';
import { FaSquareXTwitter } from 'react-icons/fa6';

// <img className='w-1/2 mx-auto mt-8' src='/DTD logo png.png' />
// backgroundImage: "url('/IMG_20220718_193224108.jpg')",


function App() {

  return (
    <div className='h-screen w-full bg-transparent bg-no-repeat bg-top pt-8 selection:bg-blue-200 selection:text-blue-950'>

      <img className='h-auto w-full absolute top-0 left-0 bottom-0 right-0 -z-10 bg-black'
        src='/IMG_20220718_193224108.jpg' />

      <div className='flex flex-row h-20 w-full justify-center gap-20 items-center absolute'>
        <a href='#OSTs' className='text-white/90 font-light italic underline text-2xl hover:cursor-pointer'>
          OSTs
        </a>
        <div className='text-white/95 font-light italic text-4xl hover:cursor-help'>
          •
        </div>
        <a href='#Links' className='text-white/90 font-light italic underline text-2xl hover:cursor-pointer'>
          Links
        </a>
      </div>

      <section className='h-screen'>
        <div className='justify-center items-center flex flex-col w-full gap-4 h-full'>
          <div className='text-8xl text-white font-light font-serif flex selection:bg-blue-200 selection:text-blue-950'>
            Dawn to Dark
          </div>
          <div className='select-none text-4xl text-white/90 font-light font-serif flex mb-4'>
            Lo-fi • Pop • Hip Hop
          </div>
          <div className='select-none text-4xl text-white/90 font-light font-serif flex mb-32'>
            Me? I love creating soundscapes and bangers
          </div>
          <div className='select-none fixed text-xl text-white/90 font-bold flex bottom-8 animate-bounce'>
            press space!
          </div>
        </div>

      </section>

      <section className='flex flex-col justify-center'>

        <div className='w-7/12 mx-auto flex select-none border-3 border-blue-200 rounded-4xl mt-20'>
          <iframe data-testid="embed-iframe" className='select-none' style={{ userSelect: "none", borderRadius: 32 }} src="https://open.spotify.com/embed/artist/0gJutpIxXYXIzeekfqbLcG?utm_source=generator" width="100%" height="730" allowFullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" />
        </div>

      </section>

      <section className='flex flex-col justify-center'>
        <div className='mt-28' id='OSTs'>
          <div className='text-3xl text-black bg-blue-200 mx-auto mt-32 px-8 w-fit -skew-12 rotate-[11.5deg] overflow-clip text-nowrap text-center'>
            :Christmas Roulette:
          </div>
          <div className='w-7/12 mx-auto flex select-none border-3 border-blue-200 rounded-4xl mt-4'>
            <iframe style={{ userSelect: "none", borderRadius: 32 }} width="100%" height="630" src="https://www.youtube.com/embed/U3mUWt_rD84?si=6K51oACSY_QQi7iv&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen />
          </div>
        </div>

      </section>

      <section className='flex flex-col justify-center'>
        <div className='mx-auto flex flex-col w-1/2 mt-28' id='Links'>
          <div className='text-3xl text-white italic mx-auto mb-8 mt-32'>
            :Listen on:
          </div>
          <div className='flex flex-row gap-10 w-full justify-center items-center'>
            <a href='https://open.spotify.com/artist/0gJutpIxXYXIzeekfqbLcG?si=thJ57ePsQouwwR34MnLFAA' className='hover:scale-110 transition-transform duration-300 flex flex-col gap-2 select-none justify-center items-center'>
              <BsSpotify style={{ color: '#dddbff', fontSize: '64px' }} />
              <h1 className='text-white text-xl font-thin italic'>
                Spotify
              </h1>
            </a>
            <a href='https://music.apple.com/in/artist/dawn-to-dark/1529296477' className='hover:scale-110 transition-transform duration-300 flex flex-col gap-2 select-none justify-center items-center'>
              <SiApplemusic style={{ color: '#dddbff', fontSize: '64px' }} />
              <h1 className='text-white text-xl font-thin italic'>
                Apple Music
              </h1>
            </a>
            <a href='https://soundcloud.com/ofate-832341021' className='hover:scale-110 transition-transform duration-300 flex flex-col gap-2 select-none justify-center items-center'>
              <ImSoundcloud2 style={{ color: '#dddbff', fontSize: '64px' }} />
              <h1 className='text-white text-xl font-thin italic'>
                SoundCloud
              </h1>
            </a>
            <a href='https://www.youtube.com/@RektagunMusic' className='hover:scale-110 transition-transform duration-300 flex flex-col  gap-2 select-none  justify-center items-center'>
              <FaYoutube style={{ color: '#dddbff', fontSize: '64px' }} />
              <h1 className='text-white text-xl font-thin italic'>
                YouTube
              </h1>
            </a>

          </div>
        </div>
        <div className='mx-auto flex flex-col w-1/2 mt-16'>
          <div className='text-3xl text-white italic mx-auto mb-8'>
            :Reach out on:
          </div>
          <div className='justify-center items-center flex flex-row gap-10 w-full'>
            <a href='https://www.instagram.com/bigsteppersahil' className='hover:scale-110 transition-transform duration-300 flex flex-col  gap-2 select-none  justify-center items-center'>
              <FaInstagram style={{ color: '#dddbff', fontSize: '64px' }} />
              <h1 className='text-white text-xl font-thin italic'>
                Instagram
              </h1>
            </a>
            <a href='https://x.com/bigsteppersahil' className='hover:scale-110 transition-transform duration-300 flex flex-col gap-2 select-none justify-center items-center'>
              <FaSquareXTwitter style={{ color: '#dddbff', fontSize: '64px' }} />
              <h1 className='text-white text-xl font-thin italic'>
                Twitter
              </h1>
            </a>
            <a href='https://discord.com/users/dawntodark' className='hover:scale-110 transition-transform duration-300 flex flex-col gap-2 select-none justify-center items-center'>
              <FaDiscord style={{ color: '#dddbff', fontSize: '64px' }} />
              <h1 className='text-white text-xl font-thin italic'>
                Disord
              </h1>
            </a>
            <a href='https://www.reddit.com/user/69cool4school/' className='hover:scale-110 transition-transform duration-300 flex flex-col gap-2 select-none justify-center items-center'>
              <FaReddit style={{ color: '#dddbff', fontSize: '64px' }} />
              <h1 className='text-white text-xl font-thin italic'> Reddit</h1>
            </a>

          </div>
        </div>
        <div className='mx-auto flex flex-col w-1/2 mt-16'>
          <div className='text-3xl text-white italic mx-auto mb-8'>
            :Misc:
          </div>
          <div className=' flex flex-row gap-10 w-full justify-center items-center'>
            <a href='https://www.fiverr.com/s/pdYlGQo' className='hover:scale-110 transition-transform duration-300 flex flex-col gap-2 select-none justify-center items-center'>
              <TbBrandFiverr style={{ color: '#dddbff', fontSize: '64px' }} />
              <h1 className='text-white text-xl font-thin italic'>
                Fiverr
              </h1>
            </a>
            <a href='https://dawntodark.itch.io/' className='hover:scale-110 transition-transform duration-300 flex flex-col gap-2 select-none justify-center items-center'>
              <FaItchIo style={{ color: '#dddbff', fontSize: '64px' }} />
              <h1 className='text-white text-xl font-thin italic'>
                Itch
              </h1>
            </a>
            <a href='https://linktr.ee/Sahilkhatri' className='hover:scale-110 transition-transform duration-300 flex flex-col gap-2 select-none justify-center items-center'>
              <SiLinktree style={{ color: '#dddbff', fontSize: '64px' }} />
              <h1 className='text-white text-xl font-thin italic'>
                All other links
              </h1>
            </a>

          </div>
        </div>

        <div className='flex flex-col justify-center mt-16 gap-4'>
          <div className='text-white/90 font-light text-2xl mx-auto select-none'>
            This site was designed and programmed by me ❤️
          </div>
          <div className='text-white text-3xl italic mx-auto font-extralight flex flex-row items-center justify-center gap-2'>
            <MdOutlineEmail style={{ alignSelf: "center", justifySelf: "center" }} />
            dawntodarkofficial@gmail.com
          </div>
        </div>

      </section>

      <footer className='flex flex-col justify-center mt-36'>
        <img src='/DTD logo png.png' className='w-32 mx-auto' />
      </footer>

    </div>
  )
}

export default App
