export default function getSortedHeroes( { heroes} ) {
   return heroes.sort((a, b) => b.health - a.health);
}
const heroes = [
   {name: 'мечник', health: 10},
   {name: 'маг', health: 100},
   {name: 'лучник', health: 80},
 ]