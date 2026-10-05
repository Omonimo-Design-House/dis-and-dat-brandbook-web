import { Panel, TopRules } from './_shared.jsx';

const imgRectangle9 = "https://www.figma.com/api/mcp/asset/b6526211-00a1-4f69-8b73-ffe98a7640d7.png";
const imgCirculo = "https://www.figma.com/api/mcp/asset/7b61cbc7-1820-42cd-b086-31fcf1d108e7.svg";
const imgCirculo1 = "https://www.figma.com/api/mcp/asset/dccbcc4a-f5d3-44ef-9ffa-412cc1b742d4.svg";
const imgCirculo2 = "https://www.figma.com/api/mcp/asset/e489a5d4-e9cd-4883-a722-a5d10646c6c5.svg";
const imgCirculo3 = "https://www.figma.com/api/mcp/asset/28164636-c3cc-4ebb-9d50-76256f97a4cc.svg";
const imgLogoDisAndDat = "https://www.figma.com/api/mcp/asset/cde12903-26c0-47da-a418-ac2089266975.svg";
const imgLine4 = "https://www.figma.com/api/mcp/asset/3fd28aa7-e386-4c59-bdb2-e8a242a4313b.svg";
const imgLine8 = "https://www.figma.com/api/mcp/asset/fd515b33-f3ed-439f-9732-92ba32ebffa7.svg";
const imgLine6 = "https://www.figma.com/api/mcp/asset/ffd75239-07de-4708-b99a-19a14d86037e.svg";
const imgReglaLateral = "https://www.figma.com/api/mcp/asset/b2346f2b-37e8-407e-a6f8-2d8539169b31.svg";

function Strike({ id, left, top, img }) {
  return (
    <div className="absolute flex items-center justify-center size-[315px]" style={{ left, top }} data-node-id={id}>
      <div className="-rotate-45 flex-none">
        <div className="h-0 relative w-[445.477px]">
          <div className="absolute inset-[-2px_0_0_0]">
            <img alt="" className="block max-w-none size-full" src={img} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Note({ id, left, wrong, right }) {
  return (
    <div className="[word-break:break-word] absolute font-['Grot10:Medium'] h-[138px] leading-[0] not-italic text-[#000f28] text-[0px] top-[668px] w-[342px] whitespace-pre-wrap" style={{ left }} data-node-id={id}>
      <p className="font-['Alegreya_Sans:Medium'] leading-[normal] mb-0 text-[14px]">Incorrecto</p>
      <p className="font-['Alegreya_Sans:Regular'] leading-[normal] mb-0 text-[14px]">{wrong}</p>
      <p className="leading-[normal] mb-0 text-[14px]">​</p>
      <p className="font-['Alegreya_Sans:Medium'] leading-[normal] mb-0 text-[14px]">Correcto</p>
      <p className="font-['Alegreya_Sans:Regular'] leading-[normal] mb-0 text-[14px]">{right}</p>
    </div>
  );
}

function Label({ id, left, light, children }) {
  return (
    <p className={`[word-break:break-word] absolute font-['Alegreya_Sans:Medium'] leading-[normal] not-italic ${light ? 'text-[#ebeadc]' : 'text-[#000f28]'} text-[10px] top-[303px] w-[130px]`} style={{ left }} data-node-id={id}>
      {children}
    </p>
  );
}

export default function Component32ColorUsosIncorrectos() {
  return (
    <div className="bg-white relative size-full" data-node-id="31:1034" data-name="32- Color usos incorrectos">
      <Panel id="31:1039" h={1511} title="Color" subtitle="Usos Incorrectos">
        <TopRules />
        <div className="absolute bg-[rgba(0,15,40,0.45)] h-[2px] left-[81px] top-[237px] w-[247px]" data-node-id="31:1050" data-name="Regla lateral" />
        <p className="[word-break:break-word] absolute font-['Alegreya_Sans:Regular'] leading-[normal] left-[88px] not-italic text-[#000f28] text-[15px] top-[257px] w-[231px]" data-node-id="31:1051">
          El color también tiene sus límites: estas son las combinaciones y aplicaciones que rompen la identidad de la marca.
        </p>
        <div className="absolute bg-[#f93800] left-[364px] rounded-[10px] size-[342px] top-[287px]" data-node-id="31:1052" />
        <div className="absolute left-[471px] size-[130px] top-[393px]" data-node-id="31:1137" data-name="Círculo">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCirculo} />
        </div>
        <div className="absolute bg-[#f9cd3b] left-[742px] rounded-[10px] size-[342px] top-[287px]" data-node-id="31:1054" />
        <div className="absolute bg-[#000f28] left-[1120px] rounded-[10px] size-[342px] top-[287px]" data-node-id="31:1056" />
        <div className="absolute left-[1498px] rounded-[10px] size-[342px] top-[287px]" data-node-id="31:1057">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgRectangle9} />
        </div>
        <div className="absolute left-[848px] size-[130px] top-[393px]" data-node-id="31:1139" data-name="Círculo">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCirculo1} />
        </div>
        <div className="absolute left-[1226px] size-[130px] top-[393px]" data-node-id="31:1140" data-name="Círculo">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCirculo2} />
        </div>
        <div className="absolute left-[1610px] size-[130px] top-[393px]" data-node-id="31:1141" data-name="Círculo">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCirculo3} />
        </div>
        <div className="absolute inset-[67.79%_45.94%_31.4%_40.99%]" data-node-id="2013:632" data-name="Logo Dis and Dat">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogoDisAndDat} />
        </div>
        <Label id="31:1086" left={379}>Armonia de color equivocada</Label>
        <Label id="31:1089" left={758}>Poco Contraste</Label>
        <Label id="31:1090" left={1134} light>Color sobre Lapicero</Label>
        <Label id="31:1091" left={1512} light>Color sobre fotografía</Label>
        <Strike id="31:1106" left={379} top={303} img={imgLine4} />
        <Strike id="31:1108" left={756} top={303} img={imgLine4} />
        <Strike id="31:1110" left={1134} top={303} img={imgLine6} />
        <Strike id="31:1111" left={1510} top={303} img={imgLine8} />
      </Panel>
      {[364, 742, 1120, 1498].map(left => (
        <div key={left} className="absolute h-[2px] top-[237px] w-[342px]" style={{ left }} data-name="Regla lateral">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgReglaLateral} />
        </div>
      ))}
      <Note id="31:1116" left={363} wrong="Combinar colores de la paleta sin seguir las armonías ya definidas rompe la coherencia visual de la marca." right="Usar únicamente las combinaciones validadas en la sección de Armonías de Color." />
      <Note id="31:1118" left={742} wrong="Cuando el acento y el fondo tienen valores muy similares, el color pierde su función y se vuelve invisible." right="Elegir combinaciones con contraste suficiente para que el acento se distinga con claridad." />
      <Note id="31:1120" left={1121} wrong="El Lapicero debe usarse solo con Pergamino, pues los otros colores no generan confianza." right="Usar únicamente las combinaciones validadas en la sección de Armonías de Color." />
      <Note id="31:1121" left={1498} wrong="Un color sólido puesto directamente sobre una fotografía compite con la imagen y pierde su propia identidad." right="Aplicar el color sobre áreas limpias de la imagen, o dejar que la fotografía hable sola." />
    </div>
  );
}
