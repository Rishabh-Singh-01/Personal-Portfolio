import "./contactGeneral.css";

import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
const Map = () => {
    return (
        <div className="map" style={{}}>
            <MapContainer center={[28.5294, 77.3913]} zoom={14} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[28.5294, 77.3913]}>
                    <Tooltip>
                        <span style={{ fontSize: "1.6rem", fontFamily: "poppins", color: "var(--dark-green)", fontWeight: "600" }}>Home</span>
                    </Tooltip>
                    <Popup>
                        <span style={{ fontSize: "1.6rem", fontFamily: "poppins" }}>Sector 82 , Noida</span>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default Map;