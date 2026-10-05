import { Panel, TopRules } from './_shared.jsx';

const imgLine2 = "https://www.figma.com/api/mcp/asset/11923450-e081-457e-8e91-d6337d670506.svg";
const imgMonogramaDisAndDat = "https://www.figma.com/api/mcp/asset/1df2932d-0c97-4f61-a845-e38a25193d4b.svg";
const imgMonogramaDisAndDat1 = "https://www.figma.com/api/mcp/asset/bb19fab7-15ab-46f5-aac0-d2041ee2cfb2.svg";
const imgMonogramaDisAndDat2 = "https://www.figma.com/api/mcp/asset/92e3645f-fd51-4dcb-838a-349f84a05c43.svg";

function Strike({ id, left }) {
  return (
    <div className="absolute flex h-[296px] items-center justify-center top-[313px] w-[341px]" style={{ left }} data-node-id={id}>
      <div className="flex-none rotate-[-40.96deg]">
        <div className="h-0 relative w-[451.55px]">
          <div className="absolute inset-[-2px_0_0_0]">
            <img alt="" className="block max-w-none size-full" src={imgLine2} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Component20IsotipoOrientacion() {
  return (
    <div className="bg-white relative size-full" data-node-id="17:1625" data-name="20-isotipo orientación">
      <Panel id="17:1673" title="Isotipo" subtitle="Orientación">
        <div className="absolute content-stretch flex flex-col items-start left-[364px] overflow-clip top-[257px]" data-node-id="17:1680" data-name="Meta">
          <p className="[word-break:break-word] font-['Alegreya_Sans:Medium'] leading-[normal] not-italic relative shrink-0 text-[#000f28] text-[13px] tracking-[5.46px] uppercase whitespace-nowrap" data-node-id="17:1681">
            CORRECTO
          </p>
        </div>
        <div className="absolute bg-[rgba(0,15,40,0.45)] h-[2px] left-[81px] top-[237px] w-[247px]" data-node-id="17:1684" data-name="Regla lateral" />
        <div className="absolute bg-[rgba(0,15,40,0.45)] h-[2px] left-[364px] top-[237px] w-[342px]" data-node-id="17:1685" data-name="Regla lateral" />
        <div className="absolute bg-[rgba(0,15,40,0.45)] h-[2px] left-[742px] top-[237px] w-[1098px]" data-node-id="17:2188" data-name="Regla lateral" />
        <p className="[word-break:break-word] absolute font-['Alegreya_Sans:Regular'] leading-[normal] left-[81px] not-italic text-[#000f28] text-[15px] top-[257px] w-[247px]" data-node-id="17:1687">
          El isotipo tiene una sola orientación válida: horizontal. Cualquier rotación compromete su lectura y su reconocimiento.
        </p>
        <div className="[word-break:break-word] absolute font-['Grot10:Medium'] leading-[0] left-[365px] not-italic text-[#000f28] text-[0px] top-[667px] w-[341px]" data-node-id="17:1688">
          <p className="font-['Alegreya_Sans:Medium'] leading-[normal] mb-0 text-[14px]">Horizontal</p>
          <p className="font-['Alegreya_Sans:Regular'] leading-[normal] text-[14px] text-[rgba(0,15,40,0.45)]">Esta es nuestra orientación por defecto.</p>
        </div>
        <p className="[word-break:break-word] absolute font-['Alegreya_Sans:Medium'] leading-[normal] left-[742px] not-italic text-[#000f28] text-[13px] top-[257px] tracking-[5.46px] uppercase whitespace-nowrap" data-node-id="17:1712">
          INCORRECTO
        </p>
        <Strike id="17:2193" left={836} />
        <Strike id="17:2194" left={1403} />
      </Panel>
      <TopRules />
      <div className="absolute inset-[51.44%_67.86%_34.88%_21.35%]" data-node-id="2013:647" data-name="Monograma Dis and Dat">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMonogramaDisAndDat} />
      </div>
      <div className="absolute flex inset-[45.33%_44.95%_28.89%_49.33%] items-center justify-center" data-node-id="2013:651" style={{ containerType: "size" }}>
        <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
          <div className="relative size-full" data-name="Monograma Dis and Dat">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMonogramaDisAndDat1} />
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[44.85%_11.08%_27.25%_77.25%] items-center justify-center" data-node-id="2013:655" style={{ containerType: "size" }}>
        <div className="-rotate-45 flex-none h-[hypot(34.6628cqw,34.6628cqh)] w-[hypot(65.3372cqw,-65.3372cqh)]">
          <div className="relative size-full" data-name="Monograma Dis and Dat">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMonogramaDisAndDat2} />
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] absolute font-['Grot10:Medium'] leading-[0] left-[826px] not-italic text-[#000f28] text-[0px] top-[656px] w-[272px] whitespace-pre-wrap" data-node-id="2034:890">
        <p className="font-['Alegreya_Sans:Medium'] leading-[normal] mb-0 text-[14px]">{`Vertical `}</p>
        <p className="font-['Alegreya_Sans:Regular'] leading-[normal] text-[14px]">{`Está prohibido rotar el monograma 90° en dirección o en contra  a las manecillas del reloj.`}</p>
      </div>
      <div className="[word-break:break-word] absolute font-['Grot10:Medium'] leading-[0] left-[1384px] not-italic text-[#000f28] text-[0px] top-[656px] w-[272px] whitespace-pre-wrap" data-node-id="2034:892">
        <p className="font-['Alegreya_Sans:Medium'] leading-[normal] mb-0 text-[14px]">Diagonal</p>
        <p className="font-['Alegreya_Sans:Regular'] leading-[normal] text-[14px]">{`Está prohibido rotar el monograma a  45° o cualquier otra rotación que no sea horizontal.`}</p>
      </div>
    </div>
  );
}
