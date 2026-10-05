import { Panel, TopRules } from './_shared.jsx';

const imgMonogramaDisAndDat = "https://www.figma.com/api/mcp/asset/fa909c5e-5e81-49b4-84a9-f20d6d99a3a7.svg";

function Corner({ left, top, textLeft, textTop }) {
  return (
    <>
      <div className="absolute bg-[rgba(217,217,217,0.5)] size-[55.705px]" style={{ left, top }} data-name="Rectangle" />
      <p className="[word-break:break-word] absolute font-['Alegreya_Sans:Medium'] leading-[normal] not-italic text-[#000f28] text-[13px] whitespace-nowrap" style={{ left: textLeft, top: textTop }}>
        25%
      </p>
    </>
  );
}

export default function Component19IsotipoClearspace() {
  return (
    <div className="bg-white relative size-full" data-node-id="17:1581" data-name="19-isotipo clearspace">
      <Panel id="17:1586" title="Isotipo" subtitle="Clear Space">
        <div className="absolute bg-[rgba(0,15,40,0.45)] h-[2px] left-[81px] top-[237px] w-[247px]" data-node-id="17:1595" data-name="Regla lateral" />
        <div className="[word-break:break-word] absolute font-['Alegreya_Sans:Regular'] leading-[0] left-[81px] not-italic text-[#000f28] text-[15px] top-[257px] w-[247px] whitespace-pre-wrap" data-node-id="17:1596">
          <p className="leading-[normal] mb-0">Al ser una forma más compacta que el logotipo completo, necesita menos aire a su alrededor para leerse con claridad. Por eso su clear space es más ajustado, sin perder el mismo principio: nada debe invadir ese margen.</p>
          <p className="leading-[normal] mb-0">​</p>
          <p className="leading-[normal]">Se calcula dejando un espacio vacío equivalente al 25% de su altura a cada lado.</p>
        </div>
        <p className="[word-break:break-word] absolute font-['Alegreya_Sans:Italic'] italic leading-[normal] left-[788.8px] text-[16px] text-[rgba(0,15,40,0.45)] top-[574.61px] w-[436px]" data-node-id="17:1597">
          Clear Space: 25% de la altura del monograma a cada lado
        </p>
        <TopRules />
      </Panel>
      <div className="absolute contents left-[788.8px] top-[216.39px]" data-node-id="2013:1139" data-name="Clear space monograma">
        <div className="absolute inset-[38.11%_34.14%_30.69%_43.98%]" data-node-id="2013:1125" data-name="Monograma Dis and Dat">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMonogramaDisAndDat} />
        </div>
        <div className="absolute border-[1.5px] border-solid border-white h-[334.228px] left-[788.8px] top-[216.39px] w-[531.409px]" data-node-id="2013:1129" data-name="Línea" />
        <div className="absolute border-[1.5px] border-solid border-white h-[222.819px] left-[844.5px] top-[272.09px] w-[420px]" data-node-id="2013:1130" data-name="Línea" />
        <Corner left={788.8} top={216.39} textLeft={805.15} textTop={236.24} />
        <Corner left={1264.5} top={216.39} textLeft={1280.85} textTop={236.24} />
        <Corner left={788.8} top={494.91} textLeft={805.15} textTop={514.76} />
        <Corner left={1264.5} top={494.91} textLeft={1280.85} textTop={514.76} />
      </div>
    </div>
  );
}
