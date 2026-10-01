// Weather strip on the home page.
// Data: for each month 2014-2019, the share of 623 Indian districts whose
// population-weighted SPEI-1 (SPEIbase v2.9) fell below the 20th percentile
// (dry) or above the 80th percentile (wet) of that district's own 1901-2024
// record. Built from climate_shock_district_pc11.parquet in the research repo.
(function () {
  var D = [[2014,1,0.112,0.284],[2014,2,0.005,0.499],[2014,3,0.188,0.326],[2014,4,0.215,0.154],[2014,5,0.056,0.363],[2014,6,0.43,0.027],[2014,7,0.424,0.095],[2014,8,0.419,0.039],[2014,9,0.075,0.345],[2014,10,0.199,0.215],[2014,11,0.38,0.053],[2014,12,0.108,0.13],[2015,1,0.026,0.308],[2015,2,0.196,0.08],[2015,3,0.111,0.559],[2015,4,0.0,0.568],[2015,5,0.169,0.095],[2015,6,0.014,0.273],[2015,7,0.274,0.191],[2015,8,0.111,0.185],[2015,9,0.337,0.101],[2015,10,0.453,0.003],[2015,11,0.252,0.12],[2015,12,0.271,0.189],[2016,1,0.207,0.111],[2016,2,0.478,0.071],[2016,3,0.056,0.088],[2016,4,0.557,0.08],[2016,5,0.048,0.274],[2016,6,0.136,0.188],[2016,7,0.029,0.377],[2016,8,0.408,0.175],[2016,9,0.117,0.133],[2016,10,0.178,0.053],[2016,11,0.546,0.063],[2016,12,0.522,0.059],[2017,1,0.199,0.127],[2017,2,0.634,0.024],[2017,3,0.05,0.244],[2017,4,0.411,0.231],[2017,5,0.125,0.135],[2017,6,0.117,0.268],[2017,7,0.071,0.281],[2017,8,0.112,0.116],[2017,9,0.169,0.144],[2017,10,0.278,0.244],[2017,11,0.247,0.164],[2017,12,0.239,0.218],[2018,1,0.531,0.008],[2018,2,0.369,0.005],[2018,3,0.363,0.039],[2018,4,0.091,0.127],[2018,5,0.122,0.117],[2018,6,0.138,0.138],[2018,7,0.047,0.133],[2018,8,0.165,0.037],[2018,9,0.26,0.116],[2018,10,0.465,0.005],[2018,11,0.413,0.177],[2018,12,0.018,0.329],[2019,1,0.18,0.175],[2019,2,0.091,0.324],[2019,3,0.189,0.058],[2019,4,0.218,0.114],[2019,5,0.238,0.05],[2019,6,0.361,0.003],[2019,7,0.061,0.191],[2019,8,0.183,0.345],[2019,9,0.058,0.459],[2019,10,0.003,0.48],[2019,11,0.071,0.287],[2019,12,0.003,0.478]];
  var fig = document.querySelector("figure.strip");
  if (!fig) return;
  var svgNS = "http://www.w3.org/2000/svg";
  var W = 720, H = 132, mid = 62, half = 54, pad = 0;
  var n = D.length, step = W / n, bw = Math.max(step - 2.2, 2);
  var MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  var svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("viewBox", "0 0 " + W + " " + H);
  svg.setAttribute("role", "img");
  svg.setAttribute("aria-label", "Monthly share of Indian districts in their wettest fifth (bars above the line) and driest fifth (bars below), 2014 to 2019.");
  var readout = fig.querySelector(".readout");
  function pct(x) { return Math.round(x * 100) + "%"; }
  function show(r) {
    if (!readout) return;
    readout.textContent = MONTHS[r[1] - 1] + " " + r[0] + ": " + pct(r[3]) + " of districts unusually wet, " + pct(r[2]) + " unusually dry";
  }
  D.forEach(function (r, i) {
    var x = pad + i * step + (step - bw) / 2;
    var g = document.createElementNS(svgNS, "g");
    g.setAttribute("class", "month");
    g.setAttribute("tabindex", "0");
    g.style.setProperty("--i", i);
    var wh = r[3] / 0.7 * half, dh = r[2] / 0.7 * half;
    var wet = document.createElementNS(svgNS, "rect");
    wet.setAttribute("class", "bar wet");
    wet.setAttribute("x", x); wet.setAttribute("width", bw);
    wet.setAttribute("y", mid - wh); wet.setAttribute("height", Math.max(wh, 0.01));
    var dry = document.createElementNS(svgNS, "rect");
    dry.setAttribute("class", "bar dry");
    dry.setAttribute("x", x); dry.setAttribute("width", bw);
    dry.setAttribute("y", mid); dry.setAttribute("height", Math.max(dh, 0.01));
    var hit = document.createElementNS(svgNS, "rect");
    hit.setAttribute("class", "hit");
    hit.setAttribute("x", pad + i * step); hit.setAttribute("width", step);
    hit.setAttribute("y", mid - half); hit.setAttribute("height", 2 * half);
    var t = document.createElementNS(svgNS, "title");
    t.textContent = MONTHS[r[1] - 1] + " " + r[0] + ": wet " + pct(r[3]) + ", dry " + pct(r[2]);
    g.appendChild(t); g.appendChild(wet); g.appendChild(dry); g.appendChild(hit);
    g.addEventListener("mouseenter", function () { show(r); });
    g.addEventListener("focus", function () { show(r); });
    svg.appendChild(g);
    if (r[1] === 1) {
      var tk = document.createElementNS(svgNS, "line");
      tk.setAttribute("class", "tick");
      tk.setAttribute("x1", pad + i * step); tk.setAttribute("x2", pad + i * step);
      tk.setAttribute("y1", mid + half + 4); tk.setAttribute("y2", mid + half + 9);
      svg.appendChild(tk);
      var yr = document.createElementNS(svgNS, "text");
      yr.setAttribute("class", "yr");
      yr.setAttribute("x", pad + i * step + 3); yr.setAttribute("y", mid + half + 18);
      yr.textContent = r[0];
      svg.appendChild(yr);
    }
  });
  var base = document.createElementNS(svgNS, "line");
  base.setAttribute("class", "base");
  base.setAttribute("x1", 0); base.setAttribute("x2", W);
  base.setAttribute("y1", mid); base.setAttribute("y2", mid);
  svg.appendChild(base);
  fig.insertBefore(svg, fig.firstChild);
  requestAnimationFrame(function () {
    requestAnimationFrame(function () { fig.classList.add("drawn"); });
  });
})();
