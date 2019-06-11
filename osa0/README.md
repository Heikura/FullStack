
## Osa 0.4
### Koodi ja visualisointi tehtävästä. 
```
käyttäjä->selain: Käyttäjä syöttää tekstin ja painaa "Save"
selain->palvelin: HTTP POST https://fullstack-exampleapp.herokuapp.com/new_note

note over palvelin:
Formin data tuodaan notena palvelimelle sekä tallennetaan.
end note

palvelin-->selain: text/html, status code 302

note over palvelin:
Tämä tilanne samalla tavalla kuin materiaalissa.
end note

selain->palvelin: HTTP GET https://fullstack-exampleapp.herokuapp.com/notes
palvelin-->selain: HTML-koodi
selain->palvelin: HTTP GET https://fullstack-exampleapp.herokuapp.com/main.css
palvelin-->selain: main.css
selain->palvelin: HTTP GET https://fullstack-exampleapp.herokuapp.com/main.js
palvelin-->selain: main.js

note over selain:
selain alkaa suorittaa js-koodia
joka pyytää JSON-datan palvelimelta
end note

selain->palvelin: HTTP GET https://fullstack-exampleapp.herokuapp.com/data.json
palvelin-->selain: [{ content: "HTML on helppoa", date: "2019-01-01" }, ...]

note over selain:
selain suorittaa tapahtumankäsittelijän
joka renderöi muistiinpanot näytölle
end note
```
![](https://raw.githubusercontent.com/Artoiss/FullStack/master/osa0/osa0.4_kuva.PNG)


## Osa 0.5 
### Koodi ja visualisointi tehtävästä. En huomannut muuta eroa normaaliin verkkosivuun kuin request urlien spa:t. Koodi on muuten suoraan kurssimateriaalista.

```
selain->palvelin: HTTP GET https://fullstack-exampleapp.herokuapp.com/spa
palvelin-->selain: HTML-koodi
selain->palvelin: HTTP GET https://fullstack-exampleapp.herokuapp.com/main.css
palvelin-->selain: main.css
selain->palvelin: HTTP GET https://fullstack-exampleapp.herokuapp.com/spa.js
palvelin-->selain: main.js

note over selain:
selain alkaa suorittaa js-koodia
joka pyytää JSON-datan palvelimelta
end note

selain->palvelin: HTTP GET https://fullstack-exampleapp.herokuapp.com/data.json
palvelin-->selain: [{ content: "HTML on helppoa", date: "2019-01-01" }, ...]

note over selain:
selain suorittaa tapahtumankäsittelijän
joka renderöi muistiinpanot näytölle
end note
```
![](https://raw.githubusercontent.com/Artoiss/FullStack/master/osa0/osa0.5_kuva.PNG)