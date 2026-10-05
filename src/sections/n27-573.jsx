import { Panel, TopRules, MeasureIcons, SpecList } from './_shared.jsx';

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula, ligula nec fermentum varius, mi neque eleifend odio, nec dictum massa diam id diam. In id facilisis felis. Fusce ut velit nec justo varius consequat. Suspendisse eu metus.";

export default function Component36TipografiaTextoCorrido() {
  return (
    <div className="bg-[#ebeadc] relative size-full" data-node-id="27:573" data-name="36 - Tipografía Texto Corrido">
      <Panel id="27:574" h={629} title="Tipografía" subtitle="Texto Corrido">
        <div className="absolute bg-[rgba(0,15,40,0.45)] h-[2px] left-[81px] top-[229px] w-[248px]" data-node-id="27:582" data-name="Regla lateral" />
        <MeasureIcons />
        <TopRules />
        <p className="[word-break:break-word] absolute font-['Alegreya_Sans:Regular'] leading-[28px] left-[1119px] not-italic text-[#000f28] text-[24px] top-[243px] w-[436px]" data-node-id="27:650">{lorem}</p>
        <p className="[word-break:break-word] absolute font-['Alegreya_Sans:Regular'] leading-[28px] left-[649px] not-italic text-[#000f28] text-[24px] top-[251px] w-[434px]" data-node-id="27:649">{lorem}</p>
        <SpecList id="27:652" items={[
          ["Familia:", " Alegreya Sans"],
          ["Peso:", " Regular"],
          ["Caja:", " Tipo Oración"],
          ["Margen de espaciado entre letras:", " -25 / +25"],
          ["Altura entre líneas:", " Igual o hasta 4 puntos más que el puntaje de la tipografía."],
        ]} />
      </Panel>
    </div>
  );
}
