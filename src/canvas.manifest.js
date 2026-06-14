export const manifest = {
  screens: {
    scr_oflvw3: { name: "Home", route: "/", position: { "x": 160, "y": 220 } },
    scr_jftkog: { name: "About", route: "/about", position: { "x": 160, "y": 2200 } },
    scr_x8hrdy: { name: "Services", route: "/services", position: { "x": 160, "y": 4180 } },
    scr_ipyzvh: { name: "Security & Surveillance", route: "/services/security-surveillance", position: { "x": 1560, "y": 4180 } },
    scr_q7r63u: { name: "Connectivity & Infrastructure", route: "/services/connectivity-infrastructure", position: { "x": 2960, "y": 4180 } },
    scr_3wbimz: { name: "Cybersecurity", route: "/services/cybersecurity", position: { "x": 4360, "y": 4180 } },
    scr_3020vi: { name: "Compute & Cloud", route: "/services/compute-cloud", position: { "x": 5760, "y": 4180 } },
    scr_jpk2nb: { name: "Smart Building & Power", route: "/services/smart-building-power", position: { "x": 7160, "y": 4180 } },
    scr_sblq4b: { name: "Industries", route: "/industries", position: { "x": 1560, "y": 2200 } },
    scr_8oha79: { name: "Why Us", route: "/why-siala", position: { "x": 2960, "y": 2200 } },
    scr_l41ci9: { name: "Contact", route: "/contact", position: { "x": 4360, "y": 2200 } }
  },
  sections: {
    sec_4fk63n: { name: "Home", x: 0, y: 0, width: 1520, height: 1180 },
    sec_x934pm: { name: "Main Navigation", x: 0, y: 1980, width: 5720, height: 1180 },
    sec_5m5z61: { name: "Services Hub & Details", x: 0, y: 3960, width: 8520, height: 1180 }
  },
  layers: [
  { kind: "section", id: "sec_4fk63n", children: [
    { kind: "screen", id: "scr_oflvw3" }]
  },
  { kind: "section", id: "sec_x934pm", children: [
    { kind: "screen", id: "scr_jftkog" },
    { kind: "screen", id: "scr_sblq4b" },
    { kind: "screen", id: "scr_8oha79" },
    { kind: "screen", id: "scr_l41ci9" }]
  },
  { kind: "section", id: "sec_5m5z61", children: [
    { kind: "screen", id: "scr_x8hrdy" },
    { kind: "screen", id: "scr_ipyzvh" },
    { kind: "screen", id: "scr_q7r63u" },
    { kind: "screen", id: "scr_3wbimz" },
    { kind: "screen", id: "scr_3020vi" },
    { kind: "screen", id: "scr_jpk2nb" }]
  }]

};