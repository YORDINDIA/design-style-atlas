import type { ReactNode } from "react";
import type { StyleMeta, StylePreviewTokens } from "../../lib/styles";
import { Frame, Meta } from "./frame";

// Original vector studies. All visible colors come from the active preview theme.
function Scene({ slug, p }: { slug: string; p: StylePreviewTokens }): ReactNode {
  const { bg, surface, ink, muted, accent, accent2 } = p;
  const dots = (count: number, x0: number, y0: number, dx: number, dy: number, color = ink) =>
    Array.from({ length: count }, (_, i) => <circle key={i} cx={x0 + (i % dx) * dy} cy={y0 + Math.floor(i / dx) * dy} r={i % 5 === 0 ? 1.6 : 0.9} fill={color} opacity={0.28 + (i % 4) * 0.14} />);
  switch (slug) {
    case "paper-cut-diorama": return <>
      <rect x="30" y="14" width="260" height="192" rx="8" fill={ink} opacity=".14"/><rect x="25" y="9" width="260" height="192" rx="8" fill={surface} stroke={ink} strokeWidth="4"/>
      <path d="M36 178V22h238v156Z" fill={accent2}/><circle cx="220" cy="53" r="25" fill={surface}/>
      <path d="M36 134Q100 46 167 115T274 104V178H36Z" fill={muted} style={{filter:`drop-shadow(0px 4px 3px ${ink}66)`}}/>
      <path d="M36 160Q104 83 166 146T274 118V178H36Z" fill={accent} style={{filter:`drop-shadow(0px 5px 4px ${ink}66)`}}/>
      <path d="M36 178Q86 128 132 170T218 154T274 148V178Z" fill={bg} style={{filter:`drop-shadow(0px 5px 4px ${ink}66)`}}/>
      <path d="M61 166l11-40 11 40m-5-12 11-31 11 43m135-6 11-36 11 36" fill="none" stroke={ink} strokeWidth="4" strokeLinejoin="round"/>
    </>;
    case "origami-geometry": return <>
      <polygon points="26,169 138,128 83,80 159,107 205,32 206,118 282,150 192,144 139,189 139,145" fill={accent} stroke={ink} strokeWidth="2"/>
      <polygon points="83,80 159,107 138,128" fill={surface}/><polygon points="159,107 205,32 206,118" fill={accent2}/><polygon points="138,128 206,118 192,144 139,189" fill={muted} opacity=".6"/>
      <path d="M26 169 138 128 159 107 205 32M138 128l1 61m0-44 53-1 90 6" fill="none" stroke={ink} strokeWidth="1.7" opacity=".8"/>
      <circle cx="186" cy="94" r="3" fill={ink}/>
    </>;
    case "kirigami-pop-up": return <>
      <path d="M23 161 151 109 298 163 161 203Z" fill={surface} stroke={ink} strokeWidth="2"/>
      <path d="M151 109V48l28-18v93l-28 16Z" fill={accent} stroke={ink} strokeWidth="2"/>
      <path d="M179 30 223 48v94l-44-19Z" fill={accent2} stroke={ink} strokeWidth="2"/>
      <path d="M91 137V78l32-15v60l28 16-28 15Z" fill={bg} stroke={ink} strokeWidth="2"/>
      <path d="M123 63 151 48v91l-28-16Z" fill={accent} stroke={ink} strokeWidth="2"/>
      <path d="M23 161 151 109m10 94V139m19-16 118 40" fill="none" stroke={muted} strokeWidth="1.5" strokeDasharray="5 4"/>
    </>;
    case "paper-quilling": return <>
      {[68,54,40,26,12].map((r,i)=><circle key={r} cx="160" cy="111" r={r} fill="none" stroke={i%2?accent2:accent} strokeWidth="6" opacity=".9"/>)}
      <path d="M160 99C131 67 108 47 85 65s8 51 28 30c14-14-1-32-13-20m68 37c17-39 50-60 67-39 18 21-9 40-20 23-7-11 8-24 15-14M157 114c-2 51-31 73-50 58-17-13 3-34 16-25" fill="none" stroke={accent2} strokeWidth="7" strokeLinecap="round"/>
      <path d="M160 99C131 67 108 47 85 65m83 47c17-39 50-60 67-39" fill="none" stroke={surface} strokeWidth="1.5" opacity=".7"/>
    </>;
    case "paper-marbling": return <>
      <rect x="18" y="14" width="284" height="190" fill={surface}/>
      {[0,1,2,3,4,5,6,7,8].map(i=><path key={i} d={`M${-10+i*19} 13 C${94+i*8} 48,${29+i*24} 61,${140+i*10} 89 S${275-i*14} 120,${123+i*18} 206`} fill="none" stroke={i%3===0?accent2:i%2?accent:muted} strokeWidth={i%3===0?7:3} opacity=".7"/>)}
      <path d="M105 81c48-31 114-20 122 22 7 38-58 45-68 13-8-25 40-30 45-8" fill="none" stroke={accent} strokeWidth="8" opacity=".8"/>
      <path d="M103 85c51-31 113-17 118 18 4 27-50 36-57 12" fill="none" stroke={surface} strokeWidth="2"/>
    </>;
    case "felt-applique": return <>
      <rect x="39" y="23" width="242" height="176" rx="12" fill={surface} stroke={muted} strokeWidth="2" strokeDasharray="4 3"/>
      <path d="M70 153Q45 105 87 91 107 53 153 75 196 55 210 91 260 99 237 148 198 181 153 165 105 185 70 153Z" fill={accent2} stroke={ink} strokeWidth="1" strokeDasharray="2 3"/>
      <path d="M94 133c-8-28 17-43 42-33 10-26 47-19 52 7 27-6 44 19 28 38-31 20-87 17-122-12Z" fill={accent} opacity=".9"/>
      <path d="M105 132c16-19 27-11 42 1 16-21 31-19 53 1" fill="none" stroke={surface} strokeWidth="3" strokeDasharray="3 6" strokeLinecap="round"/>
      <circle cx="115" cy="111" r="3" fill={ink}/><circle cx="190" cy="112" r="3" fill={ink}/>
    </>;
    case "embroidered-illustration": return <>
      <rect x="31" y="15" width="258" height="190" fill={surface} stroke={muted} strokeWidth="2"/>
      {Array.from({length:12},(_,i)=><path key={i} d={`M160 110 Q${100+i*10} ${28+i*3} 160 36 Q${220-i*10} ${28+i*3} 160 110`} fill="none" stroke={i%2?accent:accent2} strokeWidth="2.2" opacity=".7"/>)}
      <path d="M160 110v72m0-34q-25-30-51-17 21 25 51 25m0-8q25-30 51-17-21 25-51 25" fill="none" stroke={accent2} strokeWidth="4" strokeDasharray="7 3"/>
      <circle cx="160" cy="110" r="9" fill={accent}/>{[0,1,2,3,4,5,6,7].map(i=><circle key={i} cx={160+17*Math.cos(i*Math.PI/4)} cy={110+17*Math.sin(i*Math.PI/4)} r="2" fill={ink}/>)}
    </>;
    case "quilted-patchwork": return <>
      {Array.from({length:9},(_,i)=>{const x=73+(i%3)*57,y=27+Math.floor(i/3)*57;return <g key={i}><rect x={x} y={y} width="56" height="56" fill={i%2?accent2:accent} stroke={surface} strokeWidth="3"/><path d={`M${x} ${y}l56 56m0-56-56 56`} stroke={surface} strokeWidth="1.5"/><path d={`M${x+4} ${y+4}h48v48h-48Z`} fill="none" stroke={ink} strokeWidth="1" strokeDasharray="3 3" opacity=".7"/></g>})}
      <path d="M70 25h174v174H70Z" fill="none" stroke={ink} strokeWidth="2"/>
    </>;
    case "marquetry": return <>
      <rect x="40" y="21" width="240" height="178" fill={ink}/>
      <polygon points="48,29 154,29 95,190 48,190" fill={accent}/><polygon points="154,29 272,29 221,91 95,190" fill={surface}/><polygon points="272,29 272,190 169,190 221,91" fill={accent2}/><polygon points="95,190 221,91 169,190" fill={muted}/>
      {[0,1,2,3,4,5].map(i=><path key={i} d={`M${54+i*9} 34l-2 143m${111+i*12} 18 85-121m-67 111 86-65`} fill="none" stroke={ink} strokeWidth=".8" opacity=".3"/>)}
      <path d="M48 29h224v161H48Z" fill="none" stroke={ink} strokeWidth="3"/>
    </>;
    case "mosaic": return <>
      <circle cx="160" cy="110" r="92" fill={ink}/>
      {Array.from({length:72},(_,i)=>{const ring=i<18?0:i<42?1:2, n=ring===0?18:ring===1?24:30, j=ring===0?i:ring===1?i-18:i-42, angle=j*2*Math.PI/n, r=ring===0?25:ring===1?54:77;return <rect key={i} x={160+r*Math.cos(angle)-6} y={110+r*Math.sin(angle)-6} width="12" height="12" rx="2" transform={`rotate(${angle*180/Math.PI} ${160+r*Math.cos(angle)} ${110+r*Math.sin(angle)})`} fill={i%3===0?surface:i%2?accent:accent2}/>})}
      <circle cx="160" cy="110" r="12" fill={surface}/>
    </>;
    case "linocut-print": return <>
      <rect x="42" y="16" width="236" height="188" fill={ink}/><circle cx="206" cy="70" r="35" fill={accent}/>
      <path d="M42 164Q91 117 130 153T212 138T278 130v74H42Z" fill={surface}/>
      <path d="M49 176Q95 135 129 166T216 148T269 155M55 190q49-30 91-9t88-18" fill="none" stroke={ink} strokeWidth="10" strokeLinecap="square"/>
      {[0,1,2,3,4].map(i=><path key={i} d={`M${76+i*32} 25l-12 35m${14+i*43} 40 15-18`} stroke={surface} strokeWidth="3"/>)}
    </>;
    case "cyanotype": return <>
      <rect x="41" y="14" width="238" height="191" fill={accent2} opacity=".23"/><rect x="47" y="20" width="226" height="179" fill={bg} stroke={surface} strokeWidth="1.5"/>
      <path d="M160 172V39" fill="none" stroke={ink} strokeWidth="4" strokeLinecap="round"/>
      <path d="M159 153Q99 146 91 95q45 5 68 58Zm2-41q29-55 70-60-12 49-70 60Zm-2-9q-29-38-16-72 31 22 16 72Zm2 55q37-40 75-37-15 38-75 37Z" fill={ink} opacity=".88"/>
      <path d="M158 151 104 106m58 5 56-48m-59 40-12-57m15 111 57-29" fill="none" stroke={bg} strokeWidth="1.2" opacity=".65"/>
      <text x="56" y="188" fill={muted} fontSize="8" letterSpacing="3">SOLAR EXPOSURE · 01</text>
    </>;
    case "letterpress": return <>
      <rect x="48" y="15" width="224" height="190" fill={surface} stroke={ink} strokeWidth="2"/>
      <text x="64" y="115" fill={muted} fontSize="100" fontWeight="900" fontFamily={p.display} opacity=".22">Aa</text>
      <text x="61" y="111" fill={ink} fontSize="100" fontWeight="900" fontFamily={p.display}>Aa</text>
      <path d="M61 133h195M61 144h195" stroke={accent} strokeWidth="4"/>
      <text x="64" y="169" fill={ink} fontSize="11" fontWeight="700" letterSpacing="4">INK / IMPRESSION</text><text x="64" y="187" fill={muted} fontSize="8" letterSpacing="2">EDITION 01 OF 30</text>
    </>;
    case "etching": return <>
      <rect x="34" y="19" width="252" height="176" fill={surface} stroke={ink} strokeWidth="1"/>
      <path d="M45 157q40-37 73-20t50-20 55 12 52-12M45 165q56-29 98-7t73-19 59 9" fill="none" stroke={ink} strokeWidth="1.2"/>
      <path d="M89 151l21-91 24 91m-24-91 17 91m-41-13 25-76m-2 72 27-74M205 143l17-72 19 72m-35-7 35-52" fill="none" stroke={ink} strokeWidth="1"/>
      {[0,1,2,3,4,5,6,7,8,9].map(i=><path key={i} d={`M${48+i*23} 167l18 17m-7-17-18 17`} stroke={ink} strokeWidth=".8" opacity=".75"/>)}
      <path d="M49 33h222m-222 6h222" stroke={muted} strokeWidth=".5"/>
    </>;
    case "ukiyo-e-woodblock": return <>
      <rect x="32" y="18" width="256" height="184" fill={surface} stroke={ink} strokeWidth="2"/>
      <circle cx="223" cy="65" r="28" fill={accent}/><path d="M33 128q40-14 71 4t70-10 114 0v79H33Z" fill={accent2}/>
      <path d="M33 170q54-69 103-10 33 39 71-14 40-55 81 3v52H33Z" fill={bg} stroke={ink} strokeWidth="3"/>
      <path d="M45 177q34-46 67-22m37 14q30 20 55-19m14-7q31-37 58-8" fill="none" stroke={ink} strokeWidth="2.5"/>
      {[0,1,2,3].map(i=><path key={i} d={`M${55+i*51} ${188-i*5}q22-19 44-4`} fill="none" stroke={accent2} strokeWidth="3"/>)}
    </>;
    case "stained-glass": return <>
      <path d="M64 199V92A96 96 0 0 1 256 92v107Z" fill={ink} stroke={ink} strokeWidth="8"/>
      <path d="M73 190V91a87 87 0 0 1 174 0v99Z" fill={accent2}/><path d="M73 126 160 37l87 89-87 65Z" fill={accent}/>
      <path d="M73 126h174M160 37v154M73 190l87-64 87 64M73 126 160 91l87 35" fill="none" stroke={ink} strokeWidth="7" strokeLinejoin="round"/>
      <circle cx="160" cy="112" r="19" fill={surface} stroke={ink} strokeWidth="5"/><path d="M64 199h192" stroke={ink} strokeWidth="8"/>
    </>;
    case "sumi-e-ink-wash": return <>
      <path d="M125 190q7-53 7-152m26 151q-4-59 6-145m-61 101q-25-25-56-28 10 32 56 28m28-48q-28-29-64-22 22 32 64 22m28 36q23-30 62-30-24 38-62 30m1-66q33-28 63-13-29 23-63 13" fill="none" stroke={ink} strokeWidth="8" strokeLinecap="round" opacity=".78"/>
      <path d="M105 191q20-53 21-145m28 143q-1-69 11-147" fill="none" stroke={muted} strokeWidth="17" opacity=".24" strokeLinecap="round"/>
      <circle cx="227" cy="55" r="23" fill={accent} opacity=".35"/>
    </>;
    case "op-art": return <>
      <rect x="44" y="15" width="232" height="188" fill={surface} stroke={ink} strokeWidth="3"/>
      {Array.from({length:17},(_,i)=><ellipse key={i} cx="160" cy="109" rx={112-i*6.2} ry={90-i*5} fill="none" stroke={i%2?surface:ink} strokeWidth={i%2?5:5.5}/>)}
      <path d="M44 15h232v188H44Z" fill="none" stroke={accent} strokeWidth="2"/>
    </>;
    case "isometric-illustration": return <>
      <path d="M53 107 157 48 264 107 159 166Z" fill={accent} stroke={ink} strokeWidth="2"/>
      <path d="M53 107v49l106 59v-49Z" fill={accent2} stroke={ink} strokeWidth="2"/><path d="M264 107v49l-105 59v-49Z" fill={muted} stroke={ink} strokeWidth="2"/>
      <path d="m106 76 106 59m-2-58-105 59m54 30V215m-54-79v49m107-50v50" stroke={ink} strokeWidth="1.5" opacity=".8" fill="none"/>
      <path d="M157 48V27m-104 80-18-10m229 10 18-10" stroke={ink} strokeWidth="1" strokeDasharray="4 3"/>
    </>;
    case "low-poly-facets": return <>
      <polygon points="160,22 261,74 286,155 207,196 99,188 35,119 78,51" fill={accent2}/>
      <polygon points="160,22 78,51 128,105" fill={surface}/><polygon points="160,22 261,74 128,105" fill={accent}/><polygon points="261,74 286,155 203,130 128,105" fill={muted}/><polygon points="128,105 203,130 207,196 99,188" fill={accent}/><polygon points="35,119 78,51 128,105 99,188" fill={accent2}/><polygon points="203,130 286,155 207,196" fill={ink} opacity=".7"/>
      <path d="M160 22 128 105 99 188m-93-83 168 25m-75-79 125 81" fill="none" stroke={ink} strokeWidth="1.5" opacity=".65"/>
    </>;
    case "pencil-sketch": return <>
      <ellipse cx="160" cy="103" rx="65" ry="76" fill="none" stroke={muted} strokeWidth="1" strokeDasharray="5 5"/>
      <path d="M96 101q0-74 64-76t64 76q0 52-64 81-64-29-64-81Z" fill="none" stroke={ink} strokeWidth="2"/>
      <path d="M95 99h130M160 24v160m-52-91q23-15 42-3m20 0q23-13 42 3m-70 18q18 12 36 0m-34 31q17 9 33 0" stroke={muted} strokeWidth="1" fill="none"/>
      {[0,1,2,3,4,5,6].map(i=><path key={i} d={`M${110+i*5} 133l-12 19m${83+i*5} 94 13-22`} stroke={ink} strokeWidth=".8" opacity=".55"/>)}
      <path d="M90 191h140" stroke={accent} strokeWidth="1"/><text x="229" y="193" fill={muted} fontSize="8">HB / 02</text>
    </>;
    case "doodle-art": return <>
      <rect x="24" y="17" width="272" height="185" fill={surface}/>
      {Array.from({length:30},(_,i)=>{const x=38+(i%6)*44,y=31+Math.floor(i/6)*35;return <g key={i} transform={`translate(${x} ${y}) rotate(${(i*19)%30-15})`} stroke={i%3===0?accent:i%3===1?accent2:ink} strokeWidth="2.2" fill="none" strokeLinecap="round"><path d={i%4===0?"M0 8q8-16 16 0T32 8":i%4===1?"M3 3l10 15 9-17 8 17":i%4===2?"M2 9q10-12 20 0T2 9":"M2 2l24 16M26 2 2 18"}/><circle cx="4" cy="21" r="1.5" fill={accent}/></g>})}
      <path d="M89 78h142v61H89Z" fill={surface} stroke={ink} strokeWidth="2"/><text x="105" y="117" fill={ink} fontSize="25" fontWeight="800" fontFamily={p.display}>DOODLE</text>
    </>;
    case "charcoal-gesture": return <>
      <path d="M77 183q70-84 123-156m-111 20q77 39 137 116" stroke={muted} strokeWidth="35" opacity=".28" fill="none" strokeLinecap="round"/>
      <path d="M84 182q57-78 116-152m-100 29q66 30 126 109" stroke={ink} strokeWidth="17" opacity=".85" fill="none" strokeLinecap="round"/>
      <path d="M108 165q43-74 95-121m-72 32q44 18 77 61" stroke={surface} strokeWidth="6" opacity=".82" fill="none" strokeLinecap="round"/>
      {dots(42,92,54,7,18,muted)}
    </>;
    case "watercolor-wash": return <>
      <path d="M43 98Q52 40 103 42T172 82Q190 130 148 168T58 159Q30 133 43 98Z" fill={accent} opacity=".46"/>
      <path d="M151 34Q221 19 264 75T248 153Q215 194 163 151T151 34Z" fill={accent2} opacity=".42"/>
      <path d="M43 113q17-62 76-70m37 122q-50 33-98-6m103-118q73-30 104 36m-19 82q-43 43-87-3" fill="none" stroke={accent} strokeWidth="3" opacity=".45"/>
      <circle cx="89" cy="106" r="11" fill={surface} opacity=".72"/><path d="M124 73q32-18 53 2" fill="none" stroke={surface} strokeWidth="8" opacity=".6"/>
    </>;
    case "gouache-illustration": return <>
      <rect x="50" y="20" width="220" height="180" fill={accent2}/><path d="M50 157h220v43H50Z" fill={ink} opacity=".72"/>
      <path d="M105 163V97q0-15 16-15h27q15 0 15 15v66Z" fill={accent} stroke={surface} strokeWidth="3"/>
      <path d="M191 165q-31-38-11-79 31-23 47 5 11 32-18 74Z" fill={surface} stroke={ink} strokeWidth="3"/>
      <circle cx="129" cy="59" r="25" fill={surface}/><path d="M117 51q13-7 24 4m-36 109h59m20 2h39" stroke={ink} strokeWidth="2" opacity=".55"/>
    </>;
    case "chalk-pastel": return <>
      <rect x="35" y="25" width="250" height="170" fill={accent2} opacity=".52"/>
      <circle cx="211" cy="89" r="39" fill={surface} opacity=".72"/>
      <path d="M35 151q57-25 113-10t137-13v67H35Z" fill={accent} opacity=".78"/>
      <path d="M35 165q46-31 92-20t67 12 91-11" fill="none" stroke={surface} strokeWidth="13" opacity=".38" strokeLinecap="round"/>
      {dots(84,44,47,14,17,surface)}
    </>;
    case "wax-crayon": return <>
      <circle cx="213" cy="74" r="40" fill="none" stroke={accent} strokeWidth="16" strokeDasharray="9 4"/>
      {[0,1,2,3,4,5,6,7].map(i=><path key={i} d={`M${213+55*Math.cos(i*Math.PI/4)} ${74+55*Math.sin(i*Math.PI/4)}l${19*Math.cos(i*Math.PI/4)} ${19*Math.sin(i*Math.PI/4)}`} stroke={accent} strokeWidth="8" strokeLinecap="round" strokeDasharray="12 4"/>)}
      <path d="M31 168q48-87 103-27t69 13 88-18" fill="none" stroke={accent2} strokeWidth="32" strokeLinecap="round" strokeDasharray="21 5 33 4"/>
      <path d="M35 184q61-61 118-17t138-12" fill="none" stroke={ink} strokeWidth="5" strokeDasharray="15 7" opacity=".65"/>
    </>;
    case "continuous-line": return <>
      <path d="M80 156q-22-27 9-55 12-11 23 2 8 8-4 17-13 10-4 24 17 27 63 26 43-1 58-38 12-31-4-69-13-31-44-27-21 3-24 22-3 24 17 25 15 0 20-12 4-10-8-13-13-3-26 13-13 16-20 41-6 20 7 21 9 1 16-13 7-11 16-8 8 3 16 19 7 15 24 13 17-2 32-18" fill="none" stroke={ink} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="80" cy="156" r="3.5" fill={accent}/><circle cx="251" cy="125" r="3.5" fill={accent}/>
    </>;
    case "architectural-sketchbook": return <>
      <path d="M20 190 158 97 303 190M158 97V23m0 74 88 35v58m-88-93-81 39v54m81-93 145 93M158 23 77 72v64m81-113 88 47v62" fill="none" stroke={ink} strokeWidth="2"/>
      <path d="M20 190 158 89 303 190M158 89V18m-81 54-13 65m182-67 13 65M76 136l82 47 88-51M91 82l67-40 72 43" fill="none" stroke={muted} strokeWidth="1" opacity=".75"/>
      {[0,1,2,3].map(i=><path key={i} d={`M${96+i*24} ${151+i*9}v25m${-10+i*28} 11 23-15`} fill="none" stroke={accent2} strokeWidth="1.1"/>)}
      <path d="M272 43h32m-18 0v78" stroke={accent} strokeWidth="1"/><text x="271" y="37" fill={accent} fontSize="8">ELEV. A</text>
    </>;
    case "ink-stippling": return <>
      <path d="M74 188q80-27 90-151 76 86 74 151Z" fill="none" stroke={ink} strokeWidth="1" opacity=".35"/>
      {Array.from({length:520},(_,i)=>{const y=44+(i*97)%144, half=9+(y-44)*.54, t=((i*73)%101)/100, x=160-half+Math.pow(t,1.6)*half*2;return <circle key={i} cx={x} cy={y+((i*17)%7-3)} r={i%11===0?1.6:1} fill={ink} opacity={.34+(i%4)*.13}/>})}
      <path d="M160 39q-3 101-75 143m75-143q24 100 70 143" fill="none" stroke={accent} strokeWidth="1" opacity=".45"/>
    </>;
    default: return null;
  }
}

