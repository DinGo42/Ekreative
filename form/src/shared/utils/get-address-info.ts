import { getGeocode, getLatLng } from 'use-places-autocomplete';

export const getInfoByAddress = async (value: string) => {
  try {
    const results = await getGeocode({ address: value });

    const { lat, lng } = await getLatLng(results[0]);

    const zipCode = results[0].address_components.find((component) => {
      return component.types.includes('postal_code');
    })?.long_name;

    const city = ['locality', 'political'].map((item) =>
      results[0].address_components.find((component) => {
        return component.types.includes(item);
      })
    )[0]?.long_name;

    const { long_name, short_name } = ['country', 'political'].map((item) =>
      results[0].address_components.find((component) => {
        return component.types.includes(item);
      })
    )[0]!;

    const region = ['administrative_area_level_1', 'political'].map((item) =>
      results[0].address_components.find((component) => {
        return component.types.includes(item);
      })
    )[0]?.long_name;

    const address = results[0].address_components.find((component) => {
      return component.types.includes('street_number');
    })?.long_name;

    const street = results[0].address_components.find((component) => {
      return component.types.includes('route');
    })?.long_name;

    const district = ['sublocality_level_1', 'sublocality', 'political'].map(
      (item) =>
        results[0].address_components.find((component) => {
          return component.types.includes(item);
        })
    )[0]?.long_name;

    return {
      address: address || null,
      street: street || null,
      district: district || null,
      city: city || null,
      region: region || null,
      country: { long_name, short_name },
      zipCode: zipCode || null,
      coords: { lat, lng },
    };
  } catch (e) {
    console.error('Oops something went wrong o_O', e);
    return null;
  }
};
