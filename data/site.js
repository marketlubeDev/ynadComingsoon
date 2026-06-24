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
  geo: { lat: 11.5222241, lng: 76.1734791 },
  // Exact Google Maps place listing for YNAD Mount Resort (opens the pin on
  // mobile + desktop). Volatile session params from the share URL are dropped.
  mapsQuery:
    "https://www.google.com/maps/place/YNAD+MOUNT+RESORT/@11.5222241,76.1734791,17z/data=!3m1!4b1!4m9!3m8!1s0x3ba6130013a1ca19:0x8ff828d219ae7526!5m2!4m1!1i2!8m2!3d11.5222241!4d76.1734791!16s%2Fg%2F11zk1v9rj8",
};

export function waLink(message) {
  const text = encodeURIComponent(
    message ||
      "Hi YNAD Mount Resort! I'd like to check availability for my stay in Wayanad."
  );
  return `https://wa.me/${SITE.whatsappNumber}?text=${text}`;
}

// Opens the visitor's mail client with a pre-filled compose to the resort.
export function mailLink(subject) {
  const s = subject || "Enquiry — YNAD Mount Resort, Wayanad";
  return `mailto:${SITE.email}?subject=${encodeURIComponent(s)}`;
}
