const express = require('express');
const app = express();
const port = process.env.PORT || 8584;
const data = {
  "product":["pictures of boobs","Viagra","spectacular abs","a balanced breakfast","roofies","genital piercings","a bleached asshole","horse meat","same-sex ice dancing","German dungeon porn","the placenta","chainsaws for hands","an icepick lobotomy","hormone injections","sexy pillow fights","a really cool hat","the clitoris","a sad handjob","a micropenis","raptor attacks","agriculture","bling","sexting","mutually-assured destruction","sunshine and rainbows","a sausage festival","emotions","yeast","catapults","seppuku","Five-Dollar Footlongs","a sea of troubles","a zesty breakfast burrito","balls","dental dams","a can of whoop-ass","authentic Mexican cuisine","pixelated bukkake","friends with benefits","the Tempur-Pedic Swedish Sleep System","a thermonuclear detonation","a cooler full of organs","sweet, sweet vengeance","me time","a murder most foul","that thing that electrocutes your abs","Cards Against Humanity","edible underpants","all-you-can-eat shrimp for $4.99","Fancy Feast","the homosexual agenda","the Holy Bible","nipple blades","assless chaps","full frontal nudity","saxophone solos","gloryholes","the World of Warcraft","Hot Pockets","a salty surprise","poorly-timed Holocaust jokes","smallpox blankets","the heart of a child","lockjaw","eugenics","free samples"],
  "customer":["flightless birds","amputees","former President George W. Bush","the Rev. Dr. Martin Luther King, Jr","the Pope","Aaron Burr","elderly Japanese men","the terrorists","William Shatner","Nickelback","Tom Cruise","the profoundly handicapped","Arnold Schwarzenegger","goblins","a falcon with a cap on its head","the invisible man","Sean Penn","heartwarming orphans","men","historically black colleges","Vikings","the Underground Railroad","my humps","geese","the South","Count Chocula","skeletor","Michael Jackson","the Chinese gymnastics team","Dick Cheney","white people","sperm whales","a sassy black woman","the KKK","Gandhi","Christopher Walken","a tiny horse","Genghis Khan","a token minority","RoboCop","Keanu Reeves","flesh-eating bacteria","poor people","Britney Spears at 55","Jewish fraternities","Ronald Reagan","Hulk Hogan","the hardworking Mexican","Natalie Portman","God","Sean Connery","homeless people","Darth Vader","guys who don't call","the milk man","Robert Downey, Jr"],
  "amazon":["doing the wrong thing","concealing a boner","being marginalized","cuddling","laying an egg","praying the gay away","cheating in the Special Olympics","bingeing and purging","making a pouty face","dying","pretending to care","being a dick to children","sniffing glue","eating all of the cookies before the AIDS bake-sale","sharing needles","farting and walking away","leaving an awkward voicemail","teaching a robot to love","scrubbing under the folds","whipping it out","waiting 'til marriage","feeding Rosie O'Donnell","taking off your shirt","pooping back and forth","being a motherfucking sorcerer","pulling out","waking up half-naked in a Denny's parking lot","eating the last known bison","dropping a chandelier on your enemies and riding the rope up","licking things to claim them as your own"],
  "facebook":["coat hanger abortions","the violation of our most basic human rights","self-loathing","fingering","ethnic cleansing","heteronormativity","object permanence","foreskin","dying of dysentery","necrophilia","spontaneous human combustion","penis envy","panda sex","masturbation","natural selection","physician vistis","drinking alone","giving 110%","fiery poops","passive-agression","vehicular manslaughter","scalping"],
  "microsoft":["the Big Bang","fear itself","AIDS","land mines","old-people smell","the Rapture","the American Dream","Spotted Dick","the inevitable heat death of the universe","the folly of man","a time travel paradox","world peace","9/11","the legislative process","Office 365","Azure"],
  "google":["man meat","autocannibalism","smegma","violence","poverty","the Jewish Question","perpetual motion","teen pregnancy","sexual inequality","picking up girls at the abortion clinic","daddy issues","testicular torsion","an Oedipus complex","illegal immigration"],
  "facebookPercent":[10,20,30,40,50,60,70,80,90,100],
  "facebookPerson":["Mark Zuckerberg","Sheryl Sandberg","Dustin Moskovitz","Peter Thiel"],
  "microsoftPerson":["a 7-year-old child","my grandmother","a Medieval peasant","a cat","the office cleaning lady"]
};

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(express.static(__dirname + '/client/dist'));

app.listen(port, function() {
  console.log(`PM Interviews Against Humanity is listening on port ${port}`);
});

app.get('/random', function(req, res) {
  // redeclare vars if they have data already
  let terms = []; 
  let i = 0;
  for (let key in data) {
      i = (Math.floor(Math.random() * (data[key].length)));
      terms.push(data[key][i]);
  };
  res.send(terms);
});