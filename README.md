# <u>**Challenge Calendar :**</u>

<u>Challenge-Calendar</u> est un projet developpé en Javascript avec Moment.js pour un project d'étude. Développer en seulement en 10 jours. Toutes les fonctionalitées classiques d'un calendrier sont présentes. 

* Calendrier complet généré avec Moment.js.
* Ajout et modification des événements et des labels.
* Personalisation du calendrier.

# <u>**Technologie utilisée :**</u>

- Moment.js, 
- Javascript,
- HTML & CSS,
- GitLab,
- Bootstrap,
- Rome,
- Sass.
- Npm -Webpack.

# <u>**ScreenShot :** </u>



![1550674220923](/home/rapha/.config/Typora/typora-user-images/1550674220923.png)

![1550674362936](/home/rapha/.config/Typora/typora-user-images/1550674362936.png

![1550674378819](/home/rapha/.config/Typora/typora-user-images/1550674378819.png)

## <u>**Fonctionnement :**</u>

La fonction `taInit()` est la fonction qui permet d'afficher un calendrier à jour dans un tableau qui est vide au préalable.

La fonction commence par affiche le titre au moment format moment, supprime le contenu du tableau HTML via `resetCalendar()` puis remplit chaque case en partant du premier du mois. L'appel de `placeDate()` ce fait avec le numéro de ligne et de colonne.

```javascript
let index = 0;

dateToInit = moment();
index = taInit(dateToInit, index);

function taInit(savdate, index) {
    document.querySelector("#ta-title").innerHTML = moment(savdate).format('MMMM').toUpperCase() + ' ' + moment(savdate).format('YYYY');
    date = moment(savdate).startOf('month');
    resetCalendar();

    let weekCount = 0;
    let endMonth = moment(date).endOf('month').format('D')
    for (let i = 0; i < endMonth; i++) {
        index = (placeDate(moment(date), weekCount, moment(date).format('d'), index));
        if (moment(date).format('d') == 0) {
            weekCount += 1;
        }
        date = moment(date).add(1, 'days');
    }
    return (index);

}
```



## <u>Version.</u>

Actuellement en version **1.0.0.**

Des améliorations et des nouveaux ajouts sont susceptibles d'être apportés prochainement :

- Plus d'optimisations et de fluidité.
- Stocker les évenements dans une base de données.
- Amélioration de l'affichage des données.



## <u>Auteurs & Contacts.</u>

* Raphael Ambarts @r.ambart.simp@gmail.com.
* Jean-Jacques Granet@jeanjacques.granet42@gmail.com.
* Samuel Keller @keller.samuel1@gmail.com.
* Salwa Nijaoui @salwa.nijaoui@gmail.com.

Vous pouvez aussi nous retrouvez sur simplonlyon.fr.



## <u>Licences.</u>

Vous pouvez cloner et copier notre code à volontée !

```javascript
if (appreciation === 'perfect'){
    return beer;
}
else if (appreciation === 'great'){
    return star;
}
else{
    return beerQuandMeme,
}
```

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/BeerWare_Logo.svg/800px-BeerWare_Logo.svg.png" width="200px" />