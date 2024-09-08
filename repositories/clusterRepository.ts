import { db } from "@/database";
import { Cluster, ClusterUpdate, NewCluster } from "@/entities";

export async function createCluster(data: NewCluster){
    return await db.insertInto('cluster')
                    .values(data)
                    .returningAll()
                    .executeTakeFirstOrThrow()
}