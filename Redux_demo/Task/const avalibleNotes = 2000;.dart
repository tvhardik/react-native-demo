const avalibleNotes = 2000;
const totelnote = 15;
const totelAvalibleNote = avalibleNotes * totelnote;
console.log(totelAvalibleNote);

console.log(Math.min(2000, 500, 200, 100));

console.log(Math.min(15, 20, 30, 40));

const a = 15;
const b = 20;
const c = 30;
const d = 40;
const value = Math.min(a, b, c, d);
console.log(value);

var note = [15, 20, 30, 40];
var min = note[0];
for (let i = 1; i < note.length; i++) {
  min = Math.min(min, note[i]);
}
console.log(min);

const avalibleNotes = {
  2000:15,
  500:20,
  200:30,
  100:40
}

for (let key in avalibleNotes) {
  console.log(key);
}

const avalibleNotes = {
  2000: 15,
  500: 20,
  200: 30,
  100: 40
};

for (let key in avalibleNotes) {
  console.log(avalibleNotes[key]);
}


    {/* <View style={{flex: 1, margin: 20, justifyContent: 'space-around'}}>
        <Image
          source={images.Vector}
          style={{width: 45, height: 96, resizeMode: 'contain'}}
        />
        <Image
          source={images.VectorAimbulance}
          style={{width: 45, height: 96}}
        />
      </View> */}


       <Header
        firstImageSource={require('./assets/Icons/aimbulanceIcon.png')}
        departmentName="Emergency Department"
        title="Friday Noon"
        time="58:06"
        lineImage={require('./assets/Icons/line.png')}
        lastImageSource={require('./assets/Icons/manu.png')}
      />