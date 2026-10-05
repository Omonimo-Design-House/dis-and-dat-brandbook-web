import { Panel, TopRules, MeasureIcons, SpecList } from './_shared.jsx';

export default function Component35TipografiaSubtitulos() {
  return (
    <div className="bg-[#ebeadc] relative size-full" data-node-id="27:597" data-name="35-Tipografía Subtitulos">
      <Panel id="27:598" h={539} title="Tipografía" subtitle="Subtítulos">
        <div className="absolute bg-[rgba(0,15,40,0.45)] h-[2px] left-[81px] top-[229px] w-[248px]" data-node-id="27:606" data-name="Regla lateral" />
        <MeasureIcons />
        <SpecList id="27:626" items={[
          ["Familia:", " Alegreya Sans"],
          ["Peso:", " Regular Medium"],
          ["Caja:", " Alta"],
          ["Margen de espaciado entre letras:", " +100 / +200"],
          ["Altura entre líneas:", " Igual o hasta 4 puntos más que el puntaje de la tipografía."],
        ]} />
        <div className="absolute content-stretch flex flex-col items-start left-[366px] overflow-clip top-[279px] w-[1470px]" data-node-id="27:628" data-name="Contenido">
          <p className="[word-break:break-word] font-['Alegreya_Sans:Medium'] leading-[96px] not-italic relative shrink-0 text-[#000f28] text-[96px] text-center tracking-[26.88px] uppercase w-[1470px]" data-node-id="27:629">
            ALEGREYA SANS
          </p>
        </div>
        <TopRules />
      </Panel>
    </div>
  );
}
