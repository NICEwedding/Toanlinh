/* config.js - cấu hình dễ chỉnh
   Nếu anh có iframe embed chính xác từ Google Maps (Share > Embed a map),
   paste src vào mapEmbed. Nếu không, mapEmbed để trống và script sẽ
   hiển thị một bản đồ tìm kiếm bằng mapUrl.
*/
const WEDDING_CONFIG = {
  groomName: "Trọng Toàn ",
  brideName: "Mai Linh ",

  weddingDate: "01/03/2026  17:00:00",
  location: "65 P. Quán Sứ, Trần Hưng Đạo, Hoàn Kiếm, Hà Nội ",

  // link mở ngoài (mở app Google Maps trên điện thoại)
  mapUrl: "https://maps.app.goo.gl/siXXMuic3jAoqoX19",

  // link embed hiển thị trực tiếp trong trang
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5271.125104220933!2d105.84520599999999!3d21.0239898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab913f8686d5%3A0x4a2f029d1e68bb94!2zNjUgUC4gUXXDoW4gU-G7qSwgVHLhuqduIEjGsG5nIMSQ4bqhbywgSG_DoG4gS2nhur9tLCBIw6AgTuG7mWkgMTAwMDAw!5e1!3m2!1svi!2s!4v1764660155777!5m2!1svi!2s",

  heroImage: "assets/hero-cover.jpg",
  doorLeft: "assets/A.png",
  doorRight: "assets/B.png",

  music: "assets/Music.mp3",

  effectImage: "assets/effect.png",
  effectEnabled: true,

  videoUrl: "https://www.youtube.com/embed/B3BBCjmnBTw",

  gallery: [
    {src:"assets/g1.jpg"},
    {src:"assets/g2.jpg"},
    {src:"assets/g3.jpg"},
    {src:"assets/g4.jpg"},
    {src:"assets/g5.jpg"},
    {src:"assets/g6.jpg"},
    {src:"assets/g7.jpg"},
    {src:"assets/g8.jpg"},
    {src:"assets/g9.jpg"},
    {src:"assets/g10.jpg"},
	{src:"assets/g11.jpg"},
    {src:"assets/g12.jpg"},
    {src:"assets/g13.jpg"},
    {src:"assets/g14.jpg"},
	{src:"assets/g15.jpg"},
    {src:"assets/g16.jpg"}
  ],

  invitation: {
    groomSide: {
      avatar: "assets/g1.jpg",
      name: " Trọng Toàn",
      parents: "",
      address: "Địa chỉ: 20 ngõ Hoàng An, Trung Phụng, Đống Đa, Hà Nội"
    },
    brideSide: {
      avatar: "assets/g2.jpg",
      name: "Mai Linh ",
      parents: "",
      address: "Địa chỉ: Tổ dân phố Cây Quân, Mỹ Bằng, Yên Sơn, Tuyên Quang  "
    }
  },

  qr: [
    {src: "assets/QR01.jpg", title: "DANG TRONG TOAN ", info: "Chân thành cảm ơn"},
    {src: "assets/QR02.jpg", title: "DO THI MAI LINH", info: "Chân thành cảm ơn"}
  ],
};
