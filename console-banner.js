function printConsoleBanner(){
  const g = "color:#00B8B0;font-weight:bold;";
  const b = "color:#004593;font-weight:bold;";
  const o = "color:#f27707;font-weight:bold;";

const message = `
%c███████╗%c ██████╗ %c ██████╗     %c██████╗ %c █████╗ %c██████╗ 
%c██╔════╝%c██╔═══██╗%c██╔═══██╗    %c██╔══██╗%c██╔══██╗%c██╔══██╗
%c█████╗  %c██║   ██║%c██║   ██║    %c██████╔╝%c███████║%c██████╔╝
%c██╔══╝  %c██║   ██║%c██║   ██║    %c██╔══██╗%c██╔══██║%c██╔══██╗
%c██║     %c╚██████╔╝%c╚██████╔╝    %c██████╔╝%c██║  ██║%c██║  ██║
%c╚═╝     %c ╚═════╝ %c ╚═════╝     %c╚═════╝ %c╚═╝  ╚═╝%c╚═╝  ╚═╝
`;
  console.log(message, b, o, b, g, b, g, b, o, b, g, b, g, b, o, b, g, b, g, b, o, b, g, b, g, b, o, b, g, b, g, b, o, b, g, b, g,);
}

printConsoleBanner();