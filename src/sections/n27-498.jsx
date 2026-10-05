import { Panel, TopRules } from './_shared.jsx';

const imgLine11 = "https://www.figma.com/api/mcp/asset/a0f30d06-94c0-4c91-bc39-a44c2951e94e.svg";
const imgLine13 = "https://www.figma.com/api/mcp/asset/a1f22310-06ef-46e3-835f-7613014f60a8.svg";

// Small measurement glyph ("A" between two ticks) used next to the spec list.
function Tick({ id, cls, rotate, img }) {
  return (
    <div className={`absolute flex items-center justify-center ${cls}`} data-node-id={id}>
      <div className={`flex-none ${rotate}`}>
        <div className="h-0 relative w-[15px]">
          <div className="absolute inset-[-1px_0_0_0]">
            <img alt="" className="block max-w-none size-full" src={img} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Spec({ k, v }) {
  return (
    <p className="mb-0 text-[16px]">
      <span className="font-['Alegreya_Sans:Medium'] leading-[16px] text-[#000f28]">{k}</span>
      <span className="font-['Alegreya_Sans:Regular'] leading-[16px]">{v}</span>
    </p>
  );
}

const Gap = () => <p className="leading-[16px] mb-0 text-[16px]">​</p>;

export default function Component34TipografiaTitulos() {
  return (
    <div className="bg-white relative size-full" data-node-id="27:498" data-name="34 - Tipografía Títulos">
      <Panel id="27:503" h={2792} title="Tipografía" subtitle="Títulos">
        <div className="absolute bg-[rgba(0,15,40,0.45)] h-[2px] left-[81px] top-[229px] w-[248px]" data-node-id="27:512" data-name="Regla lateral" />
        <div className="absolute contents left-[57px] top-[394px]" data-node-id="27:571">
          <Tick id="27:565" cls="h-0 left-[57px] top-[394px] w-[15px]" rotate="rotate-180" img={imgLine11} />
          <Tick id="27:566" cls="h-0 left-[57px] top-[409px] w-[15px]" rotate="rotate-180" img={imgLine11} />
          <p className="[word-break:break-word] absolute font-['Alegreya_Sans:Medium'] leading-[16px] left-[60px] not-italic text-[14px] text-[rgba(0,15,40,0.45)] top-[394px] whitespace-nowrap" data-node-id="27:567">
            A
          </p>
        </div>
        <div className="absolute contents left-[57px] top-[347px]" data-node-id="27:572">
          <Tick id="27:568" cls="h-[15px] left-[57px] top-[348px] w-0" rotate="rotate-90" img={imgLine13} />
          <Tick id="27:569" cls="h-[15px] left-[72px] top-[348px] w-0" rotate="rotate-90" img={imgLine13} />
          <p className="[word-break:break-word] absolute font-['Alegreya_Sans:Medium'] leading-[16px] left-[61px] not-italic text-[10px] text-[rgba(0,15,40,0.45)] top-[347px] whitespace-nowrap" data-node-id="27:570">
            A
          </p>
        </div>
      </Panel>
      <TopRules />
      <div className="absolute content-stretch flex flex-col h-[2493px] items-start left-[366px] overflow-clip top-[209px] w-[1470px]" data-node-id="27:621" data-name="Contenido">
        <div className="[word-break:break-word] font-['Baskervville:Regular'] font-normal leading-[0] relative shrink-0 text-[#000f28] text-[265px] text-center w-[1470px]" data-node-id="27:622">
          {/* Line breaks fixed to match Figma's wrapping of the specimen */}
          {["AaBbCcDd", "EeFfGgHhIi", "JjKkLlMmN", "nÑñOoPpQ", "qRrSsTtUu", "VvwXxYyZz", "1345 67890!", "&@$%()*®"].map(line => (
            <p key={line} className="leading-[270px] mb-0 whitespace-nowrap">{line}</p>
          ))}
        </div>
      </div>
      <div className="[word-break:break-word] absolute font-['Grot10:Light'] leading-[0] left-[80px] not-italic text-[#000f28] text-[0px] top-[249px] w-[248px] whitespace-pre-wrap" data-node-id="27:624">
        <Spec k="Familia:" v=" Baskervville" />
        <Gap />
        <Spec k="Peso:" v=" Regular" />
        <Gap />
        <p className="font-['Alegreya_Sans:Medium'] leading-[16px] mb-0 text-[16px]">Caja: Tipo frase</p>
        <Gap />
        <Spec k="Margen de espaciado entre letras:" v=" -25 / +25" />
        <Gap />
        <Spec k="Altura entre líneas:" v=" Igual o hasta 4 puntos más que el puntaje de la tipografía." />
      </div>
    </div>
  );
}
