/**
 * Calendar Utility for Wedding Event
 * Generates direct Google Calendar web links and downloadable .ICS files.
 */

export const generateCalendarLinks = (config) => {
  const { couple, timing, venue } = config;
  
  // Event details
  const title = `Wedding Ceremony: ${couple.bride.firstName} & ${couple.groom.firstName}`;
  const description = `Sacred Wedding Ceremony of ${couple.bride.firstName} and ${couple.groom.firstName}.\n\nDate: ${timing.date}\nSubha Muhurtham: ${timing.muhurtham} (${timing.lagna})\nVenue: ${venue.name}, ${venue.address}\nDirections: ${venue.googleMapsUrl}\n\nWe solicit your gracious presence and blessings!`;
  const location = `${venue.name}, ${venue.address}`;

  // Start: 2026-12-03 08:00 AM IST (UTC: 2026-12-03 02:30:00Z)
  // End:   2026-12-03 23:00 PM IST (UTC: 2026-12-03 17:30:00Z)
  const startIso = "20261203T023000Z";
  const endIso = "20261203T173000Z";

  // Google Calendar URL
  const googleUrl = new URL("https://calendar.google.com/calendar/render");
  googleUrl.searchParams.append("action", "TEMPLATE");
  googleUrl.searchParams.append("text", title);
  googleUrl.searchParams.append("dates", `${startIso}/${endIso}`);
  googleUrl.searchParams.append("details", description);
  googleUrl.searchParams.append("location", location);

  // ICS File Content (Apple / Outlook / iOS / Android native)
  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Sri Laxmi & Nagesh Wedding//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:wedding-${Date.now()}@srilaxminagesh.wedding`,
    `DTSTAMP:${startIso}`,
    `DTSTART:${startIso}`,
    `DTEND:${endIso}`,
    `SUMMARY:${title}`,
    `DESCRIPTION:${description.replace(/\n/g, "\\n")}`,
    `LOCATION:${location}`,
    "STATUS:CONFIRMED",
    "SEQUENCE:0",
    "BEGIN:VALARM",
    "TRIGGER:-PT24H",
    "ACTION:DISPLAY",
    "DESCRIPTION:Reminder: Sri Laxmi & Nagesh Wedding tomorrow!",
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");

  const downloadIcs = () => {
    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Sri-Laxmi-weds-Nagesh-Wedding.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return {
    googleCalendarUrl: googleUrl.toString(),
    downloadIcs
  };
};
