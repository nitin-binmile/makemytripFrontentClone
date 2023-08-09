/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors:{
        colorPrimary:"#008cff",
        btnprimary:"linear-gradient(93deg,#53b2fe,#065af3)",
        btntext:"#fff",
        borderColor:"#4a4a4a",
      },
      fontFamily:{
        lato:'Lato'
      },
      backgroundImage:{
        googleSprit:'url("assets/asset 23.webp")',
        card:"url('https://hblimg.mmtcdn.com/content/hubble/img/delhi_hotels_tiow/mmt/activities/m_Le%20ROI%20Floating%20Huts_Eco%20Rooms_Tehri_Uttarakhand_l_550_821.jpg?im=Resize=(400,462)')"
      },
      backgroundPosition:{
        google:'-3px -55px',
        apple:'-3px -6px',
        giftIcon:'-155px -4px'
      },
      backgroundSize:{
        googleImageSize:'250px 250px'
      }
    },
  },
  plugins: [],
};
