import { Panel, TopRules } from './_shared.jsx';

// Yellow illustrations tile (28:697) exported from Figma as one SVG: same tile, border and 12 doodles.
const imgIlustraciones = "https://www.figma.com/api/mcp/asset/b0b843f3-e8cc-4b2b-ae2c-d3fc9ab5d692.svg";
const imgFoto = "https://www.figma.com/api/mcp/asset/c141a0dc-a6ae-4a86-a82c-9b1e600950dc.png";
const imgFoto1 = "https://www.figma.com/api/mcp/asset/35cbb0ff-7113-4c36-8b0a-276318288906.png";

function Photo({ id, src, h, l, t, w }) {
  return (
    <div className="border-[#000f28] border-[1.5px] border-solid flex-[1_0_0] h-[420px] min-w-px relative rounded-[24px]" data-node-id={id} data-name="FOTO">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[24px]">
        <img alt="" className="absolute max-w-none" style={{ height: h, left: l, top: t, width: w }} src={src} />
      </div>
    </div>
  );
}

export default function Component06RecursosIlustraciones() {
  return (
    <div className="bg-[#ebeadc] relative size-full" data-node-id="28:667" data-name="06-Personalidad">
      <Panel id="28:668" h={805} title="Recursos Gráficos " subtitle="Ilustraciones">
        <div className="absolute bg-[rgba(0,15,40,0.45)] h-[2px] left-[81px] top-[229px] w-[248px]" data-node-id="28:676" data-name="Regla lateral" />
        <TopRules />
        <div className="absolute content-stretch flex gap-[20px] h-[433px] items-start left-[364px] overflow-clip top-[230px] w-[1478px]" data-node-id="28:696" data-name="Fotos">
          <div className="flex-[1_0_0] h-[420px] min-w-px relative" data-node-id="28:697" data-name="Ilustraciones">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIlustraciones} />
          </div>
          <Photo id="2043:413" src={imgFoto} h="209.33%" l="-170.51%" t="-53.05%" w="440.9%" />
          <Photo id="28:699" src={imgFoto1} h="349.16%" l="-75.04%" t="-129.91%" w="289.55%" />
          <Photo id="28:700" src={imgFoto} h="214.73%" l="-58.1%" t="-64.79%" w="452.27%" />
        </div>
        <div className="[word-break:break-word] absolute font-['Alegreya_Sans:Regular'] leading-[0] left-[88px] not-italic text-[#000f28] text-[15px] top-[257px] w-[231px] whitespace-pre-wrap" data-node-id="37:1368">
          <p className="leading-[normal] mb-0">Las ilustraciones salen del arte naif: trazos hechos a mano, sin regla ni perspectiva, con la soltura de un dibujo en una servilleta. Muestran que detrás de la marca hay personas.</p>
          <p className="leading-[normal] mb-0">​</p>
          <p className="leading-[normal]">Se usan como acento, una o dos por pieza, en Lapicero sobre fondos claros o en Pergamino sobre fondos oscuros. También reemplazan letras del wordmark en sus versiones alternativas. Nunca se rellenan con degradados ni se redibujan en digital para que queden perfectas.</p>
        </div>
      </Panel>
    </div>
  );
}
