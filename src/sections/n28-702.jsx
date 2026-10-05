import { Panel, TopRules } from './_shared.jsx';

const imgFoto = "https://www.figma.com/api/mcp/asset/5dcca627-24ef-4e8e-a115-34978dfd5d1f.png";
const imgFoto1 = "https://www.figma.com/api/mcp/asset/74d5f929-dcfa-44e4-93dd-96172c28a7e2.png";
const imgFoto2 = "https://www.figma.com/api/mcp/asset/1145eeb9-e03c-4457-a5da-36cc49108e76.png";
const imgFoto3 = "https://www.figma.com/api/mcp/asset/ec6f53f8-8d9e-47e7-b92f-d63b80e54a7d.png";

function Photo({ id, src, h, l, t, w }) {
  return (
    <div className="border-[#000f28] border-[1.5px] border-solid flex-[1_0_0] h-[420px] min-w-px relative rounded-[24px]" data-node-id={id} data-name="FOTO">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[24px]">
        <img alt="" className="absolute max-w-none" style={{ height: h, left: l, top: t, width: w }} src={src} />
      </div>
    </div>
  );
}

export default function Component06RecursosRelieve() {
  return (
    <div className="bg-[#ebeadc] relative size-full" data-node-id="28:702" data-name="06-Personalidad">
      <Panel id="28:703" h={805} title="Recursos Gráficos " subtitle="Alto y Bajo Relieve">
        <div className="absolute bg-[rgba(0,15,40,0.45)] h-[2px] left-[81px] top-[229px] w-[248px]" data-node-id="28:711" data-name="Regla lateral" />
        <TopRules />
        <div className="absolute content-stretch flex gap-[20px] h-[433px] items-start left-[364px] overflow-clip top-[230px] w-[1478px]" data-node-id="28:723" data-name="Fotos">
          <Photo id="28:724" src={imgFoto} h="133.33%" l="-49.69%" t="0" w="236.95%" />
          <Photo id="28:725" src={imgFoto1} h="166.67%" l="-103.31%" t="-24.9%" w="279.36%" />
          <Photo id="28:726" src={imgFoto2} h="181.82%" l="-111.56%" t="-50.64%" w="323.12%" />
          <Photo id="28:727" src={imgFoto3} h="161.29%" l="-94.21%" t="-30.65%" w="286.64%" />
        </div>
        <div className="[word-break:break-word] absolute font-['Alegreya_Sans:Regular'] leading-[0] left-[88px] not-italic text-[#000f28] text-[15px] top-[257px] w-[231px] whitespace-pre-wrap" data-node-id="37:1370">
          <p className="leading-[normal] mb-0">El alto y el bajo relieve llevan la marca al tacto. Se graba el wordmark, su versión vertical, el monograma o el óvalo sobre papel de algodón, cartón, tela o cuero, en seco o con una tinta de la paleta.</p>
          <p className="leading-[normal] mb-0">​</p>
          <p className="leading-[normal]">La marca se lee por la sombra que deja el relieve, por eso funciona mejor sobre materiales con textura y con luz lateral.</p>
        </div>
      </Panel>
    </div>
  );
}
