// Template placeholder layers hidden under the cream panel in Figma are omitted.
const imgRectangle11 = "https://www.figma.com/api/mcp/asset/9ee947e0-16b7-4273-99fc-9d16e5473124.png";
const imgLogoDisAndDat = "https://www.figma.com/api/mcp/asset/41989a89-39a5-446e-8303-69309ae87e59.svg";
const imgLogoDisAndDat1 = "https://www.figma.com/api/mcp/asset/4f187cbb-8c1e-4240-a8c3-59330c59718e.svg";
const imgLogoDisAndDat2 = "https://www.figma.com/api/mcp/asset/13bb0326-74d7-43bf-ab8d-f7f6fe3fef42.svg";
const imgLogoDisAndDat3 = "https://www.figma.com/api/mcp/asset/8bb9bae1-e6b3-4afb-bb88-af7ea1c879dd.svg";
const imgLogoDisAndDat4 = "https://www.figma.com/api/mcp/asset/9c81e12b-c9ae-46fd-9e7d-1d49d278d8ea.svg";
const imgLogoDisAndDat5 = "https://www.figma.com/api/mcp/asset/f405f2d1-38db-4c0e-970e-52a9b63f5969.svg";
const imgLine4 = "https://www.figma.com/api/mcp/asset/4f5cb16f-9125-49a7-a969-901aaedfb701.svg";
const imgLine8 = "https://www.figma.com/api/mcp/asset/11213638-530a-4d51-9a5b-c1feae4fbf43.svg";
const imgReglaLateral = "https://www.figma.com/api/mcp/asset/8f2efafc-bcce-4eec-95ac-b7c2bb40ac35.svg";

function Note({ id, left, top, wrong, right }) {
  return (
    <div className={`[word-break:break-word] absolute font-['Grot10:Medium'] h-[138px] leading-[0] not-italic text-[#000f28] text-[0px] w-[342px] whitespace-pre-wrap`} style={{ left, top }} data-node-id={id}>
      <p className="font-['Alegreya_Sans:Medium'] leading-[normal] mb-0 text-[14px]">Incorrecto</p>
      <p className="font-['Alegreya_Sans:Regular'] leading-[normal] mb-0 text-[14px]">{wrong}</p>
      <p className="leading-[normal] mb-0 text-[14px]">​</p>
      <p className="font-['Alegreya_Sans:Medium'] leading-[normal] mb-0 text-[14px]">Correcto</p>
      <p className="font-['Alegreya_Sans:Regular'] leading-[normal] mb-0 text-[14px]">{right}</p>
    </div>
  );
}

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

