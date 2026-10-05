import { Panel, TopRules } from './_shared.jsx';

const imgMonogramaDisAndDat = "https://www.figma.com/api/mcp/asset/2c13ecd8-d6e6-441f-a637-24176fdbd254.svg";
const imgLine10 = "https://www.figma.com/api/mcp/asset/acb40a2d-5647-4428-8d0b-da985a7c516f.svg";
const imgReglaLateral = "https://www.figma.com/api/mcp/asset/e766dced-3dcf-441b-8677-2d60a03d075d.svg";

export default function Component23IsotipoUsosIncorrectos() {
  return (
    <div className="bg-white relative size-full" data-node-id="17:1959" data-name="23 -Isotipo - Usos incorrectos">
      <Panel id="17:1964" h={1511} title="Isotipo" subtitle="Usos Incorrectos">
        <TopRules />
        <div className="absolute bg-[rgba(0,15,40,0.45)] h-[2px] left-[81px] top-[237px] w-[247px]" data-node-id="17:1975" data-name="Regla lateral" />
        <p className="[word-break:break-word] absolute font-['Alegreya_Sans:Regular'] leading-[normal] left-[88px] not-italic text-[#000f28] text-[15px] top-[257px] w-[207px]" data-node-id="17:1976">
          Los mismos usos incorrectos del logotipo aplican al isotipo: no se rota, no se distorsiona, no cambia de color y no pierde contraste sobre el fondo. A esto se suma una restricción propia de su función.
        </p>
        <div className="absolute bg-white h-[650px] left-[364px] rounded-[10px] top-[287px] w-[1476px]" data-node-id="17:1977" />
        <div className="absolute inset-[23.63%_17.71%_42.67%_32.29%]" data-node-id="2013:1140" data-name="Monograma Dis and Dat">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMonogramaDisAndDat} />
        </div>
        <div className="absolute flex h-[604px] items-center justify-center left-[382px] top-[311px] w-[1437px]" data-node-id="18:2242">
          <div className="flex-none rotate-[-22.8deg]">
            <div className="h-0 relative w-[1558.777px]">
              <div className="absolute inset-[-2px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine10} />
              </div>
            </div>
          </div>
        </div>
      </Panel>
      <div className="absolute h-[2px] left-[364px] top-[237px] w-[1478px]" data-node-id="17:2025" data-name="Regla lateral">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgReglaLateral} />
      </div>
      <div className="[word-break:break-word] absolute font-['Grot10:Medium'] h-[138px] leading-[0] left-[365px] not-italic text-[#000f28] text-[0px] top-[973px] w-[401px] whitespace-pre-wrap" data-node-id="18:2243">
        <p className="font-['Alegreya_Sans:Medium'] leading-[normal] mb-0 text-[14px]">Incorrecto</p>
        <p className="font-['Alegreya_Sans:Regular'] leading-[normal] mb-0 text-[14px] text-[rgba(0,15,40,0.45)]">{`Ampliado, el isotipo ocupa el protagonismo que le corresponde al logotipo, sin comunicar el nombre de la marca. `}</p>
        <p className="font-['Alegreya_Sans:Medium'] leading-[normal] mb-0 text-[14px]">Correcto</p>
        <p className="font-['Alegreya_Sans:Regular'] leading-[normal] mb-0 text-[14px] text-[rgba(0,15,40,0.45)]">Usarlo a su escala natural —reducida— y reservar el logotipo para las piezas donde el nombre debe leerse con claridad.</p>
      </div>
      <p className="[word-break:break-word] absolute font-['Alegreya_Sans:Medium'] leading-[normal] left-[379px] not-italic text-[#000f28] text-[10px] top-[303px] w-[130px]" data-node-id="37:1364">
        Usar a gran escala
      </p>
    </div>
  );
}
