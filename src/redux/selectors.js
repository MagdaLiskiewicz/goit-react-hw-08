import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;

export const selectError = (state) => state.contacts.error;

export const selectIsLoading = (state) => state.contacts.isLoading;

export const selectFilter = (state) => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const lowerCasedFilter = filter.toLowerCase();

    return contacts
      .filter(
        (contact) =>
          contact.name.toLowerCase().includes(lowerCasedFilter) ||
          contact.number.includes(lowerCasedFilter)
      )
      .sort((a, b) => a.name.localeCompare(b.name));
  }
);