export default function Component16LogotipoUsosIncorrectos() {
  return (
    <div className="bg-white relative size-full" data-node-id="15:927" data-name="16-Logotipo usos incorrectos">
      <div className="absolute bg-[#ebeadc] h-[1511px] left-0 overflow-clip top-0 w-[1920px]" data-node-id="15:932" data-name="06-Personalidad">
        <div className="absolute h-[200px] left-0 top-0 w-[1920px]" data-node-id="15:933" data-name="Chrome / Encabezado" />
        <div className="absolute bg-[#000f28] h-[2px] left-[81px] top-[57px] w-[247px]" data-node-id="15:934" data-name="Regla lateral" />
        <div className="absolute bg-[#000f28] h-[2px] left-[364px] top-[57px] w-[1476px]" data-node-id="15:935" data-name="Regla lateral" />
        <div className="[word-break:break-word] absolute content-stretch flex flex-col font-['Alegreya_Sans:Medium'] gap-px items-start leading-[normal] left-[81px] not-italic overflow-clip text-[15px] top-[72px] whitespace-nowrap" data-node-id="15:936" data-name="Meta">
          <p className="relative shrink-0 text-[#000f28]" data-node-id="15:937">
            Dis and Dat®
          </p>
          <p className="relative shrink-0 text-[rgba(0,15,40,0.45)]" data-node-id="15:938">
            Brand Guidelines
          </p>
        </div>
        <div className="absolute content-stretch flex flex-col items-start left-[365px] overflow-clip top-[72px]" data-node-id="15:939" data-name="Meta">
          <p className="[word-break:break-word] font-['Alegreya_Sans:Medium'] leading-[normal] not-italic relative shrink-0 text-[#000f28] text-[32px] whitespace-nowrap" data-node-id="15:940">
            Logotipo
          </p>
        </div>
        <div className="absolute content-stretch flex flex-col items-start left-[365px] overflow-clip top-[116px]" data-node-id="15:941" data-name="Meta">
          <p className="[word-break:break-word] font-['Alegreya_Sans:Italic'] italic leading-[normal] relative shrink-0 text-[24px] text-[rgba(0,15,40,0.45)] whitespace-nowrap" data-node-id="15:942">
            Usos Incorrectos
          </p>
        </div>
        <div className="absolute bg-white left-[364px] rounded-[10px] size-[342px] top-[287px]" data-node-id="17:1424" />
        <div className="absolute bg-[#16233a] left-[364px] rounded-[10px] size-[342px] top-[857px]" data-node-id="17:1437" />
        <div className="absolute bg-white left-[742px] rounded-[10px] size-[342px] top-[287px]" data-node-id="17:1425" />
        <div className="absolute left-[742px] rounded-[10px] size-[342px] top-[857px]" data-node-id="17:1438">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgRectangle11} />
        </div>
        <div className="absolute bg-white left-[1120px] rounded-[10px] size-[342px] top-[287px]" data-node-id="17:1426" />
        <div className="absolute bg-white left-[1498px] rounded-[10px] size-[342px] top-[287px]" data-node-id="17:1427" />
        <div className="absolute inset-[31%_71.05%_68.86%_26.78%]" data-node-id="2013:555" data-name="Logo Dis and Dat">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogoDisAndDat} />
        </div>
        <div className="absolute inset-[67.97%_65.32%_31.18%_20.99%]" data-node-id="2013:566" data-name="Logo Dis and Dat">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogoDisAndDat1} />
        </div>
        <div className="absolute inset-[67.79%_45.94%_31.4%_40.99%]" data-node-id="2013:577" data-name="Logo Dis and Dat">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogoDisAndDat2} />
        </div>
        <div className="absolute inset-[30.9%_7.67%_68.43%_81.47%]" data-node-id="2013:588" data-name="Logo Dis and Dat">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogoDisAndDat3} />
        </div>
        <p className="[word-break:break-word] absolute font-['Alegreya_Sans:Medium'] leading-[normal] left-[379px] not-italic text-[#000f28] text-[10px] top-[303px] w-[130px]" data-node-id="18:2201">
          Usar a escala muy pequeña
        </p>
        <p className="[word-break:break-word] absolute font-['Alegreya_Sans:Medium'] leading-[normal] left-[379px] not-italic text-[#ebeadc] text-[10px] top-[871px] w-[130px]" data-node-id="18:2205">
          Poco contraste
        </p>
        <p className="[word-break:break-word] absolute font-['Alegreya_Sans:Medium'] leading-[normal] left-[756px] not-italic text-[#ebeadc] text-[10px] top-[871px] w-[130px]" data-node-id="18:2206">
          Imágenes muy pesadas
        </p>
        <p className="[word-break:break-word] absolute font-['Alegreya_Sans:Medium'] leading-[normal] left-[758px] not-italic text-[#000f28] text-[10px] top-[303px] w-[130px]" data-node-id="18:2202">
          Rotar 45°
        </p>
        <p className="[word-break:break-word] absolute font-['Alegreya_Sans:Medium'] leading-[normal] left-[1134px] not-italic text-[#000f28] text-[10px] top-[303px] w-[130px]" data-node-id="18:2203">
          Distorsionar
        </p>
        <p className="[word-break:break-word] absolute font-['Alegreya_Sans:Medium'] leading-[normal] left-[1512px] not-italic text-[#000f28] text-[10px] top-[303px] w-[130px]" data-node-id="18:2204">
          Cambiar color
        </p>
        <div className="absolute inset-[29.82%_27.35%_67.41%_62.24%]" data-node-id="2013:599" data-name="Logo Dis and Dat">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogoDisAndDat4} />
        </div>
        <div className="absolute flex inset-[26.04%_46.95%_65.46%_42.06%] items-center justify-center" data-node-id="2013:610" style={{ containerType: "size" }}>
          <div className="-rotate-30 flex-none h-[hypot(2.74048cqw,7.79424cqh)] w-[hypot(97.2595cqw,-92.2058cqh)]">
            <div className="relative size-full" data-name="Logo Dis and Dat">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogoDisAndDat5} />
            </div>
          </div>
        </div>
        <Strike id="17:2195" left={379} top={303} img={imgLine4} />
        <Strike id="17:2199" left={379} top={871} img={imgLine8} />
        <Strike id="17:2196" left={756} top={303} img={imgLine4} />
        <Strike id="17:2200" left={756} top={871} img={imgLine8} />
        <Strike id="17:2197" left={1134} top={303} img={imgLine4} />
        <Strike id="17:2198" left={1510} top={303} img={imgLine4} />
      </div>
      <div className="absolute h-[2px] left-[364px] top-[237px] w-[342px]" data-node-id="17:1419" data-name="Regla lateral">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgReglaLateral} />
      </div>
      <div className="absolute h-[2px] left-[742px] top-[237px] w-[342px]" data-node-id="17:1421" data-name="Regla lateral">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgReglaLateral} />
      </div>
      <div className="absolute h-[2px] left-[1120px] top-[237px] w-[342px]" data-node-id="17:1422" data-name="Regla lateral">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgReglaLateral} />
      </div>
      <div className="absolute h-[2px] left-[1498px] top-[237px] w-[342px]" data-node-id="17:1423" data-name="Regla lateral">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgReglaLateral} />
      </div>
      <Note id="17:1428" left={363} top={668} wrong="Por debajo del tamaño mínimo, los detalles se pierden y el logo deja de leerse con claridad." right="Respetar siempre el tamaño mínimo. Si el espacio no alcanza, usar el monograma." />
      <Note id="17:1433" left={363} top={1238} wrong="Sobre fondos de tono similar, el logo pierde presencia y legibilidad." right="Ubicarlo siempre sobre un fondo con contraste suficiente." />
      <Note id="17:1430" left={742} top={668} wrong="El logo nunca gira en ningún ángulo que no sea 90° ." right="Siempre en posición horizontal o vertical hacia arriba (“ver página orientación”)" />
      <Note id="17:1434" left={742} top={1238} wrong="Sobre fotografías cargadas de elementos, el logo compite y se diluye." right="Colocarlo en una zona limpia de la imagen o sobre un fondo sólido." />
      <Note id="17:1431" left={1121} top={668} wrong="Estirar o comprimir el logo altera sus proporciones y su carácter." right="Escalar siempre de forma proporcional, nunca solo en ancho o solo en alto." />
      <Note id="17:1432" left={1498} top={668} wrong="El logo no se adapta a colores fuera de la paleta de marca." right="Usar únicamente los colores oficiales definidos en este manual." />
      <div className="absolute bg-[rgba(0,15,40,0.45)] h-[2px] left-[80px] top-[237px] w-[248px]" data-node-id="37:1361" data-name="Regla lateral" />
      <p className="[word-break:break-word] absolute font-['Alegreya_Sans:Regular'] h-[281px] leading-[normal] left-[81px] not-italic text-[#000f28] text-[15px] top-[257px] w-[247px]" data-node-id="37:1362">
        Errores frecuentes que comprometen la legibilidad y el reconocimiento del logo.
      </p>
    </div>
  );
}
