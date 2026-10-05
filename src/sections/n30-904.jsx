import { TopRules } from './_shared.jsx';

const imgIlustracionSinTitulo2X1 = "https://www.figma.com/api/mcp/asset/ceec3eb1-94da-40ef-a777-9c93c92c0de8.png";
const imgLogoDisAndDat = "https://www.figma.com/api/mcp/asset/2882c7f2-f916-425b-9db9-44308f71733c.svg";

export default function Component07Cierre() {
  return (
    <div className="bg-[#f9cd3b] relative size-full" data-node-id="30:904" data-name="07 · Divisor de sección">
      <TopRules />
      <div className="absolute h-[884px] left-[370px] top-0 w-[1179px]" data-node-id="2043:415" data-name="Ilustración_sin_título@2x 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIlustracionSinTitulo2X1} />
      </div>
      <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-px items-start left-[365px] not-italic overflow-clip text-[#000f28] top-[72px] whitespace-nowrap" data-node-id="31:925" data-name="Meta">
        <p className="font-['Alegreya_Sans:Medium'] leading-[0] relative shrink-0 text-[0px]" data-node-id="31:926">
          <span className="leading-[normal] text-[32px]">Dis and Dat</span>
          <span className="leading-[normal] text-[20.64px]">®</span>
        </p>
        <p className="font-['Alegreya_Sans:Regular'] leading-[normal] relative shrink-0 text-[32px]" data-node-id="31:927">{`Brand guidelines `}</p>
      </div>
      <p className="[word-break:break-word] absolute font-['Alegreya_Sans:Medium'] leading-[normal] left-[80px] not-italic text-[#000f28] text-[15px] top-[74px] whitespace-nowrap" data-node-id="31:928">{`By Omónimo Design House `}</p>
      <p className="[word-break:break-word] absolute font-['Alegreya_Sans:Medium'] leading-[normal] left-[80px] not-italic text-[#000f28] text-[15px] top-[93px] whitespace-nowrap" data-node-id="31:929">{`(2026)© `}</p>
      <div className="absolute inset-[87.8%_4.22%_4.08%_4.17%]" data-node-id="2043:440" data-name="Logo Dis and Dat">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogoDisAndDat} />
      </div>
    </div>
  );
}
