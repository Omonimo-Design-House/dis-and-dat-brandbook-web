import { Panel, TopRules } from './_shared.jsx';

const imgMonogramaDisAndDat = "https://www.figma.com/api/mcp/asset/6701a851-4572-4385-95fa-465177be3c34.svg";

export default function Component18IsotipoMonograma() {
  return (
    <div className="bg-white relative size-full" data-node-id="17:1497" data-name="18-Isotipo monograma">
      <Panel id="17:1506" title="Isotipo" subtitle="Monograma">
        <div className="absolute inset-[28.18%_38.49%_59.71%_48.28%]" data-node-id="2013:643" data-name="Monograma Dis and Dat">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMonogramaDisAndDat} />
        </div>
      </Panel>
      <TopRules />
    </div>
  );
}
