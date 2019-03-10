import { createSelector } from '@ngrx/store';
import { selectPlaces } from './selectPlaces';
import { selectCurrentPlaceId } from './selectCurrentPlaceId';

export const selectCurrentPlace = createSelector(
    selectPlaces,
    selectCurrentPlaceId,
    (places, placeId) => {
        const currentPlace = places.find(place => place.id === placeId);
        return currentPlace ? currentPlace : null;
    }
);
