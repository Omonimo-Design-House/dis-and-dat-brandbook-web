import { Panel, TopRules } from './_shared.jsx';

const imgCombinacionSolLap = "https://www.figma.com/api/mcp/asset/e0818fce-53e3-43a3-86f0-f8bb43215415.svg";
const imgCombinacionSalLap = "https://www.figma.com/api/mcp/asset/a1b214bb-4044-413a-9d0f-584e9dff2656.svg";
const imgCombinacionMonPer = "https://www.figma.com/api/mcp/asset/4c7e303c-7c75-424e-9da6-bd0caf66880d.svg";
const imgCombinacionArrLap = "https://www.figma.com/api/mcp/asset/56e79ce7-d7c7-460d-aab4-b8d755081378.svg";
const imgCombinacionLapPer = "https://www.figma.com/api/mcp/asset/f320aae5-95d7-495a-af8a-5bdda72a0dea.svg";
const imgCombinacionPerLap = "https://www.figma.com/api/mcp/asset/dd36700d-6eb8-4f84-8ab3-f77f4fb1e974.svg";

const rows = [
  ["2012:399", "2012:406", "Combinación SOL/LAP", imgCombinacionSolLap],
  ["2012:410", "2012:417", "Combinación SAL/LAP", imgCombinacionSalLap],
  ["2012:421", "2012:428", "Combinación MON/PER", imgCombinacionMonPer],
  ["2012:434", "2012:441", "Combinación ARR/LAP", imgCombinacionArrLap],
  ["2012:445", "2012:452", "Combinación LAP/PER", imgCombinacionLapPer],
  ["2012:454", "2012:461", "Combinación PER/LAP", imgCombinacionPerLap],
];

export default function Component30ColorArmoniasDeColor() {
  return (
    <div className="bg-white relative size-full" data-node-id="20:2897" data-name="30- Color - Armonías de Color">
      <Panel id="20:2902" h={2269} title="Color" subtitle="Armonías de Color">
        <TopRules />
      </Panel>
      <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-[365px] overflow-clip top-[233px] w-[1496px]" data-node-id="20:3057" data-name="Contenido">
        {rows.map(([rowId, id, name, src]) => (
          <div key={id} className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-node-id={rowId}>
            <div className="h-[290px] relative shrink-0 w-[400px]" data-node-id={id} data-name={name}>
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={src} />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bg-[rgba(0,15,40,0.45)] h-[2px] left-[81px] top-[237px] w-[247px]" data-node-id="23:614" data-name="Regla lateral" />
      <p className="[word-break:break-word] absolute font-['Alegreya_Sans:Regular'] leading-[normal] left-[81px] not-italic text-[#000f28] text-[15px] top-[257px] w-[243px]" data-node-id="23:615">
        Cada color de fondo tiene un acento que le sienta bien. Estas son las combinaciones ya probadas — el punto de partida antes de armar una pieza nueva.
      </p>
    </div>
  );
}
