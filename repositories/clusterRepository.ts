import { db } from "@/database";
import { Cluster, ClusterUpdate, NewCluster } from "@/entities";


export async function findClusterById(id: number) {
    return await db.selectFrom('cluster')
      .where('id', '=', id)
      .selectAll()
      .executeTakeFirst()
  }

export async function createCluster(data: NewCluster){
    return await db.insertInto('cluster')
                    .values(data)
                    .returningAll()
                    .executeTakeFirstOrThrow()
}


export async function updateCluster(id: number, updateWith: ClusterUpdate) {
    await db.updateTable('cluster')
            .set(updateWith)
            .where('id', '=', id).execute()
  }