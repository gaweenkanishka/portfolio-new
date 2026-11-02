// Static, trusted SVG snippets (rendered with dangerouslySetInnerHTML in Services.jsx).
export const BASE = `<circle cx='272' cy='24' r='46' fill='rgba(255,255,255,.14)'/><circle cx='34' cy='122' r='40' fill='rgba(255,255,255,.1)'/>`;

export const G = (s) =>
  `<g stroke='#fff' stroke-width='3' stroke-linecap='round' stroke-linejoin='round' fill='rgba(255,255,255,.22)'>${s}</g>`;

const WAVE = Array.from({ length: 17 }, (_, i) => {
  const k = 14 + Math.abs(Math.sin(i * 1.3)) * 74;
  return `<rect x='${60 + i * 12}' y='${70 - k / 2}' width='6' height='${k}' rx='3'/>`;
}).join("");

export const SERVICES = [
  { t: "Photography", d: "Professional photography capturing moments and essence of your brand", a: "#7b6bff", b: "#ff6ad5",
    g: `<rect x='108' y='42' width='104' height='68' rx='12'/><rect x='136' y='30' width='32' height='14' rx='5'/><circle cx='160' cy='76' r='23'/><circle cx='160' cy='76' r='9'/><circle cx='198' cy='56' r='3'/>` },
  { t: "Videography", d: "High-quality video production for your projects and storytelling", a: "#ff6ad5", b: "#ffb36a",
    g: `<rect x='106' y='58' width='108' height='58' rx='8'/><path d='M104 56 L112 34 L216 44 L214 58 Z'/><path d='M132 40 L142 58 M158 43 L168 58 M184 46 L194 58'/><path d='M150 74 L150 100 L176 87 Z'/>` },
  { t: "Web Development", d: "Full-stack web applications and websites with modern technologies", a: "#5de4ff", b: "#7b6bff",
    g: `<rect x='78' y='24' width='164' height='98' rx='12'/><path d='M78 48 H242'/><circle cx='96' cy='36' r='2'/><circle cx='108' cy='36' r='2'/><path d='M140 70 L120 88 L140 106 M180 70 L200 88 L180 106 M166 66 L154 110'/>` },
  { t: "UI Design", d: "Beautiful and functional user interface designs for digital products", a: "#58ffb0", b: "#5de4ff",
    g: `<rect x='86' y='28' width='96' height='64' rx='10'/><rect x='138' y='50' width='96' height='64' rx='10'/><circle cx='112' cy='54' r='9'/><path d='M158 74 H212 M158 90 H190'/>` },
  { t: "Mobile Apps", d: "Native and cross-platform mobile applications", a: "#7b6bff", b: "#58ffb0",
    g: `<rect x='124' y='12' width='72' height='118' rx='16'/><path d='M148 22 H172'/><rect x='138' y='40' width='20' height='20' rx='6'/><rect x='162' y='40' width='20' height='20' rx='6'/><rect x='138' y='68' width='20' height='20' rx='6'/><rect x='162' y='68' width='20' height='20' rx='6'/>` },
  { t: "Social Media Marketing", d: "Strategic social media campaigns and content creation", a: "#ff6ad5", b: "#7b6bff",
    g: `<path d='M112 98 L164 46 L220 94 Z'/><circle cx='112' cy='98' r='15'/><circle cx='164' cy='46' r='19'/><circle cx='220' cy='94' r='15'/><path d='M158 46 h12 M164 40 v12'/>` },
  { t: "Personal Branding", d: "Develop your unique brand identity and online presence", a: "#ffb36a", b: "#ff6ad5",
    g: `<circle cx='160' cy='56' r='22'/><path d='M112 122 Q160 66 208 122 Z'/><circle cx='160' cy='70' r='58' stroke-dasharray='4 9'/>` },
  { t: "Music Composing", d: "Original music composition and sound design for projects", a: "#5de4ff", b: "#ff6ad5", g: WAVE },
  { t: "Creative Graphics", d: "Eye-catching graphics design for all your marketing needs", a: "#ffb36a", b: "#7b6bff",
    g: `<circle cx='138' cy='80' r='32'/><circle cx='184' cy='80' r='32'/><circle cx='161' cy='54' r='32'/>` },
  { t: "IT Consulting", d: "Expert IT consulting for business tech strategy", a: "#7b6bff", b: "#5de4ff",
    g: `<rect x='98' y='20' width='124' height='30' rx='9'/><rect x='98' y='55' width='124' height='30' rx='9'/><rect x='98' y='90' width='124' height='30' rx='9'/><circle cx='118' cy='35' r='3'/><circle cx='118' cy='70' r='3'/><circle cx='118' cy='105' r='3'/><path d='M140 35 H202 M140 70 H190 M140 105 H198'/>` },
  { t: "Merchandising", d: "Custom merchandise and brand merchandise solutions", a: "#58ffb0", b: "#ffb36a",
    g: `<path d='M122 26 L146 20 Q160 38 174 20 L198 26 L228 52 L204 66 L204 118 L116 118 L116 66 L92 52 Z'/>` },
  { t: "Event Organizing", d: "Complete event planning and organization services", a: "#ff6ad5", b: "#5de4ff",
    g: `<rect x='104' y='28' width='112' height='92' rx='12'/><path d='M104 56 H216 M134 20 V36 M186 20 V36'/><circle cx='130' cy='78' r='4'/><circle cx='160' cy='78' r='4'/><circle cx='190' cy='78' r='4'/><circle cx='130' cy='100' r='4'/><circle cx='160' cy='100' r='4'/>` },
];
