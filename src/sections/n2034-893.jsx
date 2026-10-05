import { Panel, TopRules } from './_shared.jsx';

const imgVector = "https://www.figma.com/api/mcp/asset/150c2e81-c712-47ba-9193-ade3d965b44a.svg";
const imgVector1 = "https://www.figma.com/api/mcp/asset/0203bb08-5dd9-4ca9-a374-26884921a2d9.svg";
const imgVector2 = "https://www.figma.com/api/mcp/asset/db05a42a-7ff0-4c37-af38-c529de3c2afd.svg";
const imgVector3 = "https://www.figma.com/api/mcp/asset/a76f62bb-9208-407a-80c5-b8cd7879ea5a.svg";
const imgVector4 = "https://www.figma.com/api/mcp/asset/00872493-c55c-424f-b796-4f55b454678f.svg";

export default function Component18IsotipoMonogramaSello() {
  return (
    <div className="bg-white relative size-full" data-node-id="2034:893" data-name="18-Isotipo monograma">
      <Panel id="2034:902" title="Isotipo" subtitle="Monograma Sello" />
      <TopRules />
      <div className="absolute contents inset-[38.94%_34.16%_27.73%_44.48%]" data-node-id="2034:932">
        <div className="absolute inset-[51.67%_37.76%_39.79%_60.28%]" data-node-id="2034:933" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
        </div>
        <div className="absolute inset-[51.67%_49.96%_39.79%_48.08%]" data-node-id="2034:934" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
        </div>
        <div className="absolute inset-[45.31%_40.46%_33.42%_50.78%]" data-node-id="2034:935" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector2} />
        </div>
        <div className="absolute inset-[38.94%_34.16%_27.73%_44.48%]" data-node-id="2034:936" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector3} />
        </div>
        <div className="absolute inset-[41.43%_35.04%_30.22%_45.36%]" data-node-id="2034:937" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector4} />
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Alegreya_Sans:Regular'] leading-[normal] left-[88px] not-italic text-[#000f28] text-[15px] top-[257px] w-[231px]" data-node-id="2034:939">
        Su forma cerrada y su textura evocan un sello de cera. Se reserva para certificados, placas e invitaciones: piezas que piden peso ceremonial.
      </p>
      <div className="absolute bg-[rgba(0,15,40,0.45)] h-[2px] left-[81px] top-[237px] w-[247px]" data-node-id="2034:941" data-name="Regla lateral" />
    </div>
  );
}
