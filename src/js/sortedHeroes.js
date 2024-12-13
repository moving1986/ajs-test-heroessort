export default function getSortedHeroes(heroes) {
   return [...heroes].sort((a, b) => b.health - a.health);
}