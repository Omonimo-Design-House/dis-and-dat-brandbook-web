import { Panel, TopRules } from './_shared.jsx';

function Pair({ k, v, valueFont = "" }) {
  return (
    <>
      <span className="font-['Alegreya_Sans:Medium'] leading-[33px]">{k}:</span>
      <span className={`${valueFont} leading-[33px]`}>{v}</span>
    </>
  );
}

function Swatch({ id, name, cls, rgb, hex, cmyk, pantone }) {
  return (
    <div className={`${cls} border-[1.5px] border-solid content-stretch flex flex-col h-[699px] items-start justify-between overflow-clip pb-[30px] pt-[26px] px-[30px] relative rounded-[24px] shrink-0 w-[466px]`} data-node-id={id}>
      <p className="font-['Alegreya_Sans:Regular'] leading-[33px] relative shrink-0 whitespace-nowrap">{name}</p>
      <div className="content-stretch flex flex-col gap-[26px] items-start overflow-clip relative shrink-0 w-full" data-name="Specs">
        <div className="content-stretch flex flex-col font-['Alegreya_Sans:Regular'] gap-[2px] items-start overflow-clip relative shrink-0 w-full" data-name="Digital">
          <p className="[text-underline-position:from-font] decoration-from-font decoration-solid leading-[33px] relative shrink-0 underline whitespace-nowrap">Digital:</p>
          <p className="leading-[33px] relative shrink-0 whitespace-nowrap">{hex}</p>
          <p className="leading-[0] relative shrink-0 whitespace-pre">
            <Pair k="R" v={` ${rgb[0]}  `} /><Pair k="G" v={` ${rgb[1]}  `} /><Pair k="B" v={` ${rgb[2]}`} />
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0 w-full" data-name="Impresos">
          <p className="[text-underline-position:from-font] decoration-from-font decoration-solid font-['Alegreya_Sans:Regular'] leading-[33px] relative shrink-0 underline whitespace-nowrap">Impresos:</p>
          <p className="font-['Alegreya_Sans:Light'] leading-[0] relative shrink-0 whitespace-pre">
            <Pair k="C" v={` ${cmyk[0]}  `} valueFont="font-['Alegreya_Sans:Regular']" />
            <Pair k="M" v={` ${cmyk[1]}  `} valueFont="font-['Alegreya_Sans:Regular']" />
            <Pair k="Y" v={` ${cmyk[2]}  `} valueFont="font-['Alegreya_Sans:Regular']" />
            <Pair k="K" v={` ${cmyk[3]}`} valueFont="font-['Alegreya_Sans:Regular']" />
          </p>
          <p className="font-['Alegreya_Sans:Regular'] leading-[33px] relative shrink-0 whitespace-nowrap">{pantone}</p>
        </div>
      </div>
    </div>
  );
}

function Row({ id, top, children }) {
  return (
    <div className="absolute content-stretch flex flex-col h-[699px] items-start left-[364px] overflow-clip w-[1454px]" style={{ top }} data-node-id={id} data-name="Contenido">
      <div className="[word-break:break-word] content-stretch flex gap-[24px] h-[699px] items-start not-italic overflow-clip relative shrink-0 text-[25px] w-[1454px]" data-name="Swatches">
        {children}
      </div>
    </div>
  );
}

export default function Component29ColorPaletaPrincipal() {
  return (
    <div className="bg-white relative size-full" data-node-id="20:2771" data-name="29 - Color Paleta Principal">
      <Panel id="20:2776" h={1898} title="Color" subtitle="Paleta Principal">
        <TopRules />
      </Panel>
      <Row id="20:2809" top={230}>
        <Swatch id="20:2811" name="Sol Mañanero" cls="bg-[#f9cd3b] border-[#f9cd3b] text-[#000f28]" hex="#F9CD3B" rgb={[249, 205, 59]} cmyk={[6, 20, 86, 0]} pantone="PANTONE 121C" />
        <Swatch id="20:2820" name="Sal y Limón" cls="bg-[#d9e672] border-[#d9e672] text-[#000f28]" hex="#D9E672" rgb={[217, 230, 114]} cmyk={[22, 0, 69, 0]} pantone="PANTONE 2295C" />
        <Swatch id="20:2829" name="Montaña Arriba" cls="bg-[#766e2c] border-[#766e2c] text-[#ebeadc]" hex="#766E2C" rgb={[118, 110, 44]} cmyk={[43, 36, 96, 39]} pantone="PANTONE 5825C" />
      </Row>
      <Row id="20:2868" top={954}>
        <Swatch id="20:2870" name="Arrebol" cls="bg-[#f93800] border-[#f93800] text-[#000f28]" hex="#F93800" rgb={[249, 56, 0]} cmyk={[0, 87, 100, 0]} pantone="PANTONE ORANGE 021C" />
        <Swatch id="20:2879" name="Pergamino" cls="bg-[#ebeadc] border-[rgba(0,15,40,0.35)] text-[#000f28]" hex="#EBEADC" rgb={[235, 234, 220]} cmyk={[9, 7, 16, 0]} pantone="N/A" />
        <Swatch id="2012:390" name="Lapicero" cls="bg-[#000f28] border-[#000f28] text-[#ebeadc]" hex="#000F28" rgb={[0, 15, 40]} cmyk={[99, 64, 0, 91]} pantone="PANTONE 296C" />
      </Row>
    </div>
  );
}
