import { AppState } from "@/AppState.js";
import { Helper } from "@/models/Helper.js";

class HelpersService {
  constructor() {
    this.ratNames = ["Lurk","Queek","Milo","Tretch","Skrolk","Morskittar","Obsicife","Verminking","Ska","Thanquol","Throt","Sniktch","Sneek","Gnawtail","Skritch","Spiteclaw","Ikit","Bloodtail","Paul","Skuttle","Ironscratch","Aratt","Morlock","Vrisk","Scurrystab","Snitchtongue","Sharpwit","Sleek","Skretch"]
    this.packPre = ["Rat","Sneaky","Green","Unseen","Warpstone","Hidden","Underground","Scurry","Greedy","Lean","Shadow","Slinking","Rushing","Hurried","Shabby","Stabby","Bloody","Selfish","Terrified","Terrible","Passive","Hopeless","Shrouded","Lost","Aggressive","Paranoid","Frantic","Scared","Twitchy","Jumpy"]
    this.packSuff = ["Pack","Stabbers","Grabbers","Thieves","Wrestlers","Group","Clan","Hiders","Finders","Vermin","Rats","Souls","Pathfinders","Stealers","Hoarders","Team","Loners","Grifters","Fighters","Attackers","Leapers","Looters","Miners","Mafia","Gang","Shooters"]
    this.colonyNames = ["Skavenblight","Under-Altdorf","Under-Ubersreik","Under-Middenheim","Hellpit","Under-Helmgart","Under-Couronne","Under-Miragliano","City of Pillars","Crookback Mountain","Oyxl","Altar of the Horned Rat","Under-Lothern","Under-Kislev","Under-Bogenhafen","Under-Nuln","Hotek's Column","Under-Carcassone","Karak Orrug","Under-Tobaro","Under-Hergig","Mordheim"]
  }

  createHelper(type) {
    let newHelper;
    let name;
    const randNumName = Math.floor(Math.random() * this.ratNames.length);
    const randNumPackPre = Math.floor(Math.random() * this.packPre.length);
    const randNumPackSuff = Math.floor(Math.random() * this.packSuff.length);
    const randNumColony = Math.floor(Math.random() * this.colonyNames.length);
    const randTop = Math.floor(Math.random() * 100);
    const randLeft = Math.floor(Math.random() * 100);
    const randRotate = Math.floor(Math.random() * 360);



    if(type == 'Ratstronaut') {
      name = this.ratNames[randNumName];
      newHelper = new Helper({name: name, type: type, top: randTop, left: randLeft, rot: randRotate});
    } else if( type == 'Pack Rat Pack') {
      name = 'The ' + this.packPre[randNumPackPre] + ' ' + this.packSuff[randNumPackSuff];
      newHelper = new Helper({name: name, type: type, top: randTop, left: randLeft, rot: randRotate});
    } else {
      name = this.colonyNames[randNumColony];
      newHelper = new Helper({name: name, type: type, top: randTop, left: randLeft, rot: randRotate});
    }

    AppState.helpers.push(newHelper);
  }
}

export const helpersService = new HelpersService();