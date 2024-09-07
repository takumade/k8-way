"use strict";

class Cluster extends BaseEntity {
  name: string;
  api: string;
  token: string;

  constructor(name: string, api: string, token: string) {
    super();
    this.name = name
    this.api = api  
    this.token = token
    
  }
}

const clusterSchema: any = new EntitySchema({
  class: Cluster,
  extends: "BaseEntity",
  properties: {
    name: { type: "string" },
    api: { type: "string" },
    token: { type: "string" },
  },
});
module.exports = {
  Cluster,
  entity: Cluster,
  clusterSchema,
  label: "clusterRepository",
};