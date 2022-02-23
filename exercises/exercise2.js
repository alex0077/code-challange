import { readFile } from "fs/promises";

const countries = JSON.parse(await readFile("./exercises/countries.json"));

const getCountriesLanguagesData = () => {
    const numberOfCountries = countries.length
    const countryWithTheMostOfficialLanguages = countries.filter(({ languages }) => languages.includes('de')).sort((a, b) => b.languages.length - a.languages.length)[0]
    const countAllTheOfficialLanguagesSpoken = countries.reduce((sum, { languages }) => sum + languages.length, 0)
    const countryWithTheHighestNumberOfOfficialLanguages = countries.sort((a, b) => b.languages.length - a.languages.length)[0]

    let numberOfLanguages = {}

    countries.map(({ languages }) => languages.map(language => {
        if (!numberOfLanguages[language]) numberOfLanguages[language] = 1
        else numberOfLanguages[language] += 1
    }))

    let mostCommonOfficialLanguage = []
    let numberOfMostCommonOfficialLanguages = 0

    for (const key in numberOfLanguages) {
        if (!mostCommonOfficialLanguage || numberOfLanguages[key] > numberOfMostCommonOfficialLanguages) {
            mostCommonOfficialLanguage = [key]
            numberOfMostCommonOfficialLanguages = numberOfLanguages[key]
        } else if (!mostCommonOfficialLanguage || numberOfLanguages[key] == numberOfMostCommonOfficialLanguages) {
            mostCommonOfficialLanguage.push(key)
            numberOfMostCommonOfficialLanguages = numberOfLanguages[key]
        }
    }

    return {
        numberOfCountries,
        countryWithTheMostOfficialLanguages,
        countAllTheOfficialLanguagesSpoken,
        countryWithTheHighestNumberOfOfficialLanguages,
        mostCommonOfficialLanguage
    }
}

export { getCountriesLanguagesData };