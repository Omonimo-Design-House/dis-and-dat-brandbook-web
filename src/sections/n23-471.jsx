// An off-frame draft (clipped above the page in Figma) and template placeholders are omitted.
import { Panel, TopRules } from './_shared.jsx';

const imgFoto = "https://www.figma.com/api/mcp/asset/b7003dd8-01f3-4c4a-982d-ec8d84f0de93.png";
const imgFoto1 = "https://www.figma.com/api/mcp/asset/39d1e032-2eda-4aa9-80d5-e400a84afacd.png";
const imgFoto2 = "https://www.figma.com/api/mcp/asset/8f93def8-1736-4d55-ac62-52d25c5e4fde.png";
const imgFoto3 = "https://www.figma.com/api/mcp/asset/6a3d659c-78db-4ac8-8c46-1a9ee47cf5c3.png";

function List({ id, left, title, items }) {
  return (
    <div className="[word-break:break-word] absolute font-['Alegreya_Sans:Regular'] leading-[0] not-italic text-[#000f28] text-[16px] top-[711px] w-[455px]" style={{ left }} data-node-id={id}>
      <p className="font-['Alegreya_Sans:Medium'] leading-[normal] mb-0">{title}</p>
      <ul style={{ listStyleType: "'-   '" }}>
        {items.map(t => (
          <li key={t} className="mb-0 ms-[24px]">
            <span className="leading-[normal]">{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Component31ColorizacionDeFotoYVideo() {
  return (
    <div className="bg-white relative size-full" data-node-id="23:471" data-name="31 - Colorización de foto y video">
      <Panel id="23:476" h={2269} title="Color" subtitle="Colorización de foto y video">
        <TopRules />
        <div className="[word-break:break-word] absolute font-['Alegreya_Sans:Regular'] leading-[0] left-[365px] not-italic text-[#000f28] text-[16px] top-[711px] w-[415px]" data-node-id="25:623">
          <p className="font-['Alegreya_Sans:Medium'] leading-[normal] mb-0">Especificaciones Técnicas</p>
          <p className="leading-[normal]">Luz natural en todas las piezas: sol que entra por las ventanas y deja sombras definidas de marcos y ramas sobre muros y pisos. Curva de contraste media con negros levantados; las sombras terminan en café cálido y las altas luces se mantienen suaves, sin quemar. Balance de blancos cálido, entre 4500 y 5200 K, con medios tonos en arena y lino. Saturación general reducida entre 10 y 20 %. Los verdes de las plantas se llevan hacia el oliva y los naranjas hacia la terracota. Grano fino y parejo en toda la pieza. En video se mantiene la misma curva, con movimientos de cámara lentos y planos que duran lo suficiente para ver cómo cambia la luz.</p>
        </div>
        <List id="2038:404" left={875} title="Lo que sí mostramos" items={[
          "Casas con rastros de vida.",
          "Materiales nobles que ya tienen uso, como la madera, el lino, el cuero, el barro y las paredes de estuco.",
          "Plantas de verdad dentro de la casa y la vegetación que se ve desde la ventana.",
          "Encuadres a la altura de los ojos, con muro o piso libre para que respire el logo.",
          "Personas de forma natural, de espaldas o en movimiento, en lo que harían un domingo cualquiera.",
        ]} />
        <List id="2038:405" left={1385} title="Lo que no queremos ver" items={[
          "Espacios de catálogo donde nada está fuera de lugar.",
          "HDR, gran angular exagerado y cielos reemplazados.",
          "Luz artificial fría o blancos que tiran a azul.",
          "Lujo de vitrina: champaña, dorados, mármol brillante y autos de alta gama posando frente a la casa.",
          "Gente mirando a cámara con sonrisa de banco de imágenes.",
          "Renders con acabado de plástico y filtros de moda en redes.",
        ]} />
      </Panel>
      <div className="absolute content-stretch flex gap-[20px] h-[433px] items-start left-[364px] overflow-clip top-[234px] w-[1478px]" data-node-id="23:601" data-name="Fotos">
        {[["23:602", imgFoto], ["23:604", imgFoto1], ["23:606", imgFoto2], ["23:608", imgFoto3]].map(([id, src]) => (
          <div key={id} className="flex-[1_0_0] h-[420px] min-w-px relative rounded-[24px]" data-node-id={id} data-name="FOTO">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={src} />
          </div>
        ))}
      </div>
      <div className="absolute bg-[rgba(0,15,40,0.45)] h-[2px] left-[81px] top-[237px] w-[247px]" data-node-id="23:620" data-name="Regla lateral" />
      <p className="[word-break:break-word] absolute font-['Alegreya_Sans:Regular'] leading-[normal] left-[83px] not-italic text-[#000f28] text-[15px] top-[257px] w-[240px]" data-node-id="23:621">
        Un mismo lugar puede sentirse completamente distinto según el tratamiento de color que reciba. Estas son las reglas que hacen que cualquier pieza visual se reconozca como parte de la marca.
      </p>
    </div>
  );
}
