const gameplay = {
    name: 'Snortleblat' ,
    logo: 'monster.webp' ,

    character: [
        {creature: 'Swamp Beast Diplomat', level: 5, health: 100 }
    ],

    levelup: function (level) {

        const addup = this.character.findIndex(
            (monster) => monster.level == level
        );
        if (addup >=0 ) {
            this.character[addup].level++
        }

    } ,

    healthdown: function () {

        this.character[0].health -= 20;

        if (this.character[0].health <= 0) {
            this.character[0].health = 0;
            alert("Character Died");
        }
    }
};

// console.log(gameplay.name);

    document.querySelector('#monster_name').textContent = gameplay.name;

    document.querySelector('#monster_class').textContent =
        gameplay.character[0].creature;

    document.querySelector('#monster_level').textContent =
        gameplay.character[0].level;

    document.querySelector('#monster_health').textContent =
        gameplay.character[0].health;

    document.querySelector('img').setAttribute('src', gameplay.logo);
    document.querySelector('img').setAttribute('alt', 'gameplay.name');
    document.querySelector('img').setAttribute('width', 400);

    console.log(gameplay.character[0].creature);

        function renderCharacter() {
        document.querySelector('#monster_name').textContent = gameplay.name;

        document.querySelector('#monster_class').textContent =
            gameplay.character[0].creature;

        document.querySelector('#monster_level').textContent =
            gameplay.character[0].level;

        document.querySelector('#monster_health').textContent =
            gameplay.character[0].health;

        document.querySelector('#monster_image').setAttribute(
            'src',
            gameplay.logo
        );

        document.querySelector('#monster_image').setAttribute(
            'alt',
            gameplay.name
        );
        renderCharacter();
    }

    document.querySelector('#level_up').addEventListener('click', function () {
    gameplay.levelup(gameplay.character[0].level);
    renderCharacter();
});

document.querySelector('#attack').addEventListener('click', function () {
    gameplay.healthdown(gameplay.character[0].health);
    renderCharacter();
});