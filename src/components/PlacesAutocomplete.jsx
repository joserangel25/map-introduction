import React from 'react'
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import { Combobox,
         ComboboxInput,
         ComboboxPopover,
         ComboboxList,
         ComboboxOption } from '@reach/combobox'
import "@reach/combobox/styles.css";

export default function PlacesAutocomplete({ setSelected, setZoom }) {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    console.log(results)
    const { lat, lng } = await getLatLng(results[0]);
    setSelected({
      place_id: results[0].place_id,
      position: { lat, lng }
    });
    setZoom(15)
  };

  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        className="combobox-input"
        placeholder="Search an address"
      />
      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
}