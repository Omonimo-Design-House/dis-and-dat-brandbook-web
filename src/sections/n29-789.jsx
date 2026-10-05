import { Panel, TopRules } from './_shared.jsx';

const imgKeyVisual = "https://www.figma.com/api/mcp/asset/21501021-c2f0-465f-80dd-f35000e835ee.png";
const imgSinTitulo6Copia1 = "https://www.figma.com/api/mcp/asset/8ca4bdb9-8999-4843-ab4b-994e65d745c4.png";
const imgKeyVisual1 = "https://www.figma.com/api/mcp/asset/2fcc1c99-45c7-417e-9689-d5d2c89fee06.png";
const imgKeyVisual2 = "https://www.figma.com/api/mcp/asset/bbaf81b4-c624-4ac6-a578-79096ce3f583.png";
const imgKeyVisual3 = "https://www.figma.com/api/mcp/asset/de35663d-c332-4b30-968d-aa1c58b58293.png";
const img431 = "https://www.figma.com/api/mcp/asset/d9a89b86-1693-47d1-83b0-4664fda152ff.png";
const imgSinTitulo1Copia2 = "https://www.figma.com/api/mcp/asset/4c3c3ac7-3aae-4ae9-bf46-50369e68ef3b.png";
const imgKeyVisual4 = "https://www.figma.com/api/mcp/asset/27fa0a6e-6423-49be-8238-3bde8218aec2.png";
const imgKeyVisual5 = "https://www.figma.com/api/mcp/asset/5be55ec4-d9cf-4027-b0e7-b61ec4e21bb8.png";
const imgKeyVisual6 = "https://www.figma.com/api/mcp/asset/83aea571-f94d-4a3f-a794-8f380df93ee7.png";

function Visual({ id, h, src }) {
  return (
    <div className="border-[#000f28] border-[1.5px] border-solid flex-[1_0_0] min-w-px relative rounded-[24px]" style={{ height: h }} data-node-id={id} data-name="KEY VISUAL">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={src} />
    </div>
  );
}

// Image centred on a solid tile (black or Lapicero), as in the Figma frame.
function Framed({ id, h, bg, imgW, src }) {
  return (
    <div className={`${bg} border-[#000f28] border-[1.5px] border-solid content-stretch flex flex-[1_0_0] items-center justify-center min-w-px overflow-clip relative rounded-[24px]`} style={{ height: h }} data-node-id={id} data-name="KEY VISUAL">
      <div className="relative shrink-0" style={{ height: h, width: imgW }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={src} />
      </div>
    </div>
  );
}

const Row = ({ id, children }) => (
  <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-node-id={id} data-name="Fila">{children}</div>
);

export default function Component06KeyVisuals() {
  return (
    <div className="bg-[#ebeadc] relative size-full" data-node-id="29:789" data-name="06-Personalidad">
      <Panel id="29:790" h={5171} title="Key Visuals">
        <TopRules />
        <div className="absolute content-stretch flex flex-col gap-[28px] h-[4729px] items-start left-[79px] top-[228px] w-[1761px]" data-node-id="29:850">
          <Row id="29:823"><Visual id="29:824" h={900} src={imgKeyVisual} /></Row>
          <Row id="29:826"><Framed id="29:827" h={1000} bg="bg-black" imgW={1761} src={imgSinTitulo6Copia1} /></Row>
          <Row id="29:829">
            <Visual id="29:830" h={760} src={imgKeyVisual1} />
            <Visual id="29:832" h={760} src={imgKeyVisual2} />
          </Row>
          <Row id="29:834">
            <Visual id="29:835" h={620} src={imgKeyVisual3} />
            <Framed id="29:837" h={620} bg="bg-[#000f28]" imgW={868.5} src={img431} />
          </Row>
          <Row id="29:839"><Framed id="29:840" h={900} bg="bg-black" imgW={1761} src={imgSinTitulo1Copia2} /></Row>
          <Row id="29:842">
            <Visual id="29:843" h={520} src={imgKeyVisual4} />
            <Visual id="29:845" h={520} src={imgKeyVisual5} />
            <Visual id="29:847" h={520} src={imgKeyVisual6} />
          </Row>
        </div>
      </Panel>
    </div>
  );
}