export function ResearchedPreview({ meta, large, viewport }: { meta: StyleMeta; large?: boolean; viewport?: "desktop" | "tablet" | "mobile" }) {
  const p = meta.preview;
  return <Frame meta={meta} large={large} viewport={viewport}>
    <div style={{flex:1, minHeight:0, display:"flex", flexDirection:"column", padding:large?"24px 28px 30px":"10px 12px 21px", background:p.bg, color:p.ink, fontFamily:p.body}}>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"baseline", gap:8, flexShrink:0}}>
        <span style={{fontSize:large?10:7, letterSpacing:".17em", fontWeight:700, textTransform:"uppercase", color:p.muted}}>{meta.category}</span>
        <span style={{fontSize:large?10:7, color:p.muted, fontVariantNumeric:"tabular-nums"}}>FIELD STUDY</span>
      </div>
      <div style={{flex:1, minHeight:0, display:"flex", alignItems:"center", justifyContent:"center"}}>
        <svg viewBox="0 0 320 220" role="img" aria-label={`${meta.name} original material study`} style={{width:"100%", height:"100%", maxHeight:large?440:undefined}} preserveAspectRatio="xMidYMid meet">
          <Scene slug={meta.slug} p={p}/>
        </svg>
      </div>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"flex-end", gap:12, flexShrink:0, paddingBottom:large?8:2}}>
        <div style={{fontFamily:p.display, fontSize:large?34:16, fontWeight:700, lineHeight:1.08, maxWidth:"80%"}}>{meta.name}</div>
        <span style={{fontSize:large?11:7, color:p.muted, whiteSpace:"nowrap"}}>DESIGN.MD</span>
      </div>
    </div>
    <Meta meta={meta} large={large}/>
  </Frame>;
}
