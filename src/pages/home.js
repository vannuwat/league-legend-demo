import React, { useState} from 'react';
import '../App.css';
function HomePage() {

  const videoUrl = 'https://www.leagueoflegends.com/static/hero-0632cbf2872c5cc0dffa93d2ae8a29e8.webm';

  const assassinsUrl = 'https://www.leagueoflegends.com/static/assassin-8bb741f0fe6d55c0844ede6e3fe1b5ad.webm';
  const fightersUrl = 'https://www.leagueoflegends.com/static/fighter-56f0e81707c5104dd35ee7a2b1d8e72a.webm';
  const magesUrl = 'https://www.leagueoflegends.com/static/mage-8beae0975cae649908a0d539435306db.webm';
  const adcUrl = 'https://www.leagueoflegends.com/static/marksman-d7367883b0979249f9309c03efdd23d9.webm';
  const supportUrl = 'https://www.leagueoflegends.com/static/support-10b76f08757ee3ce7169c344108b457b.webm';
  const tankUrl = 'https://www.leagueoflegends.com/static/tank-7bc533fcd17c3eca769764141020debb.webm';
  
  const [roles, setRoles] = useState("Assassins");
  const [isLoading, setIsLoading] = useState(true);
  const [translateX, setTranslateX] = useState(0);
  const [readMore, setReadmore] = useState(false);
  const [gameMode, setGameMode] = useState("normal");

  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  const changeRoles = (newRole) => {
    setRoles(newRole);
    setIsLoading(true);
  };

  const changeMode = (newMode) => {
    setGameMode(newMode);
  };

  const handleMouseMove = (e) => {
    const cursorX = e.clientX;
    const windowWidth = window.innerWidth;

    // Calculate translation distance based on cursor position and window width
    const translation = (-cursorX / windowWidth) * 20;

    setTranslateX(translation);
  };

  const readMoreHandle = () => {
    setReadmore(!readMore);
  };

  const scrollToGame = () => {
    const contentSection = document.getElementById('game-content');
    contentSection.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToChampion = () => {
    const contentSection = document.getElementById('champion-content');
    contentSection.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToLore = () => {
    const contentSection = document.getElementById('lore-content');
    contentSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav class="flex bg-black w-full h-20 text-white justify-center items-center fixed z-50 sm:justift-between sm:text-sm" >
        <img src='/LoL_Logo_Flat_GOLD.png' alt='LOL Name' class="w-20 sm:hidden"></img>
        <img src='/LoL_Icon_Rendered_Hi-Res.png' alt='LOL Icon' class="w-12 sm:hidden"></img>
        <div className='home-container-menubar :hover cursor-pointer'>
          <div className='home-text-menubar sm:text-sm' onClick={scrollToGame}>
            GAME
          </div>
        </div>
        <div className='home-container-menubar :hover cursor-pointer'>
          <div className='home-text-menubar sm:text-sm' onClick={scrollToChampion}>
            CHAMPIONS
          </div>
        </div>
        <div className='home-container-menubar :hover cursor-pointer'>
          <div className='home-text-menubar sm:text-sm' onClick={scrollToLore}>
            LORE
          </div>
        </div>  
      </nav>

      {/* video bg */}

      <div class="bg-gradient-to-b from-black to-white max-h-[45rem] md:h-[30rem] sm:h-[15rem]">
        <div class="w-full max-h-[40rem] overflow-hidden z-10 h-full">
          <video autoPlay loop muted class="video-bg blur-none md:blur lg:blur xl:blur">
            <source src={videoUrl} type="video/webm" />
          </video>
        </div>
        <div class="w-9/12 items-center justify-center z-20 m-auto translate-y-[-60%] md:translate-y-[-70%]">
          <video autoPlay loop muted class="video-element sm:hidden">
            <source src={videoUrl} type="video/webm" />
          </video>
           <div class="w-full z-30 translate-y-[-150%] sm:translate-y-[-70%]">
            <img src="/LoL_Logo_Rendered_LARGE.png" alt='lol logo' class="xl:w-[36rem] lg:w-[30rem] md:w-[22rem] sm:w-[16rem] m-auto"></img>
          </div> 
        </div>  
      </div>

      {/* Game content */}
      <div class="h-[50rem] w-full bg-world-league bg-cover py-20 justify-center items-center flex sm:h-[40rem]" id="game-content">
        <div class="flex flex-col w-1/5 lg:hidden md:hidden sm:hidden">
            <div class="w-1/3 flex flex-col text-white text-center w-full translate-x-10 translate-y-[-15rem]">
              <h1 class="text-2xl font-semibold italic">MULTIPLE WAY TO</h1>
              <h1 class="text-8xl font-bold italic">PLAY</h1>
            </div> 
        </div>
        <div class="w-3/5 h-full flex flex-col items-center text-white lg:block md:flex sm:flex md:translate-y-[5rem]">      
          <div class={`transition-all duration-500 rounded-full w-[32rem] h-[32rem] md:w-[26rem] md:h-[26rem] sm:w-[16rem] sm:h-[16rem] ${gameMode === "normal" ? "bg-summoner bg-cover bg-no-repeat bg-center" : gameMode === "aram" ? "bg-aram bg-center bg-cover bg-no-repeat" : gameMode === "tft" ? "bg-center bg-tft bg-cover bg-no-repeat" : "bg-white"}`}>
          </div>
          <div class="text-center mt-10 w-[30rem] transition-all duration-300 sm:w-[15rem]">
          {gameMode === "normal" ? (
            <>
              <p className="text-sm font-semibold">THE MOST POPULAR GAME MODE</p>
              <p className="text-sm">
                Clear your lane, dive into epic 5v5 team fights, and destroy the enemy nexus before they destroy yours.
              </p>
            </>
          ) : gameMode === "aram" ? (
            <>
              <p className="text-sm font-semibold">ALL RANDOM, ALL MID</p>
              <p className="text-sm">
                Battle across an icy bridge as your team of random champions charge toward the enemy Nexus in this chaotically fun 5v5 game mode.
              </p>
            </>
          ) : gameMode === "tft" ? (
            <>
              <p className="text-sm font-semibold">A FREE-FOR-ALL WAR FOR SUPREMACY</p>
              <p className="text-sm">
                Assemble a squad of champions that battle on your behalf. Outlast all seven of your opponents and become the last person standing.
              </p>
            </>
          ) : null}

          </div>   
        </div>
        <div class="w-1/5 md:hidden sm:hidden">    
          <div class="w-1/3 translate-x-[-5rem] text-black">
            <div class="flex-col flex w-72 text-center my-5 text-white hidden lg:block md:block">
              <h1 class="text-xl font-semibold italic">MULTIPLE WAY TO</h1>
              <h1 class="text-8xl font-bold italic">PLAY</h1>
            </div>
            <div class="flex w-72 items-center my-5">
                <div class="bg-[#0BC6E3] items-center justify-center flex w-full h-12">
                  <h1 class="font-sm font-semibold">Summoner's Rift</h1>
                </div>     
                <img src="/summoner_rift.jpg" alt="summoner" onClick={()=> changeMode("normal")} class={`transition-all delay-300 duration-300 cursor-pointer border-[#0BC6E3] border-solid' ${gameMode === "normal" ? 'w-28 h-28 border-4' : 'w-20 h-20 border-2'}`}></img>
            </div>
            <div class="flex w-72 items-center my-5">
                <div class="bg-[#0BC6E3] items-center justify-center flex w-full h-12">
                  <h1 class="font-sm font-semibold">ARAM</h1>
                </div>     
                <img src="/Aram.jpg" alt="summoner" onClick={()=> changeMode("aram")} class={`transition-all delay-300 duration-300 cursor-pointer border-[#0BC6E3] border-solid' ${gameMode === "aram" ? 'w-28 h-28 border-4' : 'w-20 h-20 border-2'}`}></img>
            </div>
            <div class="flex w-72 items-center my-5">
                <div class="bg-[#0BC6E3] items-center justify-center flex w-full h-12">
                  <h1 class="font-sm font-semibold">TFT</h1>
                </div>     
                <img src="/TT.jpg" alt="summoner" onClick={()=> changeMode("tft")} class={`transition-all delay-300 duration-300 cursor-pointer border-[#0BC6E3] border-solid' ${gameMode === "tft" ? 'w-28 h-28 border-4' : 'w-20 h-20 border-2'}`}></img>
            </div>
          </div>    
        </div>
      </div> 
      <div class="w-full m-auto justify-center items-center bg-gradient-to-b from-black to-white hidden md:flex sm:flex">    
          <div class="translate-y-[-5rem] text-black">
            <div class="flex-col flex w-72 text-center my-5 text-white hidden lg:block md:block sm:hidden">
              <h1 class="text-xl font-semibold italic">MULTIPLE WAY TO</h1>
              <h1 class="text-8xl font-bold italic">PLAY</h1>
            </div>
            <div class="flex w-72 items-center my-5">
                <div class="bg-[#0BC6E3] items-center justify-center flex w-full h-12">
                  <h1 class="font-sm font-semibold">Summoner's Rift</h1>
                </div>     
                <img src="/summoner_rift.jpg" alt="summoner" onClick={()=> changeMode("normal")} class={`transition-all delay-300 duration-300 cursor-pointer border-[#0BC6E3] border-solid' ${gameMode === "normal" ? 'w-28 h-28 border-4' : 'w-20 h-20 border-2'}`}></img>
            </div>
            <div class="flex w-72 items-center my-5">
                <div class="bg-[#0BC6E3] items-center justify-center flex w-full h-12">
                  <h1 class="font-sm font-semibold">ARAM</h1>
                </div>     
                <img src="/Aram.jpg" alt="summoner" onClick={()=> changeMode("aram")} class={`transition-all delay-300 duration-300 cursor-pointer border-[#0BC6E3] border-solid' ${gameMode === "aram" ? 'w-28 h-28 border-4' : 'w-20 h-20 border-2'}`}></img>
            </div>
            <div class="flex w-72 items-center my-5">
                <div class="bg-[#0BC6E3] items-center justify-center flex w-full h-12">
                  <h1 class="font-sm font-semibold">TFT</h1>
                </div>     
                <img src="/TT.jpg" alt="summoner" onClick={()=> changeMode("tft")} class={`transition-all delay-300 duration-300 cursor-pointer border-[#0BC6E3] border-solid' ${gameMode === "tft" ? 'w-28 h-28 border-4' : 'w-20 h-20 border-2'}`}></img>
            </div>
          </div>    
        </div> 

      {/* Champions */}
      <div class="h-[70rem] w-full bg-gradient-to-b from-white to-gray-300 md:h-[80rem] sm:h-[80rem]" id="champion-content">
        <div class="flex w-full h-96 justify-center items-center flex-col">
          <h1 class="text-xl italic font-bold font-sans">CHOOSE YOUR</h1>
          <h1 class="text-8xl italic font-extrabold font-sans sm:text-4xl">CHAMPION</h1>
          <div>
            <p class="w-3/5 m-auto text-center">
              Whether you like to dive straight into the fray, support your teammates, or something in between, there’s a spot for you on the Rift.
            </p>
          </div>
        </div>
        <div class="hidden flex-col w-4/5 justify-center mx-auto items-center md:flex md:mt-20 sm:flex sm:mt-20">
            {isLoading ? (
          
                <div class="animate-spin rounded-full w-52 h-52 border-t-4 border-blue-500"></div>
         
      
            ):(
              <>
              {roles === "Assassins" && (
                <>
                <img src="/assassins.png" alt="Akali" class="w-5/6 h-auto mt-[-10rem]"></img>
                <p class="text-xl font-bold">Akali</p>
                <p class="text-sm text-gray-600">The Rogue Assassin</p>
                </>
              )}
              {roles === "Fighters" && (
                <>
                <img src="/Fighter.png" alt="Yasuo" class="w-5/6 h-auto mt-[-10rem]"></img>
                <p class="text-xl font-bold">Yasuo</p>
                <p class="text-sm text-gray-600">The Unforgiven</p>
                </>
              )}
              {roles === "Mages" && (
                <>
                <img src="/mages.png" alt="Lux" class="w-5/6 h-auto mt-[-10rem]"></img>
                <p class="text-xl font-bold">Lux</p>
                <p class="text-sm text-gray-600">The Lady of Luminosity</p>
                </>
              )}
              {roles === "Marksmen" && (
                <>
                <img src="/marksman.png" alt="Jinx" class="w-5/6 h-auto mt-[-10rem]"></img>
                <p class="text-xl font-bold">Jinx</p>
                <p class="text-sm text-gray-600">The Loose Cannon</p>
                </>
              )}
              {roles === "Supports" && (
                <>
                <img src="/supports.png" alt="Thresh" class="w-5/6 h-auto mt-[-10rem]"></img>
                <p class="text-xl font-bold">Thresh</p>
                <p class="text-sm text-gray-600">The Chain Warden</p>
                </>
              )}
              {roles === "Tanks" && (
                <>
                <img src="/tanky.png" alt="Leona" class="w-5/6 h-auto mt-[-10rem]"></img>
                <p class="text-xl font-bold">Leona</p>
                <p class="text-sm text-gray-600">The Radiant Dawn</p>
                </>
              )}
              </>
            )}       
          </div>
        <div class="flex p-10 w-full">
          <div class="flex w-1/2 flex-col md:w-full sm:w-full">
            <div class="flex min-w-[10rem] max-h-[10rem] justify-between sm:flex-col sm:w-[10rem] sm:justify-center sm:m-auto">
              <button onClick={()=>changeRoles("Assassins")} class={`transition-all duration-500 mx-5' ${roles === "Assassins" ? 'opacity-100 border-b-8 border-solid border-[#0BC4E2]' : ' opacity-50 hover:opacity-100'}`}>
                  Assassins
    
              </button>
              <button onClick={()=>changeRoles("Fighters")} class={`transition-all duration-500' ${roles === "Fighters" ? 'opacity-100 border-b-8 border-solid border-[#0BC4E2]' : ' opacity-50 hover:opacity-100'}`}>
              
                  Fighters
              
              </button>
              <button onClick={()=>changeRoles("Mages")} class={`transition-all duration-500' ${roles === "Mages" ? 'opacity-100 border-b-8 border-solid border-[#0BC4E2]' : ' opacity-50 hover:opacity-100'}`}>
              
                  Mages
              
              </button>
              <button onClick={()=>changeRoles("Marksmen")} class={`transition-all duration-500' ${roles === "Marksmen" ? 'opacity-100 border-b-8 border-solid border-[#0BC4E2]' : ' opacity-50 hover:opacity-100'}`}>
              
                  Marksmen
                
              </button>
              <button onClick={()=>changeRoles("Supports")} class={`transition-all duration-500' ${roles === "Supports" ? 'opacity-100 border-b-8 border-solid border-[#0BC4E2]' : ' opacity-50 hover:opacity-100'}`}>
              
                Supports
              
              </button>
              <button onClick={()=>changeRoles("Tanks")} class={`transition-all duration-500' ${roles === "Tanks" ? 'opacity-100 border-b-8 border-solid border-[#0BC4E2]' : ' opacity-50 hover:opacity-100'}`}>
              
                Tanks
              
              </button>
            </div>
            <div class="mx-auto my-5 max-h-72 border-4 border-double border-[#c9a156] p-2">
            {roles === "Assassins" && (
               <video autoPlay loop muted class="w-[30rem] h-auto sm:w-[20rem]">
               <source src={assassinsUrl} type="video/webm" />
             </video>

            )}
            {roles === "Fighters" && (
               <video autoPlay loop muted class="w-[30rem] h-auto sm:w-[20rem]">
               <source src={fightersUrl} type="video/webm" />
             </video>

            )}
            {roles === "Mages" && (
               <video autoPlay loop muted class="w-[30rem] h-auto sm:w-[20rem]">
               <source src={magesUrl} type="video/webm" />
             </video>

            )}
            {roles === "Marksmen" && (
               <video autoPlay loop muted class="w-[30rem] h-auto sm:w-[20rem]">
               <source src={adcUrl} type="video/webm" />
             </video>

            )}
            {roles === "Supports" && (
               <video autoPlay loop muted class="w-[30rem] h-auto sm:w-[20rem]">
               <source src={supportUrl} type="video/webm" />
             </video>

            )}
            {roles === "Tanks" && (
               <video autoPlay loop muted class="w-[30rem] h-auto sm:w-[20rem]">
               <source src={tankUrl} type="video/webm" />
             </video>

            )}
          
            </div>
          </div>
          <div class="flex flex-col w-1/2 justify-center mx-auto items-center md:hidden sm:hidden">
            {isLoading ? (
          
                <div class="animate-spin rounded-full w-52 h-52 border-t-4 border-blue-500"></div>
         
      
            ):(
              <>
              {roles === "Assassins" && (
                <>
                <img src="/assassins.png" alt="Akali" class="w-5/6 h-auto mt-[-10rem]"></img>
                <p class="text-xl font-bold">Akali</p>
                <p class="text-sm text-gray-600">The Rogue Assassin</p>
                </>
              )}
              {roles === "Fighters" && (
                <>
                <img src="/Fighter.png" alt="Yasuo" class="w-5/6 h-auto mt-[-10rem]"></img>
                <p class="text-xl font-bold">Yasuo</p>
                <p class="text-sm text-gray-600">The Unforgiven</p>
                </>
              )}
              {roles === "Mages" && (
                <>
                <img src="/mages.png" alt="Lux" class="w-5/6 h-auto mt-[-10rem]"></img>
                <p class="text-xl font-bold">Lux</p>
                <p class="text-sm text-gray-600">The Lady of Luminosity</p>
                </>
              )}
              {roles === "Marksmen" && (
                <>
                <img src="/marksman.png" alt="Jinx" class="w-5/6 h-auto mt-[-10rem]"></img>
                <p class="text-xl font-bold">Jinx</p>
                <p class="text-sm text-gray-600">The Loose Cannon</p>
                </>
              )}
              {roles === "Supports" && (
                <>
                <img src="/supports.png" alt="Thresh" class="w-5/6 h-auto mt-[-10rem]"></img>
                <p class="text-xl font-bold">Thresh</p>
                <p class="text-sm text-gray-600">The Chain Warden</p>
                </>
              )}
              {roles === "Tanks" && (
                <>
                <img src="/tanky.png" alt="Leona" class="w-5/6 h-auto mt-[-10rem]"></img>
                <p class="text-xl font-bold">Leona</p>
                <p class="text-sm text-gray-600">The Radiant Dawn</p>
                </>
              )}
              </>
            )}       
          </div>
        </div>
      </div>

      {/* Map*/}
      <div class="h-auto w-full bg-black pt-36 flex md:flex-col sm:flex-col" onMouseMove={handleMouseMove} id="lore-content">
          <img src="/LOL_map.png" alt="map" class="w-10/12 transition h-full duration-300 ease-out mx-[-8rem] md:mx-auto sm:mx-auto" style={{ transform: `translateX(${translateX}px)`}}></img>
          <div class="flex text-white items-center flex-col z-30 text-center translate-x-[-5rem] mx-auto sm:translate-x-0 md:translate-x-0">
            <h1 class="text-2xl italic font-bold font-sans sm:text-xl">LEAGUE OF LEGENDS</h1>
            <h1 class="text-8xl italic font-extrabold font-sans sm:text-6xl">LORE</h1>
            
            <div class={`relative transition-all duration-1000 ease-out p-5 ${readMore ? 'h-full overflow-hidden' : 'h-24'}`}>
            {readMore ? 
            (
    <>
<p class="mb-4 mt-4 text-sm">
Until only 20 years ago Runeterra, was on a collision course for disaster. As quickly as people would band together into tribes, others would wage war to settle disputes. These wars have always been settled with the powers of magic. Armies would either be enhanced or decimated by the powers of magic. Champions led the vast armies with specialised magical weapons. Politically driven summoners would also use their great magical powers against anyone with little regard for enviromental effects.
</p><p class="mb-4 mt-4 text-sm">
Within the last 200 years little was done about the wartorn land of Runeterra. The last two Rune wars dramatically altered the geophyisical landscape, even after magic had been used to restore it. Violent earthquakes and magically fuelled storms made life difficult for the enhabitants of Runeterra, even before factoring the many wars and disputes. It was theorized that another Rune war would tear the world apart.
</p><p class="mb-4 mt-4 text-sm">
An unlikely solution was made by powerful polititians and great magicians to solve disputes in a more civilised way. This was the creation of the League of Legends whose purpose was to resolve political frenzies in a more controllable and systematic way.
</p><p class="mb-4 mt-4 text-sm">
The League resolved all major political conflict would be settled in specific arenas around Runterra. Summoners would represent a particular political party and each would call forth a champion. The champions, lead swarms of mindless minions generated by novice summoners. The champions and minions together to the opposing sides nexus in a bid to out perform the competition and settle the dispute.These arenas are collectively referred to as the Fields of Justice.
</p><p class="mb-4 mt-4 text-sm">
Although this newfound method was succesful at keeping minor peace between different small tribes this did not solve bigger issues between warring political entities. For example – the strategic choice of the League to build the Institute of War directly between the constantly warring city-states of Demacia and Noxus stopped almost all direct confrontation between them, though military skirmishes continue to break out. Instead, the warlike Noxian High Command has turned its ambitions of conquest offshore. Even still, all political entities abide by the governance of the League of Legends. 
</p><p class="mb-4 mt-4 text-sm">
The fights in the various Fields of Justice over which the League presides are not only of great political interest to Runeterra, but also of great public interest. The League magically transmits the sights and sounds of the action as it unfolds to specially built arcane receivers located in key settlements throughout Runeterra. Watching the epic battles of the League of Legends has become a public specical in many areas of Runeterra
</p><p class="mb-4 mt-4 text-sm">
The League of Justice is supervised by a council of three powerful summoners, known as the High Council of Equity. Each summoner has been on the Council of Equity since the inception of the League of Legends except for its newest High Councilor, Heywan Relivash; High Councilor Relivash’s ascension took place five years ago after the mysterious disappearance of the previous High Councilor, Reginald Ashram. The Council of Equity is responsible not only for the leadership and guidance of the League, but also to act as the highest court of appeal for adjudication of Runeterra’s political entities.
</p><p class="mb-4 mt-4 text-sm">
The structure of the League is focused around internal organizations that lead their various goals. Each city-state is assigned an Emissary of the League – a diplomat who serves as an on-location political representative to enact the will of the League. The Adjudicators are the arbiters assigned to a given match in the Fields of Justice. The Council is the body of high-ranking summoners which rules over political outcomes once a battle arena match has been resolved.
</p>         
                </>
            ) 
            : 
            (
             
                <p class="mt-5 text-sm">
              Until only 20 years ago Runeterra, was on a collision course for disaster. 
              As quickly as people would band together into tribes, others would wage war to settle disputes. 
              These wars have always been settled with the powers of magic.     
                </p>
            ) }
            </div>
        
            <div class="flex mt-20 mb-10 sm:mt-[5rem]">
              <div class="bg-[#c9a156] w-[10rem] h-[3rem] flex hover:bg-[#E0B667] cursor-pointer" onClick={readMoreHandle}>
                <h1 class="m-auto font-semibold text-md font-mono text-black">{readMore?"Close" : "Read"}</h1>  
              </div> 
            </div>
          </div>
      </div>  

      {/*Credit*/}      
      <div class="w-full h-20 bg-[#061C25] flex">
        <p class="m-auto font-bold text-gray-300 text-md sm:text-sm">TAKE LEAGUE WITH YOU</p>
        <p class="m-auto text-gray-400 text-sm md:hidden sm:hidden">Download the League app to stay connected to friends and the latest game and esports news.</p>
        <div class="m-auto flex flex-row">
          <img src="/apple.png" alt="apple store" class="h-14 mr-[-1.5rem] lg:h-10 sm:h-8"></img>
          <img src="/play_store.png" alt="play store" class="h-14 lg:h-10 sm:h-8"></img>
        </div>
      </div>

      

      <div class="w-full h-96 bg-[#111111] flex flex-col">
        <div class="w-full h-20 flex">
          <div class="m-auto flex text-white ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mx-3"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mx-3"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mx-3"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mx-3"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>

            <svg
              class="h-5 w-5 mx-3"
              fill="currentColor"
              viewbox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd">
              <path
                d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z" />
            </svg>
          </div>
        </div>

        <div class="w-full h-auto flex">
          <div class="m-auto flex">
            <img src="/Riot_logo_white.png" alt="Riot icon" class="w-auto h-28 mt-[-1rem] opacity-50 cursor-pointer hover:opacity-100"></img>
          </div>
        </div>

        <div class="w-full h-auto flex">
          <img src="/TEEN.PNG" alt="TEEN" class="h-32 mx-auto my-5 sm:h-24"></img>
        </div>
      </div>
    </>
  )
  }
export default HomePage;

