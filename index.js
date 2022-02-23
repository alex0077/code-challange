import {printNumbers} from './exercises/exercise1.js';
import {getCountriesLanguagesData} from './exercises/exercise2.js';

console.log(`\x1b[1m%s\x1b[0m`,`------------------------------------------`);
console.log(`\x1b[1m%s\x1b[0m`,`+++++++++++++++ Exercise 1 +++++++++++++++`);
console.log(`\x1b[1m%s\x1b[0m`,`------------------------------------------`);
console.log(`\x1b[1m`,`\x1b[32m`, `Print the whole integer numbers, start from number 1 to the number 100.
When the number is divisible by 3, do not print the number, but print the word
'Visual'. If the number is divisible by 5, do not print the number, but print 'Nuts'. And for all
numbers divisible by both (eg: the number 15) the same, but print 'Visual Nuts': `);
console.log(`\x1b[1m%s\x1b[1m`,`------------------------------------------`);
console.log(`\x1b[33m%s\x1b[1m`, JSON.stringify(printNumbers(1, 100)));
console.log(`\x1b[1m%s\x1b[0m`,``);
console.log(`\x1b[1m%s\x1b[0m`,`------------------------------------------`);
console.log(`\x1b[1m%s\x1b[0m`,`+++++++++++++++ Exercise 2 +++++++++++++++`);
console.log(`\x1b[1m%s\x1b[0m`,`------------------------------------------`);
console.log(`\x1b[1m`,`\x1b[32m`, `Number of Countries:`,`\x1b[33m\x1b[1m  ${getCountriesLanguagesData().numberOfCountries}`);
console.log(`\x1b[1m`,`\x1b[32m`,`The country with the most official languages, where they officially speak German (de): `,`\x1b[33m\x1b[1m ${JSON.stringify(getCountriesLanguagesData().countryWithTheMostOfficialLanguages)}`);
console.log(`\x1b[1m`,`\x1b[32m`, `Count all the official languages spoken in the listed countries: `,`\x1b[33m\x1b[1m ${getCountriesLanguagesData().countAllTheOfficialLanguagesSpoken}`);
console.log(`\x1b[1m`,`\x1b[32m`, `The country with the highest number of official languages: `,`\x1b[33m\x1b[1m ${JSON.stringify(getCountriesLanguagesData().countryWithTheHighestNumberOfOfficialLanguages)}`);
console.log(`\x1b[1m`,`\x1b[32m`, `The most common official language(s), of all countries: `,`\x1b[33m\x1b[1m ${JSON.stringify(getCountriesLanguagesData().mostCommonOfficialLanguage)}`);
console.log(`\x1b[1m%s\x1b[0m`,`------------------------------------------`);
console.log(``);


