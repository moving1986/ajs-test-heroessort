import getSortedHeroes from '../sortedHeroes';
test('sort array test to healf', () => { 
    const heroes = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
      ]
    
    const final = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
      ]
      
      expect(getSortedHeroes(heroes)).toEqaul(final)
});