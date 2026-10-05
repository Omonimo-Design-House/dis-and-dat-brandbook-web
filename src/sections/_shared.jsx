// Pieces repeated across most brandbook pages in Figma (same classes as the exported layers).
const imgRule = "https://www.figma.com/api/mcp/asset/9e2032a0-eb5f-4b91-89bc-9b1ad0aafb0b.svg";

// Cream page panel with the "Dis and Dat® / Brand Guidelines" meta, section title and italic subtitle.
export function Panel({ id, h = 1113, title, subtitle, children }) {
  return (
    <div className={`absolute bg-[#ebeadc] left-0 overflow-clip top-0 w-[1920px]`} style={{ height: h }} data-node-id={id} data-name="06-Personalidad">
      <div className="[word-break:break-word] absolute content-stretch flex flex-col font-['Alegreya_Sans:Medium'] gap-px items-start leading-[normal] left-[81px] not-italic overflow-clip text-[15px] top-[72px] whitespace-nowrap" data-name="Meta">
        <p className="relative shrink-0 text-[#000f28]">Dis and Dat®</p>
        <p className="relative shrink-0 text-[rgba(0,15,40,0.45)]">Brand Guidelines</p>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-[365px] overflow-clip top-[72px]" data-name="Meta">
        <p className="[word-break:break-word] font-['Alegreya_Sans:Medium'] leading-[normal] not-italic relative shrink-0 text-[#000f28] text-[32px] whitespace-nowrap">{title}</p>
      </div>
      {subtitle && (
        <div className="absolute content-stretch flex flex-col items-start left-[365px] overflow-clip top-[116px]" data-name="Meta">
          <p className="[word-break:break-word] font-['Alegreya_Sans:Italic'] italic leading-[normal] relative shrink-0 text-[24px] text-[rgba(0,15,40,0.45)] whitespace-nowrap">{subtitle}</p>
        </div>
      )}
      {children}
    </div>
  );
}

// The two top rules (short left one + long right one) at y=57.
export function TopRules() {
  return (
    <>
      <div className="absolute h-[2px] left-[364px] top-[57px] w-[1476px]" data-name="Regla lateral">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRule} />
      </div>
      <div className="absolute bg-[#000f28] h-[2px] left-[80px] top-[57px] w-[248px]" data-name="Regla lateral" />
    </>
  );
}

const imgTickH = "https://www.figma.com/api/mcp/asset/a0f30d06-94c0-4c91-bc39-a44c2951e94e.svg";
const imgTickV = "https://www.figma.com/api/mcp/asset/a1f22310-06ef-46e3-835f-7613014f60a8.svg";

function Tick({ cls, rotate, img }) {
  return (
    <div className={`absolute flex items-center justify-center ${cls}`}>
      <div className={`flex-none ${rotate}`}>
        <div className="h-0 relative w-[15px]">
          <div className="absolute inset-[-1px_0_0_0]">
            <img alt="" className="block max-w-none size-full" src={img} />
          </div>
        </div>
      </div>
    </div>
  );
}

// Line-height and letter-spacing glyphs shown beside the typography spec lists.
export function MeasureIcons() {
  return (
    <>
      <div className="absolute contents left-[57px] top-[394px]">
        <Tick cls="h-0 left-[57px] top-[394px] w-[15px]" rotate="rotate-180" img={imgTickH} />
        <Tick cls="h-0 left-[57px] top-[409px] w-[15px]" rotate="rotate-180" img={imgTickH} />
        <p className="[word-break:break-word] absolute font-['Alegreya_Sans:Medium'] leading-[16px] left-[60px] not-italic text-[14px] text-[rgba(0,15,40,0.45)] top-[394px] whitespace-nowrap">A</p>
      </div>
      <div className="absolute contents left-[57px] top-[347px]">
        <Tick cls="h-[15px] left-[57px] top-[348px] w-0" rotate="rotate-90" img={imgTickV} />
        <Tick cls="h-[15px] left-[72px] top-[348px] w-0" rotate="rotate-90" img={imgTickV} />
        <p className="[word-break:break-word] absolute font-['Alegreya_Sans:Medium'] leading-[16px] left-[61px] not-italic text-[10px] text-[rgba(0,15,40,0.45)] top-[347px] whitespace-nowrap">A</p>
      </div>
    </>
  );
}

// Typography spec list: [label, value] pairs separated by blank lines.
export function SpecList({ id, items }) {
  return (
    <div className="[word-break:break-word] absolute font-['Grot10:Light'] leading-[0] left-[80px] not-italic text-[#000f28] text-[0px] top-[249px] w-[248px] whitespace-pre-wrap" data-node-id={id}>
      {items.map(([k, v], i) => (
        <div key={k}>
          {i > 0 && <p className="leading-[16px] mb-0 text-[16px]">​</p>}
          <p className="mb-0 text-[16px]">
            <span className="font-['Alegreya_Sans:Medium'] leading-[16px] text-[#000f28]">{k}</span>
            <span className="font-['Alegreya_Sans:Regular'] leading-[16px]">{v}</span>
          </p>
        </div>
      ))}
    </div>
  );
}
