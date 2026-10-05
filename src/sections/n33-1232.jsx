import { Panel, TopRules } from './_shared.jsx';

const imgLine15 = "https://www.figma.com/api/mcp/asset/1654623a-0e9f-43fb-8e51-9408b87fc460.svg";

function Callout({ id, top, lines }) {
  return (
    <div className="[word-break:break-word] absolute font-['Grot10:Light'] leading-[0] left-[457px] not-italic text-[#000f28] text-[0px] w-[248px]" style={{ top }} data-node-id={id}>
      <p className="font-['Alegreya_Sans:Medium'] leading-[16px] mb-0 text-[16px]">{lines[0]}</p>
      <p className="font-['Alegreya_Sans:Regular'] leading-[16px] mb-0 text-[16px]">{lines[1]}</p>
      <p className="font-['Alegreya_Sans:Regular'] leading-[16px] mb-0 text-[16px]">{lines[2]}</p>
    </div>
  );
}

function Pointer({ id, top }) {
  return (
    <div className="absolute flex h-0 items-center justify-center left-[457px] w-[455px]" style={{ top }} data-node-id={id}>
      <div className="flex-none rotate-180">
        <div className="h-0 relative w-[455px]">
          <div className="absolute inset-[-2.67px_0_-2.67px_-0.59%]">
            <img alt="" className="block max-w-none size-full" src={imgLine15} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Component37TipografiaJerarquiaVisual() {
  return (
    <div className="bg-[#ebeadc] relative size-full" data-node-id="33:1232" data-name="37 - Tipografía Jerarquía Visual">
      <Panel id="33:1233" h={919} title="Tipografía" subtitle="Jerarquía Visual">
        <div className="absolute bg-[rgba(0,15,40,0.45)] h-[2px] left-[81px] top-[229px] w-[248px]" data-node-id="33:1241" data-name="Regla lateral" />
        <TopRules />
        <Callout id="33:1279" top={449} lines={["Título:", "Baskervville", "128 pt"]} />
        <Callout id="33:1280" top={688} lines={["Subtítulo", "Alegreya Sans", "24 pt"]} />
        <Callout id="33:1281" top={802} lines={["Texto corrido", "Alegreya Sans", "14 pt"]} />
        <div className="absolute bg-white h-[835px] left-[834px] top-[229px] w-[1006px]" data-node-id="33:1261" />
        <div className="[word-break:break-word] absolute font-['Baskervville:Regular'] font-normal leading-[0] left-[930px] text-[#000f28] text-[128px] top-[365px] tracking-[-1.28px] w-[831px] whitespace-pre-wrap" data-node-id="33:1270">
          <p className="leading-[129px] mb-0">{`Creemos `}</p>
          <p className="leading-[129px]">en lo humano.</p>
        </div>
        <p className="[word-break:break-word] absolute font-['Alegreya_Sans:Medium'] leading-[27px] left-[930px] not-italic text-[#000f28] text-[24px] top-[661px] tracking-[11.04px] w-[831px]" data-node-id="33:1271">
          REAL ESTATE 4 REAL PEOPLE
        </p>
        <p className="[word-break:break-word] absolute font-['Alegreya_Sans:Regular'] leading-[16px] left-[930px] not-italic text-[#000f28] text-[14px] top-[738px] w-[385px]" data-node-id="33:1272">
          “Real Estate 4 Real People” busca que Dis and Dat se diferencie por cómo trata a sus clientes y por su forma de ver el mundo. Propiedades, lujo y palabras bonitas las tiene todo el mundo. Nuestra promesa se basa en lo que se ha ido perdiendo con los años: la confianza, la palabra, el calor y el tiempo.
        </p>
        <p className="[word-break:break-word] absolute font-['Alegreya_Sans:Regular'] leading-[16px] left-[1346px] not-italic text-[#000f28] text-[14px] top-[738px] w-[385px]" data-node-id="33:1274">
          Creemos firmemente que es necesario humanizar el real estate. En plena época de la inteligencia artificial, el lujo está en lo genuino, en lo que sale del alma y nadie puede copiar.
        </p>
        <Pointer id="33:1275" top={430} />
        <Pointer id="33:1277" top={675} />
        <Pointer id="33:1278" top={778} />
        <p className="[word-break:break-word] absolute font-['Alegreya_Sans:Regular'] leading-[normal] left-[88px] not-italic text-[#000f28] text-[15px] top-[257px] w-[231px]" data-node-id="37:1366">
          Cada nivel de texto cumple una función distinta: el título capta la atención, el subtítulo la sostiene, y el cuerpo de texto explica. Tres tamaños, tres pesos, un mismo sistema — así se lee una pieza de un vistazo, sin perderse en ella.
        </p>
      </Panel>
    </div>
  );
}
