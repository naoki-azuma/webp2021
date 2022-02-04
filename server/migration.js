import { sequelize, Karuta, User } from "./models.js";
import * as data from "./karuta-data.js";

await sequelize.sync({ force: true });

//deployのために除いた
// for (const { sub, nickname, bestscore, besttime } of data.users) {
//   await User.create({ sub, nickname, bestscore, besttime });
// }
for (const { id, kami, simo } of data.karuta) {
  await Karuta.create({ id, kami, simo });
}