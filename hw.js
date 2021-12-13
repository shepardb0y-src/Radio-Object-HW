///////////////////////radio object///////////////////
//create radio object
// Complete the following in your .js file
// Give it a property called stations and make the value an array of station objects
// Give each station object a property called name and songs. Name should be a string and should be an array of song objects.
// Song object should have two properties: title and artist
// Create a method on your radio object that changes the station randomly. 
// When the station is changed, pick a song from that station console.log("Now Playing:" + song,title + "by" + song.artist)

const radio = {
    stations:[
      {  name:["jamin", " Hott 98", "flexicon"],
        songs:{
           title:["bye bye bye", "cry me a river", "motorboat"],
        artists:  ['nysync', "jt","tory Lanez"]
        }
       
    }],
randomStation(){
let random = Math.floor(Math.random() * 3)
if(random === 0){
    console.log(`Now playing ${radio.stations[0].name[0]}  ${radio.stations[0].songs.title[0]} by ${radio.stations[0].songs.artists[0]}`)
}else if(random === 1){
console.log(`Now playing ${radio.stations[0].name[1]}  ${radio.stations[0].songs.title[1]} by ${radio.stations[0].songs.artists[1]}`)
}else {
    console.log(`Now playing ${radio.stations[0].name[2]}  ${radio.stations[0].songs.title[2]} by ${radio.stations[0].songs.artists[2]}`)
}
}
}




// console.log(radio.stations[0].songs.artists)

radio.randomStation()




///////// Animal///////////////////////


class Animal{
    constructor(name,color,age,legs){
this.name= name
this.color=color
this.age=age
this.legs = legs
}

genericSound(){
    console.log('this is generic sound')
    // console.log('this is generic sound',this)

}
eat(){
    console.log('runs to food'
    )
}
 }

const dog = new Animal('spot','brown',2,4)
dog.genericSound()
 const cat = new Animal('rank','gold',7,8)
cat.genericSound()
cat.eat()
