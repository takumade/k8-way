const { mikroORMConfig } = require("../mikro-orm.config");
const allEntities = require("./entities");
module.exports.initializeORM = async (MikroORM: { init: (arg0: any) => any; }) => {
  const DI = {};

  // @ts-ignore
  DI.orm = await MikroORM.init(mikroORMConfig);

  // @ts-ignore
  DI.em = DI.orm.em;
  for (const entityInstance of allEntities) {
    if (entityInstance.label === "BaseEntity") {
      continue;
    }
    //@ts-ignore
    DI[entityInstance.label] = await DI.orm.em.getRepository(
      entityInstance.entity
    );
  }
  return DI;
};