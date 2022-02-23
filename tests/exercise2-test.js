import assert from 'assert';
import { getCountriesLanguagesData } from './../exercises/exercise2.js';

describe('getCountriesLanguagesData Tests:', () => {

    it('Must return correct number of all countries', () => {
        assert.equal(getCountriesLanguagesData().numberOfCountries, 5);
    });

    it('Must return the country with the most official languages, where they officially speak German (de)', () => {
        assert.equal(getCountriesLanguagesData().countryWithTheMostOfficialLanguages.country, "BE");
    });

    it('Must return the count of all the official languages spoken in the listed countries', () => {
        assert.equal(getCountriesLanguagesData().countAllTheOfficialLanguagesSpoken, 8);
    });

    it('Must return the correct country with Highest Number of Official language', () => {
        assert.equal(getCountriesLanguagesData().countryWithTheHighestNumberOfOfficialLanguages.country, "BE");
    });

    it('Must return correct languages of the country with Highest Number of Official language', () => {
        assert.equal(getCountriesLanguagesData().countryWithTheHighestNumberOfOfficialLanguages.languages, "nl,fr,de");
    });

    it('Must return the most common official language(s), of all countries', () => {
        assert.equal(getCountriesLanguagesData().mostCommonOfficialLanguage, "nl,de");
    });
});