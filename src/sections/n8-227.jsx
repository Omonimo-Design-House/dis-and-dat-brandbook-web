const imgReglaLateral = "https://www.figma.com/api/mcp/asset/6cb79971-24ac-4d8f-b57a-fa39bd8f814d.svg";

export default function Component02Introduccion() {
  return (
    <div className="bg-[#ebeadc] relative size-full" data-node-id="8:227" data-name="02 · Introducción">
      <div className="[word-break:break-word] absolute content-stretch flex flex-col font-['Alegreya_Sans:Medium'] gap-px items-start leading-[normal] left-[79px] not-italic overflow-clip text-[15px] top-[72px] whitespace-nowrap" data-node-id="8:230" data-name="Meta">
        <p className="relative shrink-0 text-[#000f28]" data-node-id="8:231">
          Dis and Dat®
        </p>
        <p className="relative shrink-0 text-[rgba(0,15,40,0.45)]" data-node-id="8:232">
          Brand Guidelines
        </p>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-[362px] overflow-clip top-[72px]" data-node-id="8:233" data-name="Meta">
        <p className="[word-break:break-word] font-['Alegreya_Sans:Medium'] leading-[normal] not-italic relative shrink-0 text-[#000f28] text-[32px] whitespace-nowrap" data-node-id="8:234">
          Introducción
        </p>
      </div>
      <p className="[word-break:break-word] absolute font-['Baskervville:Regular'] font-normal h-[726px] leading-[132px] left-[361px] text-[#000f28] text-[128px] top-[224px] tracking-[-5.12px] w-[1400px]" data-node-id="8:249">{`Este manual documenta los elementos que conforman la identidad visual de Dis and Dat® y el criterio con el que deben aplicarse. `}</p>
      <div className="[word-break:break-word] absolute font-['Alegreya_Sans:Regular'] h-[92px] leading-[0] left-[366px] not-italic text-[32px] text-[rgba(0,15,40,0.45)] top-[1108px] w-[912px] whitespace-pre-wrap" data-node-id="8:251">
        <p className="leading-[19px] mb-0">{`Omónimo Design House `}</p>
        <p className="leading-[19px] mb-0">​</p>
        <p className="leading-[19px]">{`Medellín / Colombia -(2026)© `}</p>
      </div>
      <div className="absolute h-[2px] left-[364px] top-[57px] w-[1476px]" data-node-id="17:1357" data-name="Regla lateral">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgReglaLateral} />
      </div>
      <div className="absolute bg-[#000f28] h-[2px] left-[80px] top-[57px] w-[248px]" data-node-id="17:1358" data-name="Regla lateral" />
    </div>
  );
}
