export const SITE = {
  name: "YNAD Mount Resort",
  legalName: "YNAD Mount Resort, Wayanad",
  tagline: "A sanctuary above the mist",
  baseUrl: "https://www.ynadresort.in",
  phone: "+91 99951 49001",
  whatsappNumber: "919995149001",
  email: "ynadresort@gmail.com",
  address: {
    line: "Valathoor, Rippon, Meppadi",
    locality: "Meppadi",
    district: "Wayanad",
    region: "Kerala",
    postalCode: "673577",
    country: "IN",
    full: "Valathoor, Rippon, Meppadi, Wayanad, Kerala 673577, India",
  },
  geoArea: "Wayanad, Kerala",
  mapsQuery: "https://www.google.com/maps/search/?api=1&query=Ynad+Mount+Resort+Valathoor+Rippon+Meppadi+Wayanad",
};

export function waLink(message) {
  const text = encodeURIComponent(
    message ||
      "Hi YNAD Mount Resort! I'd like to check availability for my stay in Wayanad."
  );
  return `https://wa.me/${SITE.whatsappNumber}?text=${text}`;
}
