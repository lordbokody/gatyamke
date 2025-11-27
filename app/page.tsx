import Image from "next/image";
import Card from "@/components/Card";

export default function Home() {
  const text = {
    bevezeto: `Bokody Ákos vagyok, jelenleg a Magyar Képzőművészeti Egyetem negyedéves festőművész szakos hallgatója. A Gatya MKE weboldal az egyetemen folyamatban lévő nemi erőszak ügyével foglalkozik. Az oldalon kifejtésre kerül a saját véleményem, valamint összegyűjtöttem az esettel kapcsolatos összes fontos sajtómegjelenést.\n
            A weboldal címében szereplő 'gatya' szó arra a tudatállapatra utal, amelyben a 2025. november 25-ei hallgatói fórum alatt voltam: az agyam helyén csak egy széthasznált gatyát tudtam elképzelni. Emellett véleményem szerint tökéletesen alliterál a vezetőség kompetenciájával is.\n
            A teljes kontextus megértéséhez kérem az olvasót, hogy véleményem elolvasása előtt tekintse át a linktárban található forrásokat, amennyiben még nem ismeri az ügyet. A teljes helyzetet itt nem kívánom elölről felvázolni.`,
    velemeny: `A 2025. november 25-ei hallgatói fórum a vezetőség morális romlottságának teljes lelepleződése volt. Az arrogancia, az emberi érzéketlenség, a cinikus ignorancia, a felelősség tagadása és az egyetemi polgárság semmibevétele – mindez együtt olyan züllöttség képét rajzolja, amely már áthatja az intézmény minden rétegét. A fórumon elhangzottakat nem kívánom minden részletében elemezni – nem dokumentáció a célom. Aki részt vett, úgy vélem, élete egyik legvisszataszítóbb élményével lett gazdagabb. Aki távol maradt, nem biztos, hogy veszített.
\nKritikámat azzal kezdem, hogy tisztázzam: mit jelent számomra a vezetői szerep. Aki vezetői pozíciót vállal – legyen szó intézményről vagy munkahelyről –, azzal erkölcsi felelősséget is magára vállal. Vállalja, hogy a közösség gerincoszlopa lesz: aki példát mutat, akire támaszkodni lehet, akihez bármilyen ügyben fordulni mernek. A vezető nem pusztán adminisztrátor vagy menedzser – hanem a közösség morális centruma. A Képző vezetősége azonban ezek közül egyetlen elvárásnak sem felel meg. Csupán a hideg karrierizmus és a steril szakmaiság vezérli őket; valódi vezetésre alkalmatlanok. Az egyetemi vezetés hatalomgyakorlását Hamvas Béla gondolata írja le a legpontosabban: “A klerikalizmus már a tizenötödik században üdvgépezetté alakult át,  amelyben automatikusan minden bűncselekmény alól a felmentés elérhető  volt. Úgy látszott ez a gépezet a felvilágosodással megszűnt. Bizonyos  időnek el kellett telnie ahhoz, hogy az ember észrevegye: az üzem még  hatásosabban működik. De most nem az üdv kérdése, hanem maga a teljes  élet gépiesedett el. Az a hiedelem terjedt el, hogy az egész létező  világ, lélek, élet, vallás, gondolkozás tulajdonképpen egyetlen  kolosszális, ésszerűen megszerkesztett apparátus. Nincs szükség arra,  hogy a lét értelmére vonatkozóan nem mechanikus elemeket is felvegyünk.  Bizonytalan tényezőkre szükség nincs; Isten, lélek, akaratszabadság  elvégre nem is bizonyítható, mondja Kant. Az emberi létezést nem  gondolat vagy szellem, de még csak élet sem, hanem a mechanon irányítja.  Az ember az apparátusban maga is apparátus és nagyobb üzem alkatrésze,  nem spirituális lény, hanem funkció. "
\nA gépies funkciószerepbe a vezetőség hibátlanul beleillik: a fórumon feltett konkrét kérdésekre következetesen nem válaszolnak, ehelyett dilettáns jogi maszlaggal húzzák az időt, majd olyan emaileket olvasnak fel, amelyek épp azt bizonyítják – az áldozatot nem támogatták. Ez számomra teljes mértékű gépies hűvösséget takar. De meg kell jegyeznem: ha már gépek akarnak lenni, még dolgozniuk kell rajta. Ha a ChatGPT-től kérdezek valamit, egyenes választ kapok – még akkor is, ha nem tud vagy nem akar válaszolni. A vezetőség még erre sem képes. A különböző emberi szerepek közötti mesterséges különbségtétel felháborító. Ha az egyetem vezetősége jogi személyként képviseli magát, és tudatosan szétválasztja hivatali pozícióját emberi mivoltától, akkor pontosan azt a gépi szerepet hitelesíti, amelyet az előző mondatokban vázoltam. Pedig ha valaki intézmény képviselője – bármilyen minőségben –, kötelessége emberi lényét is a helyzetbe vinni. Azzal pedig szégyenletes takarózni, hogy magánéletben markáns véleménye van az ügyről, vagy hogy lányos apa.
	\nA történtek óta egy kérdés nem hagy nyugodni: hogyan nem érzékeli az egyetemi vezetőség a disszonanciát abban, hogy művészeti egyetem képviseletében állnak? A művész mint szerep az egész egyetemes művészettörténetben – bármennyire is változott a hangsúlya, bármilyen vallási vagy társadalmi kontextusban is helyezkedett el – mindig is szellemileg, morálisan és erkölcsileg tiszta feladatot hivatott betölteni. A hiteles művész feladata, hogy a világban azokat az energiákat képviselje, amelyek létezésünk pozitív oldalával kapcsolódnak – hogy szellemi táplálékot és gyógyírt nyújtson embertársai számára. Az egyetem hallgatójaként úgy gondolom, hogy az intézményben tanuló diákok, tanárok és munkatársak szintén ezt vallják, és azért dolgoznak nap mint nap, hogy részt vegyenek ennek a szerepnek az aktív megélésében – ki-ki a maga módján. Ezen a szemüvegen keresztül nézve számomra teljesen érthetetlen, hogy a vezetőség hogyan nem látja: elementáris szinten megy szembe azokkal az értékekkel, amelyeket a művészeti közeg képvisel. Hogyan lehet egy ilyen mozzanat után hinni a folytonosan ismételt frázisoknak, hogy "a legjobbra törekszenek"? Az egyetem vezetősége teljes erővel megvetette a művészeti erkölcsöt – és innentől képtelen vagyok komolyan venni szakmai profizmusukat is.
\nSzeretném megvizsgálni azt is, hol érzek még problémákat. Az egyetem vezetőségének felelőssége egyértelmű és kifejtésre került. Azonban több hangot is hallottam a fórum előtt és után, hogy "túl sok a kiállás a hallgatóság részéről" – egyes tanárok még azt is megjegyezték, hogy a hallgatók milyen hangnemben beszéltek a vezetőséggel. Egy ilyen helyzetben, ahol mindenki totálisan hülyének van nézve, milyen más hangnem és attitűd lenne alkalmas a párbeszédre? Kezet rázzak a kancellár úrral, megköszönve eddigi korrekt munkáját és örök hálámat fejezve ki egy ajándék gyümölcskosár kíséretében? Tisztázni kell: mikor van helye a harci fokozatnak, és mikor a puha, mérsékelt hangnemnek. Egy műhelymunka során, amikor oktató és hallgató konzultál, jogos a felvetés, hogy legyen megtartva egy mérték a beszédstílusban – még heves szakmai kérdésekben is. De egy olyan fórumon, ahol teljes agybaj mutatkozik, csakis a harci attitűd nyerhet értelmet. Hallgatóként kikérem magamnak, hogy bármelyik oktató azt kritizálja, hogyan beszélek egy olyan emberrel, aki az egyik legsúlyosabb emberi morális bűncselekmény elkövetőjének lehetőségeit kvázi segítette. 
\nEmellett olyan hangokat is hallottam a fórum után, hogy a tanárok nem mernek reagálni a történtekre, csendben tűrik a helyzetet – állásuk féltése miatt, a negatív retorziótól való félelem miatt. Innen szeretném jelezni legmélyebb tiszteletemet Fernezelyi Márton tanár úrnak, aki a fórum során az oktatói rétegből a legmarkánsabb kritikával illette a vezetőséget. Úgy gondolom, példát vehetne róla minden oktató: egy ilyen helyzetben pontosan ez az attitűd várható el.
\nAmit még muszáj leszögezni: miután a rendszer minden szinten – az egyetemi ökoszisztémán belül és kívül, a kórháztól a rendőrségen át a bíróságig – magára hagyta az áldozatot, és az elkövető szabadon sétál, nem az a megoldás, hogy agyonverjük. Még ha a düh és az igazságtalanság hatására fel is bugyognak az emberben ilyen érzelmek. Az elkövető nevét több posztban nyilvánosságra hozták, és a kommentek alapján többen szívesen az életére törnének. Úgy gondolom, hogy egy ilyen helyzetben, amikor ilyen súlyos ügy történt, nem az a várható válasz, hogy generálunk belőle egy újabb súlyos ügyet – és elismételjük azt, hogy valakinek az életére törünk. Nem mintha nem érdemelné meg az elkövető, de ezzel a mozzanattal ugyanabba a cipőbe lépnénk, amiben ő is jár az erőszak elkövetése óta.
	\nA fórumon rendkívül zavarban és kellemetlenül éreztem magam. Annyira fel voltam háborodva, hogy nem jutottam szóhoz, képtelen voltam kinyitni a számat – csak szédülten figyeltem a történteket. Ezért választottam az írásos formát tiltakozásom és kritikám kifejezésére. Művészként nekem sem szabad csendben ülnöm és tűrnöm a rendszer nyomorúságát, miközben az egyik társam életére törnek.
  \nA weboldalt eredetileg olyan designnal szerettem volna ellátni, ami az egyetem weboldalának parafrázisaként teljes mértékben leköveti annak stílusjegyeit. Le is programoztam, de őszintén szólva nem mertem így publikálni, mert utánanézve kiderült: a weboldalak grafikája is a szerzői jog kategóriája alá esik. Felvetülhet a kérdés: nem számít-e ez szabad véleménynyilvánításnak, mivel nem érek el vele anyagi hasznot, és az egyetem kritizálására használnám a vizuális megjelenítést? Ezen pár órát gondolkodtam, végül arra jutottam, hogy az általam leírt vélemény erősebb tartalmi igénnyel bír, mint hogy a lázadásomat egy designban interpretáljam. Ettől függetlenül mellékelek egy képernyőfotót az elkészült verzióról, mert rendkívül szórakoztatónak találom, és ilyen formában digitális műtárgynak tekintem.\n
`,
  }

  return (
    <div>
       <div className="rounded-[30px] bg-[#ffe5ec] p-6 mt-[25px] mb-[25px]" id="block_bevezeto">
          <h3 className="mb-4 text-2xl font-bold">Bevezető</h3>
          <p className="leading-relaxed whitespace-pre-line text-justify">
  {text.bevezeto}
</p>
      </div>

      <div className="rounded-[30px] bg-[#ffe5ec] p-6 mt-[25px] mb-[25px]" id="block_linkek">
          <h3 className="mb-4 text-2xl font-bold">Linktár</h3>
          <p className="leading-relaxed">
            <a href="https://merovera.substack.com/p/a-siras-nem-eleg" target="_blank" className="underline">A sírás nem elég - Mérő Vera cikke az esetről</a>
            <br />
            <a href="https://www.peticiok.com/lex_r_csak_az_igen_jelent_igent" target="_blank" className="underline">Lex "R" - az üggyel kapcsolatos petíció</a>
            <br />
            <a href="https://hvg.hu/itthon/20251124_Veres-lepedokkel-es-nema-kiallassal-demonstraltak-a-Kepzomuveszeti-Egyetem-elott" target="_blank" className="underline">HVG cikk</a>
             <br />
            <a href="https://rtl.hu/hirado/2025/11/24/felmentettek-a-szexualis-eroszakkal-vadolt-hallgatot-veres-lepedokkel-alltak-ki-az-aldozat-mellett" target="_blank" className="underline">RTL Híradó riport</a>
             <br />
            <a href="https://24.hu/belfold/2025/11/26/kepzomuveszeti-egyetem-nema-demonstracio-csak-az-igen-jelent-igent/" target="_blank" className="underline">24.hu cikk</a>
             <br />
            <a href="https://index.hu/belfold/2025/11/25/kepzomuveszeti-egyetem-hallgatok-birosag-itelet-felmentes-szexualis-eroszak-veres-lepedo/?token=4666d3b44da683609cb4b4eaaec03415" target="_blank" className="underline">Index cikk</a>
            <br />
            <a href="https://www.youtube.com/watch?v=rsoyZnjmYik" target="_blank" className="underline">ATV riport Mérő Verával</a>
            <br />
            <a href="https://eduline.hu/felsooktatas/20251126_MKE_szexualis_eroszak_hallgatoi_forum_kancellaria" target="_blank" className="underline">eduline cikk</a>
          </p>
      </div>

      <div className="rounded-[30px] bg-[#ffe5ec] p-6 mt-[25px] mb-[25px]" id="block_velemeny">
          <h3 className="mb-4 text-2xl font-bold">Vélemény</h3>
          <p className="leading-relaxed whitespace-pre-line text-justify">
  {text.velemeny}
</p>
          <img src="/screenshot.png" />
      </div>
    </div>

    
  );
}
