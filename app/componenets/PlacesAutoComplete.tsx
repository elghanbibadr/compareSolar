'use client';

import React, { useEffect, useState, useRef } from "react";
import { useLoadScript } from "@react-google-maps/api";

const libraries = ["places"];

const PlacesAutocomplete = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDq2eejXla8uPif5e-3TgSAMzJasbdKPA4",
    libraries,
  });

  const [input, setInput] = useState({});
  const inputRef = useRef(null);

  useEffect(() => {
    if (!isLoaded || loadError) return;

    const options = {
      componentRestrictions: { country: "au" }, // Restrict to Australia (country: "au")
      fields: ["address_components", "geometry"],
    };

    const autocomplete = new google.maps.places.Autocomplete(inputRef.current, options);
    autocomplete.addListener("place_changed", () => handlePlaceChanged(autocomplete));

    // Clean up listener on component unmount
    return () => google.maps.event.clearInstanceListeners(autocomplete);
  }, [isLoaded, loadError]);

  const handlePlaceChanged = async (autocomplete) => {
    if (!isLoaded) return;
    const place = autocomplete.getPlace();

    if (!place || !place.geometry) {
      setInput({});
      return;
    }

    formData(place);
  };

  const formData = (data) => {
    const addressComponents = data?.address_components;

    const componentMap = {
      subPremise: "",
      premise: "",
      street_number: "",
      route: "",
      country: "",
      postal_code: "",
      administrative_area_level_2: "",
      administrative_area_level_1: "",
    };

    for (const component of addressComponents) {
      const componentType = component.types[0];
      if (componentMap.hasOwnProperty(componentType)) {
        componentMap[componentType] = component.long_name;
      }
    }

    const formattedAddress =
      `${componentMap.subPremise} ${componentMap.premise} ${componentMap.street_number} ${componentMap.route}`.trim();
    const latitude = data?.geometry?.location?.lat();
    const longitude = data?.geometry?.location?.lng();

    setInput({
      streetAddress: formattedAddress,
      country: componentMap.country,
      zipCode: componentMap.postal_code,
      city: componentMap.administrative_area_level_2,
      state: componentMap.administrative_area_level_1,
      latitude: latitude,
      longitude: longitude,
    });
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <input
        ref={inputRef}
        type="text"
        name="address"
        placeholder="Enter an address"
        className="w-full px-4 py-2 border rounded-md"
      />
      {input.streetAddress && (
        <div className="mt-4 p-4 border rounded-md bg-gray-50">
          <p><strong>Address:</strong> {input.streetAddress}</p>
          <p><strong>City:</strong> {input.city}</p>
          <p><strong>State:</strong> {input.state}</p>
          <p><strong>Country:</strong> {input.country}</p>
          <p><strong>Zip Code:</strong> {input.zipCode}</p>
          <p><strong>Latitude:</strong> {input.latitude}</p>
          <p><strong>Longitude:</strong> {input.longitude}</p>
        </div>
      )}
    </div>
  );
};

export default PlacesAutocomplete;
