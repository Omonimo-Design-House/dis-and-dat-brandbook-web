import { TopRules } from './_shared.jsx';

export default function Component06DescargarPdf() {
  return (
    <div className="bg-[#ebeadc] relative size-full" data-node-id="30:867" data-name="06-Personalidad">
      <div className="[word-break:break-word] absolute content-stretch flex flex-col font-['Alegreya_Sans:Medium'] gap-px items-start leading-[normal] left-[81px] not-italic overflow-clip text-[15px] top-[72px] whitespace-nowrap" data-node-id="30:869" data-name="Meta">
        <p className="relative shrink-0 text-[#000f28]" data-node-id="30:870">
          Dis and Dat®
        </p>
        <p className="relative shrink-0 text-[rgba(0,15,40,0.45)]" data-node-id="30:871">
          Brand Guidelines
        </p>
      </div>
      <div className="absolute content-stretch flex flex-col h-[562px] items-start left-[92px] overflow-clip top-[181px] w-[1748px]" data-node-id="30:872" data-name="Meta">
        <p className="[word-break:break-word] font-['Baskervville:Regular'] font-normal leading-[177px] relative shrink-0 text-[#000f28] text-[158px] w-full" data-node-id="30:873">{`Para descargar la versión PDF de este manual, haz clic en el botón `}</p>
      </div>
      <TopRules />
      <div className="absolute content-stretch drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] flex items-center justify-center left-[1206px] p-[25px] rounded-[37px] top-[610px]" data-node-id="41:477">
        <a className="[word-break:break-word] block font-['Alegreya_Sans:Medium'] leading-[0] not-italic relative shrink-0 text-[#000f28] text-[16px] tracking-[4.16px] uppercase whitespace-nowrap" href="https://drive.google.com/drive/folders/1b-VdOg4zEBGEI5WMku-qgJBc0TLL8PTQ?usp=drive_link" data-node-id="41:478" target="_blank">
          <p className="[text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-[normal] underline">descargar EN PDF</p>
        </a>
      </div>
    </div>
  );
}
