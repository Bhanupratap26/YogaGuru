import { useEffect, useState } from "react";
import { CentreCard } from "./CentreCard";

export const CentreSection = () => {
  const Centres = [
    {
      image: "/assests/Centre-images/img4.jpeg",
      CentreName: "Noida",
      lat: 28.5355,
      lng: 77.3910
    },
    {
      image: "/assests/Centre-images/img4.jpeg",
      CentreName: "Delhi",
      lat: 28.6139,
      lng: 77.2090
    },
    {
      image: "/assests/Centre-images/img4.jpeg",
      CentreName: "Gurgaon",
      lat: 28.4595,
      lng: 77.0266
    },
    {
      image: "/assests/Centre-images/img4.jpeg",
      CentreName: "Mumbai",
      lat: 19.0760,
      lng: 72.8777
    },
    {
      image: "/assests/Centre-images/img4.jpeg",
      CentreName: "Bangalore",
      lat: 12.9716,
      lng: 77.5946
    }
  ];

  const [search, setSearch] = useState("");
  const [userLocation, setUserLocation] = useState(null);
  const [filteredCentres, setFilteredCentres] = useState(Centres);

  // 📏 Distance calculation
  const getDistance = (lat1, lng1, lat2, lng2) => {
    const toRad = (v) => (v * Math.PI) / 180;
    const R = 6371;

    const dLat = toRad(lat2 - lat1);
    const dLng = toRad(lng2 - lng1);

    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(lat1)) *
        Math.cos(toRad(lat2)) *
        Math.sin(dLng / 2) ** 2;

    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  };

  // 📍 Load cached + fresh location (FAST)
  useEffect(() => {
    // show centres immediately
    setFilteredCentres(Centres);

    // load cached location
    try {
      const cached = localStorage.getItem("userLocation");
      if (cached) {
        const parsed = JSON.parse(cached);
        if (parsed?.lat && parsed?.lng) {
          setUserLocation(parsed);
        }
      }
    } catch {
      localStorage.removeItem("userLocation");
    }

    // fetch fresh location (non-blocking)
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const loc = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        };
        setUserLocation(loc);
        localStorage.setItem("userLocation", JSON.stringify(loc));
      },
      () => {},
      {
        enableHighAccuracy: false,
        timeout: 5000,
        maximumAge: 86400000
      }
    );
  }, []);

  // 🔍 Search + nearest logic
  useEffect(() => {
    let list = Centres.filter((c) =>
      c.CentreName.toLowerCase().includes(search.toLowerCase())
    );

    if (userLocation) {
      list = list
        .map((c) => ({
          ...c,
          distance: getDistance(
            userLocation.lat,
            userLocation.lng,
            c.lat,
            c.lng
          )
        }))
        .sort((a, b) => a.distance - b.distance);
    }

    setFilteredCentres(list);
  }, [search, userLocation]);

  return (
    <section className="Centre-Section">
      {/* Header */}
      <div className="centre-header">
        <h2 className="section-title">Nearest Centre</h2>

        <input
          type="text"
          placeholder="Search centre..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Cards */}
      <div className="Centre-row">
        {filteredCentres.length > 0 ? (
          filteredCentres.map((centre, index) => (
            <CentreCard
              key={index}
              image={centre.image}
              CentreName={`${centre.CentreName}${
                centre.distance
                  ? ` • ${centre.distance.toFixed(1)} km`
                  : ""
              }`}
              isNearest={index === 0 && userLocation}
            />
          ))
        ) : (
          <p>No centres found</p>
        )}
      </div>
    </section>
  );
};
