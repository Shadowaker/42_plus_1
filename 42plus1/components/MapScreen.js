import AvatarComponent from "../section/AvatarComponent";
import {Wrapper} from "@googlemaps/react-wrapper";
import {useRef, useState} from "react";
import {View} from "react-native";
import NavBar from "../section/NavBar";
import {AmbientLight, Matrix4, PerspectiveCamera, Scene, WebGLRenderer} from "three";
import {GLTFLoader} from "three/addons/loaders/GLTFLoader";

export default function MapScreen({navigation}) {
    // https://maps.googleapis.com/maps/api/js?key=AIzaSyAAO0GwflDMHg1WuWpvxQATo6dhA6Y7cIQ&libraries=places&callback=initMap

    return <>
        <AvatarComponent/>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Wrapper apiKey={"AIzaSyAAO0GwflDMHg1WuWpvxQATo6dhA6Y7cIQ"} libraries={["places"]}>
                <MyMap/>
            </Wrapper>
        </View>
        <NavBar/>
    </>
}

const mapOptions = {
    mapId: "5cc5baf1cb92354e",
    center: {lat: 43.661036, lng: -79.391277},
    zoom: 18,
    disableDefaultUI: true,
    heading: 25,
    tilt: 70
};

function MyMap() {
    const [_map, setMap] = useState();
    const ref = useRef();
    const overlayRef = useRef();

    navigator.geolocation.getCurrentPosition((data) => {
        mapOptions.center.lat = data.coords.latitude;
        mapOptions.center.lng = data.coords.longitude;

        if (!overlayRef.current) {
            const instance = new window.google.maps.Map(ref.current, mapOptions);
            setMap(instance);
            overlayRef.current = createOverlay(instance);
        }
    }, () => {
        console.log("Oh no...")
    }, {enableHighAccuracy: true})
    return <div ref={ref} id="map" style={{width: "100%", height: "100%"}}/>;
}

function createOverlay(map) {
    const overlay = new window.google.maps.WebGLOverlayView();
    let renderer, scene, camera, loader;

    const service = new window.google.maps.places.PlacesService(map);
    service.nearbySearch({
        location: mapOptions.center,
        radius: 50000,
        type: "museum",
        openNow: true
    }, (o) => {
        o.forEach(m => {
            console.log(m)
            new window.google.maps.Marker({
                position: m.geometry.location
            }).setMap(map);
        })
    });

    overlay.onAdd = () => {
        scene = new Scene();
        camera = new PerspectiveCamera();
        const light = new AmbientLight(0xffffff, 0.9);
        scene.add(light);

        loader = new GLTFLoader();
        loader.loadAsync("https://raw.githubusercontent.com/googlemaps/js-samples/main/assets/pin.gltf").then((object) => {
            const group = object.scene;
            group.scale.set(10, 10, 10);
            group.rotation.x = Math.PI;
            group.rotation.z = Math.PI / 2;
            scene.add(group);
        });
    };

    overlay.onContextRestored = ({gl}) => {
        renderer = new WebGLRenderer({
            canvas: gl.canvas,
            context: gl,
            ...gl.getContextAttributes(),
        });
        renderer.autoClear = false;

        loader.manager.onLoad = () => {
            map.moveCamera({
                tilt: mapOptions.tilt,
                heading: mapOptions.heading,
                zoom: mapOptions.zoom,
            });
        };
    };

    overlay.onDraw = ({transformer}) => {
        const matrix = transformer.fromLatLngAltitude({
            lat: mapOptions.center.lat,
            lng: mapOptions.center.lng,
            altitude: 30,
        });
        camera.projectionMatrix = new Matrix4().fromArray(matrix);

        overlay.requestRedraw();
        renderer.render(scene, camera);
        renderer.resetState();
    };

    overlay.setMap(map);
    return overlay;
}
