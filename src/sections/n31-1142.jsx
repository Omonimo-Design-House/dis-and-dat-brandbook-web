import { Panel, TopRules } from './_shared.jsx';

const imgLine9 = "https://www.figma.com/api/mcp/asset/16a5e756-e774-4997-ba8d-e65f5ad3e902.svg";
const imgLine4 = "https://www.figma.com/api/mcp/asset/6f350856-ff75-41d4-a25a-7aaf18b1afab.svg";
const imgReglaLateral = "https://www.figma.com/api/mcp/asset/12d745c4-3953-4ac3-9793-5adfd84aa67c.svg";

function Strike({ id, left }) {
  return (
    <div className="absolute flex items-center justify-center size-[315px] top-[303px]" style={{ left }} data-node-id={id}>
      <div className="-rotate-45 flex-none">
        <div className="h-0 relative w-[445.477px]">
          <div className="absolute inset-[-2px_0_0_0]">
            <img alt="" className="block max-w-none size-full" src={imgLine4} />
          </div>
        </div>
      </div>
    </div>
  );
}

function WideStrike({ id, left }) {
  return (
    <div className="absolute flex h-[311px] items-center justify-center top-[849px] w-[692px]" style={{ left }} data-node-id={id}>
      <div className="flex-none rotate-[-24.2deg]">
        <div className="h-0 relative w-[758.673px]">
          <div className="absolute inset-[-2px_0_0_0]">
            <img alt="" className="block max-w-none size-full" src={imgLine9} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Note({ id, left, top, wrong, right }) {
  return (
    <div className="[word-break:break-word] absolute font-['Grot10:Medium'] h-[138px] leading-[0] not-italic text-[#000f28] text-[0px] w-[342px] whitespace-pre-wrap" style={{ left, top }} data-node-id={id}>
      <p className="font-['Alegreya_Sans:Medium'] leading-[normal] mb-0 text-[14px]">Incorrecto</p>
      <p className="font-['Alegreya_Sans:Regular'] leading-[normal] mb-0 text-[14px]">{wrong}</p>
      <p className="leading-[normal] mb-0 text-[14px]">​</p>
      <p className="font-['Alegreya_Sans:Medium'] leading-[normal] mb-0 text-[14px]">Correcto</p>
      <p className="font-['Alegreya_Sans:Regular'] leading-[normal] mb-0 text-[14px]">{right}</p>
    </div>
  );
}

function Label({ id, left, top, w = 130, children }) {
  return (
    <p className="[word-break:break-word] absolute font-['Alegreya_Sans:Medium'] leading-[normal] not-italic text-[#000f28] text-[10px]" style={{ left, top, width: w }} data-node-id={id}>
      {children}
    </p>
  );
}

export default function Component38TipografiaUsosIncorrectos() {
  return (
    <div className="bg-white relative size-full" data-node-id="31:1142" data-name="38 - Tipografía Usos Incorrectos">
      <Panel id="31:1147" h={1511} title="Tipografía" subtitle="Usos Incorrectos">
        <TopRules />
        <div className="absolute bg-[rgba(0,15,40,0.45)] h-[2px] left-[81px] top-[237px] w-[247px]" data-node-id="31:1158" data-name="Regla lateral" />
        <p className="[word-break:break-word] absolute font-['Alegreya_Sans:Regular'] leading-[normal] left-[88px] not-italic text-[#000f28] text-[15px] top-[257px] w-[231px]" data-node-id="31:1159">
          Estos son los errores más frecuentes al aplicar la tipografía de la marca, y por qué comprometen su lectura.
        </p>
        <div className="absolute bg-white left-[364px] rounded-[10px] size-[342px] top-[287px]" data-node-id="31:1160" />
        <div className="absolute bg-white h-[342px] left-[364px] rounded-[10px] top-[831px] w-[720px]" data-node-id="31:1216" />
        <Label id="31:1224" left={379} top={849} w={163}>Composiciones sin jerarquía visual o que se salgan de los lineamientos para cada tipo de texto.</Label>
        <div className="absolute bg-white h-[342px] left-[1120px] rounded-[10px] top-[831px] w-[720px]" data-node-id="31:1217" />
        <Label id="31:1231" left={1134} top={849} w={163}>Texto ilegible</Label>
        <WideStrike id="31:1228" left={1134} />
        <div className="absolute bg-white left-[742px] rounded-[10px] size-[342px] top-[287px]" data-node-id="31:1162" />
        <div className="absolute bg-white left-[1120px] rounded-[10px] size-[342px] top-[287px]" data-node-id="31:1163" />
        <div className="absolute bg-white left-[1498px] rounded-[10px] size-[342px] top-[287px]" data-node-id="31:1164" />
        <Label id="31:1175" left={379} top={303}>Mala partición de palabras</Label>
        <Label id="31:1178" left={758} top={303} w={168}>Sustituir por una tipografía similar</Label>
        <Label id="31:1179" left={1134} top={303}>Alterar el tracking e interletrado fuera del margen permitido</Label>
        <Label id="31:1180" left={1512} top={303}>Aplicar efectos no autorizados</Label>
        <Strike id="31:1181" left={379} />
        <WideStrike id="31:1223" left={379} />
        <Strike id="31:1183" left={756} />
        <Strike id="31:1185" left={1134} />
        <Strike id="31:1186" left={1510} />
        <p className="[word-break:break-word] absolute font-['Alegreya_Sans:Medium'] leading-[normal] left-[440px] not-italic text-[#000f28] text-[32px] top-[404px] w-[191px]" data-node-id="31:1210">
          INTERNATIONAL REAL ESTATE
        </p>
        <p className="[word-break:break-word] absolute font-['Alegreya_Sans:Medium'] leading-[normal] left-[473px] not-italic text-[#000f28] text-[32px] top-[941px] w-[502px]" data-node-id="31:1220">
          INTERNATIONAL REAL ESTATE
        </p>
        <p className="[word-break:break-word] absolute font-['Alegreya_Sans:Medium'] leading-[normal] left-[473px] not-italic text-[#000f28] text-[32px] top-[991px] w-[502px]" data-node-id="31:1221">{`DIS AND DAT `}</p>
        <p className="[word-break:break-word] absolute font-['Alegreya_Sans:Medium'] leading-[normal] left-[473px] not-italic text-[#000f28] text-[32px] top-[1041px] w-[502px]" data-node-id="31:1222">
          Medellín Colombia
        </p>
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['PP_Gosha_Sans:Regular'] h-[48px] leading-[normal] left-[912.5px] not-italic text-[#000f28] text-[20px] text-center top-[441px] w-[197px]" data-node-id="31:1211">
          INTERNATIONAL REAL ESTATE
        </p>
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Alegreya_Sans:Regular'] h-[48px] leading-[normal] left-[1472.5px] not-italic text-[#000f28] text-[5px] text-center top-[1002px] w-[197px]" data-node-id="31:1227">
          INTERNATIONAL REAL ESTATE
        </p>
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Baskervville:Regular'] font-normal h-[48px] leading-[normal] left-[1669.5px] text-[#000f28] text-[20px] text-center text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] top-[441px] w-[197px]" data-node-id="31:1215">
          INTERNATIONAL REAL ESTATE
        </p>
        <div className="-translate-x-1/2 [word-break:break-word] absolute font-['Baskervville:Regular'] font-normal h-[95px] leading-[0] left-[1290.5px] text-[#000f28] text-[20px] text-center top-[441px] tracking-[-2.4px] w-[197px] whitespace-pre-wrap" data-node-id="31:1213">
          <p className="leading-[1.347] mb-0">{`INTERNATIONAL `}</p>
          <p className="leading-[1.347] mb-0">​</p>
          <p className="leading-[1.347]">REAL ESTATE</p>
        </div>
      </Panel>
      {[364, 742, 1120, 1498].map(left => (
        <div key={left} className="absolute h-[2px] top-[237px] w-[342px]" style={{ left }} data-name="Regla lateral">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgReglaLateral} />
        </div>
      ))}
      <Note id="31:1191" left={363} top={668} wrong={<>Cortar una palabra a la mitad entre líneas dificulta la lectura y se ve descuidado.<br aria-hidden /><br aria-hidden /></>} right="Partir siempre por palabra completa, nunca a mitad de una." />
      <Note id="31:1218" left={363} top={1201} wrong="Dar el mismo peso a título, nombre y ubicación elimina la jerarquía y confunde la lectura." right="Respetar los tres niveles definidos —título, subtítulo, texto corrido— y su diferencia de peso." />
      <Note id="31:1219" left={1121} top={1201} wrong="Reducir el texto por debajo de un tamaño legible vuelve la información inutilizable." right="Respetar el tamaño mínimo de lectura en cada aplicación." />
      <Note id="31:1192" left={742} top={668} wrong={`Usar una tipografía "parecida" cuando la oficial no está disponible diluye el carácter de la marca.`} right="Usar siempre las tipografías oficiales: Baskervville y Alegreya Sans." />
      <Note id="31:1193" left={1121} top={668} wrong="Forzar el espaciado entre letras más allá de lo definido rompe el ritmo del texto." right="Mantener el tracking dentro de los valores definidos para cada nivel tipográfico." />
      <Note id="31:1194" left={1498} top={668} wrong="Sombras, contornos o cualquier efecto decorativo no pertenecen al sistema tipográfico de la marca." right="Usar el texto siempre plano, sin efectos añadidos." />
    </div>
  );
}
