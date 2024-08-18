import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import { Fade, Slide } from "react-awesome-reveal";


const LocationMap = () => {
    return (
        <div className='container mx-auto pb-5' >
            <p className='text-center text-2xl font-bold  text-blue-600'>
                <Slide>
                    <h1>Track Our Location Easily</h1>
                </Slide>
            </p>
            <p className="text-center text-lg text-blue-500 hidden md:block "> 
                    <Fade delay={1e3} cascade damping={1e-1}> Find our location on the map that help you to explore us easily </Fade>
            </p>
            <MapContainer className='h-64 w-full'
             center={[23.793940095798103, 90.40495186121306]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[23.793930278316942, 90.4049840477543]}>
                    <Popup>
                        The Alt Products
                    </Popup>
                </Marker>
            </MapContainer>
            
        </div>
    );
};

export default LocationMap;